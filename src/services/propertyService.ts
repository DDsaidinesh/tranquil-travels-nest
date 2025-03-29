
import { PropertyProps } from '@/components/PropertyCard';

export interface PropertyDetail extends PropertyProps {
  description: string;
  host: {
    name: string;
    image: string;
    isSuperHost: boolean;
    joinedDate: string;
  };
  features: string[];
  amenities: string[];
  reviews: {
    id: string;
    user: {
      name: string;
      avatar: string;
      date: string;
    };
    rating: number;
    comment: string;
  }[];
}

// Mock data for our properties
const properties: PropertyDetail[] = [
  {
    id: '1',
    title: 'Luxurious Ocean View Villa',
    location: 'Malibu, California',
    distance: '45 miles away',
    dates: 'Nov 12-18',
    price: 350,
    rating: 4.97,
    reviewCount: 128,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',
    ],
    label: 'Beachfront',
    description: 'Perched on a cliff overlooking the Pacific Ocean, this stunning villa offers breathtaking views and luxurious amenities. Enjoy the private infinity pool, outdoor hot tub, and direct beach access. The spacious interior features high ceilings, floor-to-ceiling windows, and designer furnishings.',
    host: {
      name: 'Emma',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      isSuperHost: true,
      joinedDate: 'March 2015',
    },
    features: [
      '6 guests',
      '3 bedrooms',
      '4 beds',
      '3.5 baths',
      'Private pool',
      'Ocean view',
    ],
    amenities: [
      'Wifi',
      'Dedicated workspace',
      'Free parking',
      'Pool',
      'Hot tub',
      'Kitchen',
      'Washer',
      'Dryer',
      'Air conditioning',
      'Outdoor shower',
      'BBQ grill',
      'Fire pit',
    ],
    reviews: [
      {
        id: '101',
        user: {
          name: 'Sarah',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
          date: 'October 2023',
        },
        rating: 5,
        comment: 'This place was absolutely stunning! The views were even better than in the photos. We loved waking up to the sound of the ocean every morning. The house itself is beautifully designed with thoughtful touches throughout.',
      },
      {
        id: '102',
        user: {
          name: 'Michael',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
          date: 'September 2023',
        },
        rating: 5,
        comment: 'An incredible property in a perfect location. Emma was an exceptional host who responded quickly to all our questions. The kitchen was well-equipped for cooking, and we loved using the BBQ for sunset dinners on the terrace.',
      },
      {
        id: '103',
        user: {
          name: 'Jessica',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
          date: 'August 2023',
        },
        rating: 4,
        comment: 'We had a wonderful stay at this beautiful villa. The only minor issue was that the AC in one bedroom wasn\'t working perfectly, but Emma sent someone to fix it the same day we reported it. Overall, a fantastic experience!',
      },
      {
        id: '104',
        user: {
          name: 'David',
          avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80',
          date: 'July 2023',
        },
        rating: 5,
        comment: 'This villa exceeded all our expectations. The privacy, the views, the amenities - everything was perfect for our family getaway. The kids loved the pool, and we adults enjoyed the hot tub with ocean views at night.',
      },
      {
        id: '105',
        user: {
          name: 'Amanda',
          avatar: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&q=80',
          date: 'July 2023',
        },
        rating: 5,
        comment: 'One of the best vacation rentals we\'ve ever stayed in. Every detail was considered, from the well-stocked kitchen to the high-quality linens. The location is unbeatable - close enough to town but feels very private.',
      },
      {
        id: '106',
        user: {
          name: 'Robert',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
          date: 'June 2023',
        },
        rating: 5,
        comment: 'Perfect place for our anniversary trip. The villa is even more beautiful in person than in the photos. We especially loved having coffee on the terrace each morning while watching the dolphins in the ocean. Will definitely be back!',
      },
      {
        id: '107',
        user: {
          name: 'Jennifer',
          avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80',
          date: 'May 2023',
        },
        rating: 5,
        comment: 'This was the highlight of our California trip. The villa is spectacular and the location can\'t be beat. Emma was very responsive and provided great local recommendations. The beach access made it extra special!',
      },
      {
        id: '108',
        user: {
          name: 'Thomas',
          avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
          date: 'April 2023',
        },
        rating: 5,
        comment: 'We rented this villa for a small family reunion and it was perfect. Enough space for everyone to spread out, but also great common areas for spending time together. The kitchen had everything we needed to cook family meals.',
      },
    ],
  },
  {
    id: '2',
    title: 'Mountain Retreat with Hot Tub',
    location: 'Aspen, Colorado',
    distance: '120 miles away',
    dates: 'Dec 5-12',
    price: 275,
    rating: 4.92,
    reviewCount: 86,
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80',
    ],
    label: 'Trending',
    description: 'Nestled in the heart of the Rocky Mountains, this cozy retreat is perfect for nature lovers. Featuring rustic timber architecture and modern comforts, this cabin offers a private hot tub with mountain views, a wood-burning fireplace, and proximity to world-class skiing.',
    host: {
      name: 'James',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80',
      isSuperHost: true,
      joinedDate: 'January 2017',
    },
    features: [
      '8 guests',
      '4 bedrooms',
      '6 beds',
      '3 baths',
      'Hot tub',
      'Mountain view',
    ],
    amenities: [
      'Wifi',
      'Free parking',
      'Hot tub',
      'Kitchen',
      'Indoor fireplace',
      'Washer',
      'Dryer',
      'Air conditioning',
      'Heating',
      'Ski-in/Ski-out',
      'Game room',
      'BBQ grill',
    ],
    reviews: [
      {
        id: '201',
        user: {
          name: 'Daniel',
          avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80',
          date: 'February 2023',
        },
        rating: 5,
        comment: 'This mountain retreat was the perfect place for our ski vacation. The location is ideal - just a short walk to the slopes. The hot tub was amazing after a long day of skiing. James was very helpful with local recommendations.',
      },
      {
        id: '202',
        user: {
          name: 'Laura',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
          date: 'January 2023',
        },
        rating: 5,
        comment: 'We had an incredible winter getaway at this beautiful cabin. The views are breathtaking, and the house had everything we needed. The fireplace kept us warm and cozy, and the kitchen was well-equipped for cooking group meals.',
      },
      {
        id: '203',
        user: {
          name: 'Matthew',
          avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80',
          date: 'December 2022',
        },
        rating: 4,
        comment: 'Great property with amazing views! The only issue we had was that the wifi was a bit spotty, but James was quick to help us troubleshoot. Would definitely stay here again for another ski trip.',
      },
      {
        id: '204',
        user: {
          name: 'Emily',
          avatar: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?auto=format&fit=crop&q=80',
          date: 'November 2022',
        },
        rating: 5,
        comment: 'This cabin exceeded our expectations! It was spotlessly clean, beautifully decorated, and had all the amenities we could ask for. The hot tub under the stars was magical. Perfect for our family Thanksgiving getaway.',
      },
      {
        id: '205',
        user: {
          name: 'Christopher',
          avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80',
          date: 'October 2022',
        },
        rating: 5,
        comment: 'We visited during fall and the autumn colors were spectacular from every window of this home. The game room kept the kids entertained, and the adults loved relaxing in the hot tub. A perfect mountain escape!',
      },
      {
        id: '206',
        user: {
          name: 'Sophia',
          avatar: 'https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?auto=format&fit=crop&q=80',
          date: 'August 2022',
        },
        rating: 5,
        comment: 'Even in summer, this mountain retreat was wonderful. We hiked during the day and enjoyed the hot tub in the evenings. The kitchen had everything we needed for cooking, and the beds were very comfortable.',
      },
    ],
  },
  {
    id: '3',
    title: 'Modern Downtown Loft',
    location: 'New York, New York',
    distance: '5 miles away',
    dates: 'Jan 10-15',
    price: 200,
    rating: 4.85,
    reviewCount: 102,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80',
    ],
    featured: true,
    description: 'Immerse yourself in the vibrant energy of New York City from this stylish loft in the heart of Manhattan. This open-concept space features soaring ceilings, industrial-chic design elements, and massive windows offering spectacular city views. Walking distance to top restaurants, theaters, and attractions.',
    host: {
      name: 'Olivia',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80',
      isSuperHost: true,
      joinedDate: 'August 2018',
    },
    features: [
      '4 guests',
      '1 bedroom',
      '2 beds',
      '1.5 baths',
      'City view',
      'Gym access',
    ],
    amenities: [
      'Wifi',
      'Dedicated workspace',
      'Kitchen',
      'Washer',
      'Dryer',
      'Air conditioning',
      'Heating',
      'Elevator',
      'Doorman',
      'Gym',
      'Coffee maker',
      'Hair dryer',
    ],
    reviews: [
      {
        id: '301',
        user: {
          name: 'Alex',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
          date: 'March 2023',
        },
        rating: 5,
        comment: 'This loft is in the perfect location for exploring NYC! We could walk to so many attractions, restaurants, and shops. The space itself is beautiful - just like the photos. Olivia was a great host and gave us excellent restaurant recommendations.',
      },
      {
        id: '302',
        user: {
          name: 'Rachel',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
          date: 'February 2023',
        },
        rating: 4,
        comment: 'Beautiful apartment with amazing views of the city. It can be a bit noisy at night (it\'s NYC after all!), but Olivia thoughtfully provided earplugs. The location can\'t be beat - we walked everywhere or took the subway which was very close by.',
      },
      {
        id: '303',
        user: {
          name: 'Kevin',
          avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80',
          date: 'January 2023',
        },
        rating: 5,
        comment: 'The loft was exactly as pictured - spacious, modern, and clean. The building has great security and amenities. We particularly enjoyed having morning coffee by the window with that incredible view. Would definitely stay here again!',
      },
      {
        id: '304',
        user: {
          name: 'Nicole',
          avatar: 'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?auto=format&fit=crop&q=80',
          date: 'December 2022',
        },
        rating: 5,
        comment: 'Perfect NYC experience! The loft is stunning and has everything you need. The location is ideal for exploring Manhattan, with great restaurants and bars just steps away. Olivia was an excellent host from start to finish.',
      },
      {
        id: '305',
        user: {
          name: 'Brian',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
          date: 'November 2022',
        },
        rating: 5,
        comment: 'This was the perfect home base for our NYC vacation. The loft is stylish and comfortable, and the building amenities are a nice bonus. We especially appreciated the detailed guide Olivia provided with local recommendations.',
      },
    ],
  },
  {
    id: '4',
    title: 'Tropical Beachfront Bungalow',
    location: 'Kauai, Hawaii',
    distance: '2,700 miles away',
    dates: 'Feb 15-22',
    price: 425,
    rating: 4.99,
    reviewCount: 74,
    images: [
      'https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1545579133-99bb5ab189bd?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80',
    ],
    label: 'Beachfront',
    description: 'Experience true Hawaiian paradise in this authentic beachfront bungalow on Kauai\'s pristine north shore. Fall asleep to the sound of gentle waves and wake up to breathtaking ocean sunrise views. This recently renovated property combines traditional Hawaiian design with modern comforts.',
    host: {
      name: 'Kai',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80',
      isSuperHost: true,
      joinedDate: 'April 2016',
    },
    features: [
      '2 guests',
      '1 bedroom',
      '1 bed',
      '1 bath',
      'Beachfront',
      'Ocean view',
    ],
    amenities: [
      'Wifi',
      'Kitchen',
      'Free parking',
      'Beach essentials',
      'Air conditioning',
      'Outdoor shower',
      'Patio',
      'BBQ grill',
      'Coffee maker',
      'Blender',
      'Beach chairs',
      'Snorkel gear',
    ],
    reviews: [
      {
        id: '401',
        user: {
          name: 'Hannah',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
          date: 'April 2023',
        },
        rating: 5,
        comment: 'This bungalow is absolute paradise! Falling asleep to the sound of waves and waking up to that incredible ocean view was magical. The house had everything we needed, and Kai was an amazing host. We\'re already planning our return trip!',
      },
      {
        id: '402',
        user: {
          name: 'Jason',
          avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80',
          date: 'March 2023',
        },
        rating: 5,
        comment: 'The location of this bungalow is unbeatable. We walked right onto the beach every morning with coffee and watched whales from the patio. The snorkel gear provided was a great touch - we saw turtles right in front of the house!',
      },
      {
        id: '403',
        user: {
          name: 'Megan',
          avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80',
          date: 'February 2023',
        },
        rating: 5,
        comment: 'Perfect honeymoon spot! The bungalow is beautifully designed and had everything we needed. Kai was an exceptional host who went above and beyond, even leaving us a bottle of champagne to celebrate. The private beach access was amazing.',
      },
      {
        id: '404',
        user: {
          name: 'Tyler',
          avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80',
          date: 'January 2023',
        },
        rating: 5,
        comment: 'This place is a slice of heaven. The photos don\'t even do it justice! The bungalow is perfectly appointed with everything you need, and the location cannot be beat. We spent hours on the patio just watching the ocean and enjoying the breeze.',
      },
      {
        id: '405',
        user: {
          name: 'Stephanie',
          avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80',
          date: 'December 2022',
        },
        rating: 5,
        comment: 'Our stay at Kai\'s bungalow was the highlight of our Hawaii trip. The place is immaculate and so thoughtfully designed. We appreciated all the beach equipment provided and Kai\'s local tips were spot on. Can\'t wait to come back!',
      },
    ],
  },
  {
    id: '5',
    title: 'Historic Brownstone Apartment',
    location: 'Boston, Massachusetts',
    distance: '40 miles away',
    dates: 'Mar 3-10',
    price: 180,
    rating: 4.87,
    reviewCount: 93,
    images: [
      'https://images.unsplash.com/photo-1619292585355-ab0e3fd509fe?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80',
    ],
    featured: true,
    description: 'Experience the charm of historic Boston in this beautifully preserved brownstone apartment. Located in the picturesque Beacon Hill neighborhood, this elegant home features original architectural details, modern updates, and a private courtyard garden. Steps from the Freedom Trail, Boston Common, and fine dining.',
    host: {
      name: 'Elizabeth',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80',
      isSuperHost: true,
      joinedDate: 'June 2017',
    },
    features: [
      '4 guests',
      '2 bedrooms',
      '2 beds',
      '1.5 baths',
      'Private entrance',
      'Courtyard garden',
    ],
    amenities: [
      'Wifi',
      'Dedicated workspace',
      'Kitchen',
      'Washer',
      'Dryer',
      'Heating',
      'Air conditioning',
      'Indoor fireplace',
      'Hair dryer',
      'Coffee maker',
      'Books and reading material',
      'High chair',
    ],
    reviews: [
      {
        id: '501',
        user: {
          name: 'William',
          avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
          date: 'April 2023',
        },
        rating: 5,
        comment: 'Elizabeth\'s brownstone was the perfect place for our family Boston vacation. The location is unbeatable - we walked everywhere! The apartment is beautifully decorated with so much historic charm, yet has all the modern amenities you need.',
      },
      {
        id: '502',
        user: {
          name: 'Rebecca',
          avatar: 'https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?auto=format&fit=crop&q=80',
          date: 'March 2023',
        },
        rating: 5,
        comment: 'This apartment is even more beautiful in person than in the photos. The location in Beacon Hill couldn\'t be better - charming streets, great restaurants, and easy access to all the historic sites. Elizabeth provided wonderful recommendations for local restaurants.',
      },
      {
        id: '503',
        user: {
          name: 'Jonathan',
          avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80',
          date: 'February 2023',
        },
        rating: 4,
        comment: 'We had a lovely stay in this historic brownstone. The apartment is well-appointed and full of character. The only minor issue was street parking, which can be challenging in Beacon Hill, but Elizabeth provided helpful information on nearby garages.',
      },
      {
        id: '504',
        user: {
          name: 'Catherine',
          avatar: 'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?auto=format&fit=crop&q=80',
          date: 'January 2023',
        },
        rating: 5,
        comment: 'What a gem! This apartment is in the perfect location for exploring Boston. We loved the historic details combined with modern comforts. The courtyard garden was a peaceful retreat after long days of sightseeing. Elizabeth was a wonderful host.',
      },
      {
        id: '505',
        user: {
          name: 'Andrew',
          avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80',
          date: 'December 2022',
        },
        rating: 5,
        comment: 'Our stay at Elizabeth\'s brownstone exceeded expectations. The apartment is gorgeous with its high ceilings and period details. The kitchen was well-equipped for cooking, and the beds were very comfortable. Would highly recommend for anyone visiting Boston!',
      },
    ],
  },
  {
    id: '6',
    title: 'Lakefront Cabin with Dock',
    location: 'Lake Tahoe, California',
    distance: '180 miles away',
    dates: 'Apr 20-27',
    price: 310,
    rating: 4.95,
    reviewCount: 65,
    images: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1536977891915-07afea99ccef?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1563109236-4eaa9e601d21?auto=format&fit=crop&q=80',
    ],
    label: 'Lakefront',
    description: 'Enjoy the beauty of Lake Tahoe from this charming lakefront cabin with a private dock. Perfect for both summer and winter getaways, this rustic-modern home offers panoramic lake views, a stone fireplace, fully equipped kitchen, and outdoor living spaces for enjoying the mountain air.',
    host: {
      name: 'Marcus',
      image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80',
      isSuperHost: true,
      joinedDate: 'October 2019',
    },
    features: [
      '6 guests',
      '3 bedrooms',
      '4 beds',
      '2 baths',
      'Lakefront',
      'Private dock',
    ],
    amenities: [
      'Wifi',
      'Kitchen',
      'Free parking',
      'Indoor fireplace',
      'Washer',
      'Dryer',
      'Heating',
      'Kayaks',
      'Fishing rods',
      'BBQ grill',
      'Fire pit',
      'Board games',
    ],
    reviews: [
      {
        id: '601',
        user: {
          name: 'Patricia',
          avatar: 'https://images.unsplash.com/photo-1499651681375-8afc5a4db253?auto=format&fit=crop&q=80',
          date: 'September 2023',
        },
        rating: 5,
        comment: 'This cabin was everything we hoped for and more! The lake views are breathtaking, especially at sunrise. We made good use of the kayaks and spent every evening by the fire pit. Marcus was very responsive and made sure we had everything we needed.',
      },
      {
        id: '602',
        user: {
          name: 'Richard',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
          date: 'August 2023',
        },
        rating: 5,
        comment: 'Perfect lakefront getaway! The cabin is well-maintained and has all the amenities you could want. The private dock was fantastic for swimming and fishing. We\'re already planning our next trip back!',
      },
      {
        id: '603',
        user: {
          name: 'Julia',
          avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80',
          date: 'July 2023',
        },
        rating: 4,
        comment: 'We had a wonderful family vacation at this cabin. The kitchen was well-stocked for cooking meals, and the views from the deck were amazing. The only small issue was that the wifi was a bit slow, but honestly, it was nice to disconnect a bit.',
      },
      {
        id: '604',
        user: {
          name: 'Brandon',
          avatar: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0?auto=format&fit=crop&q=80',
          date: 'June 2023',
        },
        rating: 5,
        comment: 'This was the perfect cabin for our group of friends! We spent most of our time on the dock, swimming and using the kayaks. The cabin itself is very comfortable and cozy. Marcus provided excellent directions and local tips. Highly recommend!',
      },
      {
        id: '605',
        user: {
          name: 'Melissa',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
          date: 'May 2023',
        },
        rating: 5,
        comment: 'The cabin exceeded our expectations in every way. It\'s in a perfect location - peaceful and secluded but not far from town. We loved having morning coffee on the deck overlooking the lake. The interior is beautifully designed and has everything you need.',
      },
    ],
  },
  {
    id: '7',
    title: 'Desert Retreat with Pool',
    location: 'Joshua Tree, California',
    distance: '130 miles away',
    dates: 'May 15-20',
    price: 245,
    rating: 4.93,
    reviewCount: 82,
    images: [
      'https://images.unsplash.com/photo-1517754461790-7defbf7b8a9d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539628399213-d6aa89c93074?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523791633495-94ebabc8a795?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&q=80',
    ],
    featured: true,
    description: 'Escape to this architecturally stunning desert home featuring a private pool, outdoor hot tub, and unobstructed views of Joshua Tree National Park. The minimalist design emphasizes the natural beauty of the desert landscape, with floor-to-ceiling windows blurring the line between indoors and outdoors.',
    host: {
      name: 'Sophia',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80',
      isSuperHost: true,
      joinedDate: 'February 2020',
    },
    features: [
      '4 guests',
      '2 bedrooms',
      '2 beds',
      '2 baths',
      'Private pool',
      'Desert views',
    ],
    amenities: [
      'Wifi',
      'Kitchen',
      'Free parking',
      'Pool',
      'Hot tub',
      'Indoor fireplace',
      'Air conditioning',
      'Outdoor shower',
      'BBQ grill',
      'Fire pit',
      'Stargazing equipment',
      'Yoga mats',
    ],
    reviews: [
      {
        id: '701',
        user: {
          name: 'Eric',
          avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80',
          date: 'May 2023',
        },
        rating: 5,
        comment: 'This desert home is absolutely magical! The architecture is stunning, and the views of the desert and stars at night were incredible. The pool was perfect for cooling off during the day, and we loved using the hot tub at night for stargazing.',
      },
      {
        id: '702',
        user: {
          name: 'Maria',
          avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80',
          date: 'April 2023',
        },
        rating: 5,
        comment: 'The perfect desert getaway! The home is beautifully designed and thoughtfully appointed. We spent hours in the pool during the day and by the fire pit at night. Sophia was an amazing host who provided great local recommendations.',
      },
      {
        id: '703',
        user: {
          name: 'Chris',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
          date: 'March 2023',
        },
        rating: 4,
        comment: 'We had a wonderful stay at this beautiful property. The design of the house is impressive, and the location is perfect for exploring Joshua Tree National Park. The only minor issue was that it was quite windy during our stay, which made using the pool a bit challenging at times.',
      },
      {
        id: '704',
        user: {
          name: 'Lauren',
          avatar: 'https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?auto=format&fit=crop&q=80',
          date: 'February 2023',
        },
        rating: 5,
        comment: 'This home is an architectural gem in the desert! Everything was immaculate and exactly as pictured. We loved the minimalist design and how it showcased the beautiful desert surroundings. The stargazing from the hot tub was an unforgettable experience.',
      },
      {
        id: '705',
        user: {
          name: 'Michael',
          avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80',
          date: 'January 2023',
        },
        rating: 5,
        comment: 'A truly special place that exceeded our expectations. The attention to detail in both the design and amenities was impressive. We especially appreciated the privacy and serenity - it felt like our own private oasis in the desert. We\'ll definitely be back!',
      },
    ],
  },
  {
    id: '8',
    title: 'Charming Vineyard Cottage',
    location: 'Sonoma, California',
    distance: '60 miles away',
    dates: 'Jun 7-12',
    price: 280,
    rating: 4.96,
    reviewCount: 79,
    images: [
      'https://images.unsplash.com/photo-1559767949-0faa5c7e9992?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1609704669602-c8363ba9b8bf?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1593053272490-e0ed6d6a42c5?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1454944338482-a69bb95894af?auto=format&fit=crop&q=80',
    ],
    label: 'Countryside',
    description: 'Nestled among the vineyards of Sonoma Valley, this romantic cottage offers an authentic wine country experience. The renovated 1920s farmhouse features a wrap-around porch, organic garden, and panoramic views of the surrounding vineyards and mountains. Perfect for couples or small families seeking a peaceful retreat.',
    host: {
      name: 'Thomas',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80',
      isSuperHost: true,
      joinedDate: 'May 2018',
    },
    features: [
      '4 guests',
      '2 bedrooms',
      '2 beds',
      '1 bath',
      'Vineyard views',
      'Organic garden',
    ],
    amenities: [
      'Wifi',
      'Kitchen',
      'Free parking',
      'Indoor fireplace',
      'Air conditioning',
      'Heating',
      'Washer',
      'Dryer',
      'BBQ grill',
      'Outdoor dining area',
      'Complimentary wine tasting',
      'Bikes',
    ],
    reviews: [
      {
        id: '801',
        user: {
          name: 'Natalie',
          avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80',
          date: 'October 2023',
        },
        rating: 5,
        comment: 'This cottage is a dream! The location among the vineyards is picturesque, and the property itself is charming and comfortable. Thomas was an exceptional host who welcomed us with a bottle of local wine and great recommendations for wineries to visit.',
      },
      {
        id: '802',
        user: {
          name: 'Gregory',
          avatar: 'https://images.unsplash.com/photo-1546456073-92b9f0a8d413?auto=format&fit=crop&q=80',
          date: 'September 2023',
        },
        rating: 5,
        comment: 'We had the most wonderful anniversary trip staying at this cottage. The setting is absolutely beautiful, and the house has everything you need. We loved having morning coffee on the porch overlooking the vineyards and using the provided bikes to explore the area.',
      },
      {
        id: '803',
        user: {
          name: 'Victoria',
          avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80',
          date: 'August 2023',
        },
        rating: 5,
        comment: 'This cottage exceeded our expectations in every way. It\'s even more beautiful in person than in the photos. The kitchen was well-equipped for cooking, and we enjoyed using herbs from the garden. Thomas arranged a private wine tasting for us which was a highlight of our trip!',
      },
      {
        id: '804',
        user: {
          name: 'Daniel',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
          date: 'July 2023',
        },
        rating: 4,
        comment: 'We had a lovely stay at the vineyard cottage. The property is beautiful and very peaceful. The only reason for 4 stars instead of 5 is that it got quite hot during our stay, and while there is air conditioning, it struggled a bit during peak afternoon heat. Otherwise, a wonderful experience!',
      },
      {
        id: '805',
        user: {
          name: 'Olivia',
          avatar: 'https://images.unsplash.com/photo-1592621385612-4d7129426394?auto=format&fit=crop&q=80',
          date: 'June 2023',
        },
        rating: 5,
        comment: 'This cottage is the perfect wine country getaway! The location is ideal - close to many wineries but feels very private and secluded. We loved picking vegetables from the garden for our meals and enjoying the gorgeous sunsets from the porch. Can\'t wait to return!',
      },
    ],
  },
];

// Export functions to get property data
export const getAllProperties = (): PropertyDetail[] => {
  return properties;
};

export const getPropertyById = (id: string): PropertyDetail | undefined => {
  return properties.find(property => property.id === id);
};

export const getFilteredProperties = (filters: Record<string, string>): PropertyDetail[] => {
  let filtered = [...properties];
  
  // Apply filters
  Object.entries(filters).forEach(([key, value]) => {
    if (key === 'location' && value) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(value.toLowerCase())
      );
    }
    else if (key === 'price_min' && value) {
      filtered = filtered.filter(property => property.price >= Number(value));
    }
    else if (key === 'price_max' && value) {
      filtered = filtered.filter(property => property.price <= Number(value));
    }
    else if (key === 'rating' && value) {
      filtered = filtered.filter(property => property.rating >= Number(value));
    }
  });
  
  return filtered;
};

export const getFeaturedProperties = (): PropertyDetail[] => {
  return properties.filter(property => property.featured);
};
