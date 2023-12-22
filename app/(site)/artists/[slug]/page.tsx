 'use client'
 import {useState, useEffect} from'react'
import Image from 'next/image';
import { ArtistSlug } from '../../../../types/ArtistSlug';
import { fetchArtistWork, urlFor } from '../../../../sanity/sanity-utils';
import Sidenav from '../../../../components/Sidenav'
import MyPortableText from '../../../../MyPortableText'
import { useRouter } from 'next/router'; // Import useRouter from next/router
 


type Props = {
    params: {
      slug: string;
    };
  };
  
  
  const ArtistSlugPage = ({ params }: Props) => {
    const { slug } = params;
 
    const [artist, setArtist] = useState<ArtistSlug | null>(null); // Initialize artist state
  
    useEffect(() => {
      async function fetchArtistData() {
        const artistData = await fetchArtistWork(slug);
        setArtist(artistData);
      }
  
      if (slug) {
        fetchArtistData();
        
      }
    }, [slug]); // Use slug as a dependency

 
 
    
    console.log(artist)
  
    return (
      <div className='relative'>
  {/* Display artist details using the artist object */}
  {artist && (
    <>
      <div className="flex">
        {/* Left Menu */}
        <div className="sticky top-0 h-screen w-1/5 pl-4">
          <Sidenav slug={artist.slug} name={artist.name} />
        </div>

        {/* Right Content */}
        <div className="flex-1 overflow-y-scroll">
          <div className="parallax-image-wrapper relative bg-gray bg-[image:var(--bg-small-url)]  " >
            <Image
              className="mx-auto max-h-[600px] w-2/4 border-b parallax-image"
              src={urlFor(artist.profilePic).url()}
              width={1000}
              height={500}
              alt="Artist Profile Picture"
            />
          </div>
          <div className="p-[40px] w-3/4 mx-auto pt-[100px]">
            <MyPortableText value={artist.bio} />
          </div>
        </div>
      </div>
    </>
  )}
</div>
    );
  };
  
  export default ArtistSlugPage;




  /*



  */