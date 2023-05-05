export type Id = string | number;

export type AgeCategory = 'adult' | 'child' | 'family';

export type ActivityState =
  | 'draft'
  | 'published'
  | 'cancelled'
  | 'confirmed'
  | 'finished';

export type Activity = {
  ageCategory: AgeCategory;
  currency: string;
  date: string;
  description: string;
  id: Id;
  location: string;
  maxParticipants: number;
  minParticipants: number;
  price: number;
  slug: string;
  state: ActivityState;
  title: string;
  userId: Id;
};

export const ACTIVITY_EMPTY: Activity = {
  title: 'No title',
  description: 'No description',
  date: '2023-01-01',
  id: 0,
  location: 'No location',
  maxParticipants: 0,
  minParticipants: 0,
  price: 0,
  slug: 'no-slug',
  state: 'draft',
  userId: 0,
  ageCategory: 'adult',
  currency: 'EUR',
};
