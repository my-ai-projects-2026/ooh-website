export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  body: any; // Portable Text content
  publishedAt: string;
  mainImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  author?: {
    _id: string;
    name: string;
    image?: {
      asset: {
        _ref: string;
      };
    };
  };
  categories?: Array<{
    _id: string;
    title: string;
  }>;
}
