export type ArtistList = {
    name: string;
    slug: {
      current: string;
    };
    profilePic: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
  };
  