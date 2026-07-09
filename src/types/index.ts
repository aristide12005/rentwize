export type ListingType = 'room' | 'apartment' | 'not_sure';
export type BathroomType = 'inside' | 'shared';
export type BillStatus = 'included' | 'not_included' | 'usage';

export interface BillPreferences {
  water: BillStatus;
  electricity: BillStatus;
  internet: BillStatus;
}

export interface AttachedItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface Listing {
  id: string;
  title: string;
  price: number;
  type: ListingType;
  
  // Bathroom
  bathroomType: BathroomType;
  sharedWithCount?: number;
  
  // Bills
  bills: BillPreferences;
  
  // Location
  location: string;
  neighbourhoodDesc: string;
  
  // Amenities
  amenities: string[];
  
  // Media
  imageUrls: string[];
  
  // Items attached to this listing
  attachedItems: AttachedItem[];
  
  // Metadata
  sellerName: string;
  sellerId: string;
  createdAt: string;
}
