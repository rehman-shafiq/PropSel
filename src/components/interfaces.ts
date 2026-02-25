export interface IProperty {
  id: number;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  address: string;
  img: string;
}

export interface IAgent {
  id: number;
  name: string;
  rating: number;
  img: string;
}

export interface IService {
  id: number;
  title: string;
  description: string;
  link: string;
  icon: string;
}

export interface IFAQ {
  id: number;
  question: string;
  answer: string;
}