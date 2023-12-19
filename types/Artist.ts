import {ImageGalleryItem} from '../types/ImageGallery'

export type Artist = {
    map(arg0: (artist: any) => JSX.Element): import('react').ReactNode;
    _id: string;
    _type: 'artist';
    name: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    profilePic: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    profilePicTitle: string;
    imageGallery:  ImageGalleryItem[];
    statement: {
      _type: 'array';
      of: {
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
    }[];
    review: {
      _type: 'array';
      of: {
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
    }[];
    bio: {
      _type: 'array';
      of: {
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
    }[];
  };
  
  export default Artist;