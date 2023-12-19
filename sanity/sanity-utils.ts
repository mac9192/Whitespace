import {Artist} from '../types/Artist'
import {ArtistList} from '../types/ArtistList'
import {ArtistSlug} from '../types/ArtistSlug'
import {HomepageData} from '../types/Homepage'
import { createClient, groq } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import {client} from '../sanity/lib/client'

 
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'default-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'default-dataset';

const imageUrlBuilder = createImageUrlBuilder({ projectId, dataset });
  
  export const urlFor = (source: any) => imageUrlBuilder.image(source);

export async function getArtists(): Promise<Artist[]> {
    return client.fetch(
      groq`*[_type == "artist"] {
        _id,
        name,
        slug {
          current
        },
        profilePic {
          _type,
          asset {
            _ref,
            _type
          }
        },
        profilePicTitle,
        bio,
        statement,
        review,
        'imageGallery': imageGallery[] {
          _key,
          title,
          dimensions,
          description,
          'imageUrl': image.asset->url
        }
      }`
    );
  }

  export async function getHomepageData(): Promise<HomepageData | null> {
    const homepageDataArray = await client.fetch(
      groq`*[_type == "homepage"] {
        title,
        description,
        homepagePicture {
          _type,
          asset {
            _ref,
            _type
          }
        }
      }`
    );
  
    if (homepageDataArray.length > 0) {
      // Return the first object from the array
      return homepageDataArray[0];
    } else {
      // Return null if no data is available
      return null;
    }
  }

  export async function fetchArtistsList(): Promise<ArtistList[]> {
    return client.fetch(
      groq`*[_type == "artist"] {
        name,
        slug {
          current
        },
        profilePic {
          _type,
          asset {
            _ref,
            _type
          }
        }
      }`
    );
  }

  export async function fetchArtistWork(slug: any): Promise<ArtistSlug | null> {
    const artistData = await client.fetch(groq` 
    *[_type == "artist" && slug.current == $slug] {
      _id,
      name,
      slug {
        current
      },
      profilePic {
        asset-> {
          url,
          metadata {
            dimensions
          }
        }
      },
      profilePicTitle,
      bio,
      statement,
      review,
      'imageGallery': imageGallery[] {
        _key,
        title,
        dimensions,
        description,
        'imageUrl': image.asset->url
      }
    }[0]
    
    `, { slug }); // Replace YOUR_QUERY_HERE with the GROQ query from step 1
  
    if (artistData) {
      return artistData;
    }
  
    return null;
  }

 