
export enum UserRole {
  OWNER = 'OWNER',
  STUDENT = 'STUDENT'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface PGListing {
  id: string;
  ownerId: string;
  title: string;
  description: string;
  price: number;
  location: {
    address: string;
    city: string;
    lat: number;
    lng: number;
  };
  amenities: string[];
  genderPreference: 'Boys' | 'Girls' | 'Any';
  images: string[];
  occupancyType: 'Single' | 'Double' | 'Triple';
}

export interface Inquiry {
  id: string;
  studentId: string;
  ownerId: string;
  pgId: string;
  message: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
}
