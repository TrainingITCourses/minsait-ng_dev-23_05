//  ! Sample data for activity bookings

import { Activity } from './activity.type';

export const ACTIVITIES: Activity[] = [
  {
    ageCategory: 'adult',
    currency: 'USD',
    date: '2025-01-01',
    description:
      '## Rafting at the Grand Canyon\r\n Experience the **adrenaline** in this _natural wonder_.',
    id: 1,
    location: 'Grand canyon',
    maxParticipants: 10,
    minParticipants: 5,
    price: 300,
    slug: 'grand-canyon-rafting',
    state: 'published',
    title: 'Grand canyon rafting',
    userId: 2,
  },
  {
    ageCategory: 'family',
    date: '2025-03-01',
    description:
      '## Explore the Cumbre Vieja **Volcano**\n Experience the **force** of this _natural beast_ on the beautiful island of La Palma',
    id: 2,
    location: 'Cumbre Vieja',
    maxParticipants: 30,
    minParticipants: 10,
    price: 50,
    currency: 'EUR',
    slug: 'cumbre-vieja-exploration',
    state: 'published',
    title: 'Cumbre Vieja exploration',
    userId: 2,
  },
  {
    ageCategory: 'adult',
    currency: 'EUR',
    date: '2024-01-01',
    description:
      '## Hot air Ballon ride over Cappadocia\r\n Experience the **tranquility** in this _natural beauty_.',
    id: 666,
    location: 'Capadoccia',
    maxParticipants: 4,
    minParticipants: 4,
    price: 200,
    slug: 'balloon-in-cappadocia',
    state: 'cancelled',
    title: 'Balloon in Cappadocia',
    userId: 2,
  },
  {
    ageCategory: 'child',
    currency: 'USD',
    date: '2023-11-09',
    description:
      'Want you to paddleboard on **Switzerland**?\n With a surface of almost _114 square kilometers_, Lake Lucerne is a popular destination for stand-up paddlers.',
    id: 667,
    location: 'Lucerne',
    maxParticipants: 6,
    minParticipants: 4,
    price: 25,
    slug: 'stand-up-paddle-surf-in-lake-lucerne',
    state: 'published',
    title: 'Stand-up paddle surf in Lake Lucerne',
    userId: 5,
  },
  {
    ageCategory: 'adult',
    currency: 'USD',
    date: '2024-05-20',
    description:
      "## Hiking in the **Alps**\r\n Experience the **tranquility** in this _natural beauty_.\r\n\r\nIt's a _long_ way up, but the view is _worth_ it.",
    id: 668,
    location: 'French Alps',
    maxParticipants: 10,
    minParticipants: 5,
    price: 100,
    slug: 'hiking-in-the-alps',
    state: 'draft',
    title: 'Hiking in the Alps',
    userId: 5,
  },
  {
    ageCategory: 'family',
    currency: 'USD',
    date: '2022-05-20',
    description:
      "## Boat cruise in the **Danube**\r\n Experience the **tranquility** in this _big river_.\r\n\r\nIt's a dream trip between castles and mountains.",
    id: 669,
    location: 'Budapest',
    maxParticipants: 50,
    minParticipants: 10,
    price: 100,
    slug: 'boat-cruise-in-the-danube',
    state: 'finished',
    title: 'Boat cruise in the Danube',
    userId: 5,
  },
];

export const ACTIVITY_STATES = [
  {
    caption: 'Draft',
    icon: '💭',
    id: 'draft',
    userId: 1,
  },
  {
    caption: 'Published',
    icon: '📢',
    id: 'published',
    userId: 1,
  },
  {
    caption: 'Confirmed',
    icon: '✅',
    id: 'confirmed',
    userId: 1,
  },
  {
    caption: 'Finished',
    icon: '🔚 ',
    id: 'finished',
    userId: 1,
  },
  {
    caption: 'Cancelled',
    icon: '🚫',
    id: 'cancelled',
    userId: 1,
  },
];

export const AGE_CATEGORIES = [
  {
    caption: 'Adult',
    icon: '👨🏼‍🦰',
    id: 'adult',
    userId: 1,
  },
  {
    caption: 'Child',
    icon: '👦🏼',
    id: 'child',
    userId: 1,
  },
  {
    caption: 'Family',
    icon: '👨‍👩‍👧‍👦',
    id: 'family',
    userId: 1,
  },
];
