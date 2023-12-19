export type ArtistSlug = {
    _id: string;
    name: string;
    slug: {
      current: string;
    };
    profilePic: {
      asset: {
        url: string;
        metadata: {
          dimensions: {
            width: number;
            height: number;
          };
        };
      };
    };
    profilePicTitle: string;
    bio: Block[];
    statement: Block[];
    review: Block[];
    imageGallery: ImageGallery[];
  };
  
  export type Block = {
    _type: 'block';
    style: 'normal' | 'h1';
    children: {
      _type: 'span';
      text: string;
      marks: ('strong' | 'em')[];
    }[];
    markDefs: {
      _type: 'link';
      href: string;
    }[];
    lists: ('bullet' | 'number')[];
  };
  
  export type ImageGallery = {
    _key: string;
    title: string;
    dimensions: string;
    description: string;
    imageUrl: string;
  };