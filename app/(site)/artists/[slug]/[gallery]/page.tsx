'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArtistSlug } from '../../../../../types/ArtistSlug';
import { fetchArtistWork, urlFor } from '../../../../../sanity/sanity-utils';
import Sidenav from '../../../../../components/Sidenav';
import MyPortableText from '../../../../../MyPortableText';
import { useRouter } from 'next/router';

type Props = {
  params: {
    slug: string;
  };
};

const Gallery = ({ params }: Props) => {
  const { slug } = params;
  const [artist, setArtist] = useState<ArtistSlug | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageInfo, setSelectedImageInfo] = useState<any | null>(null);

  useEffect(() => {
    async function fetchArtistData() {
      const artistData = await fetchArtistWork(slug);
      setArtist(artistData);
    }

    if (slug) {
      fetchArtistData();
    }
  }, [slug]);

  const openModal = (imageSrc: string, imageInfo: any) => {
    setSelectedImage(imageSrc);
    setSelectedImageInfo(imageInfo);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageInfo(null);
  };

  return (
    <div className="pl- pr-">
      {artist && (
        <>
          <div className="flex flex-row">
            <div className="sticky top-0 h-screen w-1/4 p-4">
              <Sidenav slug={artist.slug} name={artist.name} />
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[105px] pl-10 mx-auto p-10">
              {artist.imageGallery.map((image: any) => (
                <li className="" key={image._key}>
                  <button
                    onClick={() => openModal(image.imageUrl, image)}
                    className="relative"
                  >
                    <Image
                      className="max-h-[350px] min-h-[350px] pb max-w-md mx-auto object-fill"
                      src={image.imageUrl}
                      alt={image.title}
                      width={400}
                      height={1000}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300">
                    
                    </div>
                  </button>
                  <div className="mx-auto max-w-sm">
                    <h3 className="text-left text-xl">{image.title}</h3>
                    <p className="mx-auto pt-2">{image.dimensions}</p>
                    <p className="pb-10 pt-2 w-3/4">{image.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Modal */}
          {selectedImage && selectedImageInfo && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 transition-all duration-1000 ease-in-out bg-black bg-opacity-90">
              <div className="max-w-screen-lg p-4 overflow-y-auto bg-white rounded-lg">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 border p-2 pl-4  pr-4 text-white hover:text-red-700 text-xl"
                >
                  Close
                </button>
                <img
                  src={selectedImage}
                  alt={selectedImageInfo.title}
                  className="max-w-full max-h-[600px] mx-auto"
                />
                <div className="text-xl mt-4">{selectedImageInfo.title}</div>
                <div className="text-lg mt-2">
                  {selectedImageInfo.dimensions}
                </div>
                <div className="mt-2">{selectedImageInfo.description}</div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Gallery;