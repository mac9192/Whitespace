export type HomepageData = {
    _type: 'homepage';
    _id: string;
    title: string;
    description: string;
    homepagePicture: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
  };