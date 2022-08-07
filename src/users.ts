import { make } from './newtype';
import { User } from './types';

export const users: User[] = [
  { id: make<User['id']>('1'), name: 'Sandra', verificationStatus: 'verified' },
  {
    id: make<User['id']>('2'),
    name: 'Petra',
    verificationStatus: 'unverified',
  },
];
