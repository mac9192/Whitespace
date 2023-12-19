'use client'
import {useState, useEffect} from'react'
import Image from 'next/image';
import { ArtistSlug } from '../../../../../types/ArtistSlug';
import { fetchArtistWork, urlFor } from '../../../../../sanity/sanity-utils';
import Sidenav from '../../../../../components/Sidenav'
import MyPortableText from '../../../../../MyPortableText'
import { useRouter } from 'next/router'; // Import useRouter from next/router



type Props = {
   params: {
     slug: string;
   };
 };
 
 
 const Gallery = ({ params }: Props) => {
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
     <div className='pl- pr-'>
       {/* Display artist details using the artist object */}
       {artist && (
         <>


<div className="flex">
 {/* Left Menu */}
 <div className="sticky top-0 h-screen w-1/4   p-4">
   <Sidenav slug={artist.slug} name={artist.name} />
 </div>

 {/* Right Content */}
 <div className="flex-1 overflow-y-scroll   ">


 <div>
              
              <ul className="grid grid-cols-2 md:grid-cols-2 gap-4  pl-10   mx-auto  ">
                {artist.imageGallery.map((image:any) => (
                  <li key={image._key}>
                 
                    <Image className="  pb-5  bg-fixed " src={image.imageUrl} alt={image.title} width={500} height={0} />
                    <div className="mx-auto">
                    <h3 className="text-left text-xl">{image.title}</h3>
                    <p className="mx-auto pt-2">{image.dimensions}</p>
                    <p className="pb-10 pt-2  w-3/4">{image.description}</p>
                    </div>
                 
                  </li>
                ))}
              </ul>
</div>

       
      
       
 </div>
</div>
          
         </>
       )}
     </div>
   );
 };
 
 export default Gallery;
