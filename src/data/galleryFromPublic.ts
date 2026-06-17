export type GalleryImageCategory =
  | 'Farms'
  | 'Products'
  | 'Fields'
  | 'Dealer Shop'
  | 'Farmer Visits'
  | 'World Environment Day';

export type GalleryImage = {
  src: string;
  category: GalleryImageCategory;
};

// Map Agriculture Gallery items to local files inside /public
export const galleryFromPublic: GalleryImage[] = [
  { src: '/Farms.jpeg', category: 'Farms' },
  { src: '/Products.jpeg', category: 'Products' },
  { src: '/Fields.jpeg', category: 'Fields' },
  { src: '/Dealer Shop.jpeg', category: 'Dealer Shop' },
  { src: '/Farmer Visits.jpeg', category: 'Farmer Visits' },
  // Extra local image available in /public
  { src: '/World_Environment_Day.jpeg', category: 'World Environment Day' },
];

