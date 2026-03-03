// types.ts
export interface Property {
  id: number;
  category: 'housing' | 'high-rise';
  price: number;        
  displayPrice: string; 
  location: string;
  developer: string;
  project: string;
  image: string;
  type: 'House' | 'Plot' | 'Flat'; 
  beds: number;
  baths: number;
  size: string;
  lat: number;  
  lng: number;
}