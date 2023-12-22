
'use client'
import {useEffect, useState} from 'react'
import { HomepageData   } from '../../types/Homepage';
import Image from 'next/image'
import homepic from '../../public/assets/bgwsp.webp'
import {getHomepageData, urlFor} from '../../sanity/sanity-utils'
 


const Homepage = () => {
  const [homeData, setHomeData] = useState<HomepageData | null>(null);  //feed the tpes here bc they are going into setHomeData homeData
  

  useEffect(() => {
    const fetchHomepageData = async () => {
      try {
        const data = await getHomepageData();
        setHomeData(data);
      } catch (error) {
        console.error('Error fetching homepage data:', error);
        // Handle the error if necessary
      }
    };

    fetchHomepageData();
  }, []); // Empty dependency array makes this effect run only once when the component mounts

  if (homeData) {
    const imageUrl = urlFor(homeData.homepagePicture.asset._ref).url();
    console.log(imageUrl);

    return (
      <div className="relative  ">
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none pl-5 pr-5"
          src={imageUrl}
          alt="header pic"
          priority
        />
        <div className="relative h-screen w-full">
          <div className="absolute bottom-0 right-0  mb-32 ">
            <div className="bg-white h-46 w-96 text-black">
              <div className="p-5">
                <p className="text-xl text-textgray ">Closing Soon</p>
                <p className="mx-auto text-3xl text-textgray  ">{homeData.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle the case where homeData is null or still loading
  return <div>Loading...</div>; // You can provide your own loading UI or message here
};

export default Homepage;