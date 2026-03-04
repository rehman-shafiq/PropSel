import type { IProperty, IAgent, IService, IFAQ } from './interfaces';

export const properties: IProperty[] = [
  { id: 1, price: '$500,000', beds: 3, baths: 2, sqft: '1,800 sqft', address: '123 Main St, Downtown City', img: 'https://images.unsplash.com/photo-1580587767526-cf3a701ae294?auto=format&fit=crop&w=800&q=80' },
  { id: 2, price: '$750,000', beds: 4, baths: 3, sqft: '2,200 sqft', address: '456 Oak Ave, Suburb Area', img: 'https://images.unsplash.com/photo-1580587767526-cf3a701ae294?auto=format&fit=crop&w=800&q=80' },
  { id: 3, price: '$600,000', beds: 3, baths: 2, sqft: '1,900 sqft', address: '789 Pine Rd, Uptown District', img: 'https://images.unsplash.com/photo-1580587767526-cf3a701ae294?auto=format&fit=crop&w=800&q=80' },
  { id: 4, price: '$450,000', beds: 2, baths: 2, sqft: '1,500 sqft', address: '321 Elm St, Riverside', img: 'https://images.unsplash.com/photo-1580587767526-cf3a701ae294?auto=format&fit=crop&w=800&q=80' },
  { id: 5, price: '$800,000', beds: 5, baths: 4, sqft: '2,800 sqft', address: '654 Maple Ln, Mountain View', img: 'https://images.unsplash.com/photo-1580587767526-cf3a701ae294?auto=format&fit=crop&w=800&q=80' },
  { id: 6, price: '$550,000', beds: 3, baths: 2, sqft: '1,700 sqft', address: '987 Cedar Dr, Beachfront', img: 'https://images.unsplash.com/photo-1580587767526-cf3a701ae294?auto=format&fit=crop&w=800&q=80' },
];

export const agents: IAgent[] = [
  { id: 1, name: 'John Doe', rating: 5, img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Jane Smith', rating: 5, img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Mike Johnson', rating: 5, img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'David Brown', rating: 5, img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Emily Davis', rating: 5, img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80' },
  { id: 7, name: 'Chris Miller', rating: 5, img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80' },
  { id: 9, name: 'Tom Anderson', rating: 5, img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80' },
  { id: 10, name: 'Anna Martinez', rating: 5, img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80' },
  { id: 11, name: 'Robert Lee', rating: 5, img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80' },
];

export const services: IService[] = [
  { id: 1, title: 'Buy a home', description: 'Find your place with an immersive photo experience and the most listings, including things you won\'t find anywhere else.', link: 'Find a local agent', icon: 'Home' },
  { id: 2, title: 'Rent a home', description: 'We\'re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.', link: 'Find rentals', icon: 'Key' },
  { id: 3, title: 'Sell a home', description: 'No matter what path you take to sell your home, we can help you navigate a successful sale. We\'ll guide you every step of the way.', link: 'See your options', icon: 'TrendingUp' },
];

export const faqs: IFAQ[] = [
  { id: 1, question: 'How does the home buying process work?', answer: 'The home buying process typically involves finding a home, making an offer, getting a mortgage, and closing the deal.' },
  { id: 2, question: 'What are agent commissions?', answer: 'Agent commissions are typically 5-6% of the home\'s sale price, split between the buyer\'s and seller\'s agents.' },
  { id: 3, question: 'How do I register as an agent?', answer: 'To register as an agent, you need to complete pre-licensing education, pass the licensing exam, and find a sponsoring broker.' },
  { id: 4, question: 'What documents do I need to buy a home?', answer: 'You\'ll need proof of income, credit reports, tax returns, and identification documents.' },
  { id: 5, question: 'How long does it take to sell a home?', answer: 'The average time to sell a home varies, but it typically takes 30-60 days from listing to closing.' },
];