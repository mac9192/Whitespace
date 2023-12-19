'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { ArtistList  } from '../../../types/ArtistList';
import { fetchArtistsList, urlFor } from '../../../sanity/sanity-utils';
import '../../../app/globals.css'

const ArtistListPage  = () => {
  const [artists, setArtists] = useState<ArtistList[]>([]);

  useEffect(() => {
    async function fetchArtistsData() {
      const artistsData = await fetchArtistsList();
      setArtists(artistsData);
    }

    fetchArtistsData();
  }, []);

 
  return (
    
    <div className="pl-5 pr-5 ">
      <h1 className="text-3xl p-11 bg-gray-100   ">Artists</h1>
      {/* Display artist names in a grid */}
      <div className="grid grid-cols-4 gap-4 mx-auto p-12 bg-gray-100  ">
          
        {artists.map((artist) => (
           <a href={`/artists/${artist.slug.current}`} key={artist.slug.current}>
           <div className="col-span-1 mx-auto">{artist.name}</div>
         </a>
        ))}
      </div>
      {/* Display artist cards with profile pictures */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4  pt-10">
        {artists.map((artist) => (
          <div key={artist.slug.current} className="bg-white border-b ">
          
           
             <a href={`/artists/${artist.slug.current}`}><Image className="w-full max-h-[250px] object-cover  "  src={urlFor(artist.profilePic.asset._ref).url()}   width={1000} height={1000} alt={artist.name} /></a>  
        
            <div className="p-4">
              <h3 className="text-xl font-semibold">{artist.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistListPage;














































/*'use client'
import React, { useEffect, useState } from 'react';
import { Artist } from '../../../types/Artist';
import { getArtists, urlFor } from '../../../sanity/sanity-utils';
import Image from 'next/image';

function ArtistList() {
  const [artists, setArtists] = useState<Artist[]>([]); //feed the tpes here bc they are going into setArtists, artists
  
  useEffect(() => {
    async function fetchArtists() {
      const artistsData = await getArtists();
      console.log(artistsData);
      setArtists(artistsData);
    }

    fetchArtists();
  }, []);

  return (
    <div className="bg-white text-black">
      <h1>Artists</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist._id}>
            <h2>{artist.name}</h2>
            {/* Other fields */ /*}
            <p>Gallery:</p>
            <div>
              <h3 className="text-5xl">Image Gallery</h3>
              <ul>
                {artist.imageGallery.map((image:any) => (
                  <li key={image._key}>
                    <h4>{image.title}</h4>
                    <img src={image.imageUrl} alt={image.title} />
                    <p>{image.dimensions}</p>
                    <p>{image.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Other fields */ /*} 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArtistList;*/