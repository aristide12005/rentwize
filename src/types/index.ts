export type ListingType = 'housing' | 'item';

export interface Listing {
  id: string;
  title: string;
  price: number;
  description: string;
  type: ListingType;
  location: string;
  imageUrl: string;
  sellerName: string;
  createdAt: string;
}
