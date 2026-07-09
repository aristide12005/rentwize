import React, { useState } from 'react';
import { Search, CheckCheck, Image as ImageIcon, Video, Paperclip } from 'lucide-react';

interface MockUser {
  id: string;
  name: string;
  email: string;
  location: string;
  avatar: string;
  online: boolean;
  customerId: string;
}

interface MockMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read';
}

interface MockConversation {
  id: string;
  user: MockUser;
  messages: MockMessage[];
  unreadCount: number;
}

const mockConversations: MockConversation[] = [
  {
    id: 'c1',
    user: {
      id: 'u1',
      name: 'Killan James',
      email: 'killanjames@gmail.com',
      location: '2715 Ash Dr. San Jose, South Dakota 83475',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      online: true,
      customerId: '4554455',
    },
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'u1', text: 'My budget is around 3,000 BDT. I want good sound quality and long battery life.', timestamp: '4:30 PM' },
      { id: 'm2', senderId: 'admin', text: 'Great choice! Within that budget, we recommend the XSound Pro Bluetooth Headphone.\n\n• Battery backup: up to 20 hours\n• Noise reduction feature\n• 1-year warranty', timestamp: '4:30 PM', status: 'read' },
      { id: 'm3', senderId: 'u1', text: 'Sounds good. Let\'s do it. This is Pretty Nice!', timestamp: '4:30 PM' },
    ]
  },
  {
    id: 'c2',
    user: {
      id: 'u2',
      name: 'Marvin McKinney',
      email: 'marvin@example.com',
      location: '123 Fake St, NY',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      online: false,
      customerId: '4554456',
    },
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'u2', text: 'Hello! Everyone', timestamp: '4:30 PM' },
    ]
  },
  {
    id: 'c3',
    user: {
      id: 'u3',
      name: 'Bessie Cooper',
      email: 'bessie@example.com',
      location: 'Los Angeles, CA',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
      online: true,
      customerId: '4554457',
    },
    unreadCount: 2,
    messages: [
      { id: 'm1', senderId: 'u3', text: 'Wow!\nReally Cool 🔥', timestamp: '4:30 PM' },
    ]
  },
  {
    id: 'c4',
    user: {
      id: 'u4',
      name: 'Eleanor Pena',
      email: 'eleanor@example.com',
      location: 'Chicago, IL',
      avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
      online: false,
      customerId: '4554458',
    },
    unreadCount: 0,
    messages: [
      { id: 'm1', senderId: 'u4', text: 'Amazing\nProduct 🔥', timestamp: '4:30 PM' },
    ]
  }
];

export const AdminConversations: React.FC = () => {
  const [activeConvId, setActiveConvId] = useState<string>(mockConversations[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const activeConv = mockConversations.find(c => c.id === activeConvId);

  return (
    <div className="admin-chat-container">
      {/* Left Pane - Recent Messages list */}
      <div className="admin-chat-list">
        <div className="admin-chat-list-header">
          <h3>Recent Messages</h3>
          <div className="search-bar">
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Search here..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="admin-chat-items">
          {mockConversations.map(conv => (
            <div 
              key={conv.id} 
              className={`admin-chat-item ${activeConvId === conv.id ? 'active' : ''}`}
              onClick={() => setActiveConvId(conv.id)}
            >
              <div className="admin-chat-avatar-wrapper">
                <img src={conv.user.avatar} alt={conv.user.name} />
                {conv.user.online && <div className="online-indicator"></div>}
              </div>
              <div className="admin-chat-item-content">
                <div className="admin-chat-item-top">
                  <h4>{conv.user.name}</h4>
                  <span className="admin-chat-item-time">{conv.messages[conv.messages.length - 1].timestamp}</span>
                </div>
                <div className="admin-chat-item-bottom">
                  <p className="admin-chat-item-preview">
                    {conv.messages[conv.messages.length - 1].text}
                  </p>
                  {conv.unreadCount > 0 ? (
                    <div className="unread-badge">{conv.unreadCount}</div>
                  ) : (
                    conv.messages[conv.messages.length - 1].senderId === 'admin' && <CheckCheck size={16} color="#4CA771" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Pane - Chat Window */}
      <div className="admin-chat-window">
        {activeConv ? (
          <>
            <div className="admin-chat-window-header">
              <div className="admin-chat-avatar-wrapper">
                <img src={activeConv.user.avatar} alt={activeConv.user.name} />
                {activeConv.user.online && <div className="online-indicator"></div>}
              </div>
              <div>
                <h3>{activeConv.user.name}</h3>
                <span className={`status-text ${activeConv.user.online ? 'online' : ''}`}>
                  {activeConv.user.online ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>

            <div className="admin-chat-messages">
              {activeConv.messages.map(msg => {
                const isAdmin = msg.senderId === 'admin';
                return (
                  <div key={msg.id} className={`chat-bubble-wrapper ${isAdmin ? 'admin' : 'user'}`}>
                    {!isAdmin && (
                      <div className="chat-bubble-avatar">
                        <img src={activeConv.user.avatar} alt={activeConv.user.name} />
                      </div>
                    )}
                    <div className="chat-bubble-content">
                      <div className="chat-bubble-header">
                        <span className="chat-bubble-name">{isAdmin ? 'RentWize Admin' : activeConv.user.name}</span>
                        <span className="chat-bubble-time">{msg.timestamp}</span>
                      </div>
                      <div className={`chat-bubble ${isAdmin ? 'admin' : 'user'}`}>
                        {msg.text.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i !== msg.text.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                      {isAdmin && msg.status && (
                        <div className="chat-message-status">
                          <CheckCheck size={14} color={msg.status === 'read' ? '#4CA771' : '#999'} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="admin-chat-input-area">
              <button className="chat-attach-btn"><Paperclip size={20} /></button>
              <button className="chat-attach-btn"><ImageIcon size={20} /></button>
              <button className="chat-attach-btn"><Video size={20} /></button>
              <div className="chat-input-wrapper">
                <input type="text" placeholder="Type your message..." />
              </div>
              <button className="chat-send-btn">Send</button>
            </div>
          </>
        ) : (
          <div className="admin-chat-empty">
            <p>Select a conversation to start chatting</p>
          </div>
        )}
      </div>

      {/* Right Pane - User Details */}
      <div className="admin-chat-details">
        {activeConv && (
          <>
            <div className="admin-user-profile-large">
              <img src={activeConv.user.avatar} alt={activeConv.user.name} />
              <h3>{activeConv.user.name}</h3>
              <p className="admin-customer-id">Customer ID: <span>{activeConv.user.customerId}</span></p>
            </div>

            <div className="admin-user-info-section">
              <div className="admin-user-info-item">
                <span className="label">Email</span>
                <span className="value">{activeConv.user.email}</span>
              </div>
              <div className="admin-user-info-item">
                <span className="label">Location</span>
                <span className="value">{activeConv.user.location}</span>
              </div>
            </div>

            <div className="admin-user-files-section">
              <h4>Order & Files</h4>
              <div className="admin-tabs">
                <button className="admin-tab active">Order</button>
                <button className="admin-tab">Files</button>
                <button className="admin-tab">Photo</button>
              </div>
              <div className="admin-files-list">
                <div className="admin-file-item">
                  <div className="admin-file-icon image">
                    <ImageIcon size={20} />
                  </div>
                  <div className="admin-file-info">
                    <span className="date">Date: 22/10/2025</span>
                    <span className="name">Cannon- EOS 1300D</span>
                  </div>
                  <div className="admin-file-action">45</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
