export interface User {
  id: string;
  email: string;
  nickname: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  city: string;
  verified: boolean;
  verificationTier: number;
  photoUrl?: string;
  bio?: string;
  intent?: string;
  values?: string[];
  createdAt: string;
}

export interface Profile {
  userId: string;
  displayName: string;
  bio: string;
  intent: string;
  readyForDate: string;
  pace: string;
  values: string[];
  boundaries: string;
  dealbreakers: string;
  morningOrNight: string;
  homebodyOrOutgoing: string;
  travelFrequency: string;
  communicationStyle: string;
  photoUrl: string;
}

export interface MatchSuggestion {
  id: string;
  userId: string;
  name: string;
  age: number;
  location: string;
  intent: string;
  bio: string;
  verified: boolean;
  compatibility: number;
  values: string[];
  photoUrl?: string;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: string;
  read: boolean;
  warning?: string;
}

export interface VerificationTier {
  level: number;
  name: string;
  requirements: string[];
  benefits: string[];
}

export interface Report {
  id: string;
  reporterId: string;
  reportedId: string;
  reason: string;
  severity: 'low' | 'medium' | 'high' | 'emergency';
  status: 'open' | 'investigating' | 'resolved';
  createdAt: string;
}
