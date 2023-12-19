import Image from 'next/image'
const artists = [
   
          "Laura Bell",
          "Ashlynn Browning",
          "Benita Carr",
          "Teresa Cole",
          "Stephanie Dowda DeMer",
          "Hamlett Dobbins",
          "Craig Dongoski",
          "Didi Dunphy",
          "Sarah Emerson",
          "Nancy Floyd",
          /*"Wendy Given",
          "Matt Haffner",
          "Dana Haugaard",
          "Melissa Huang",
          "Sonya Yong James",
          "Benjamin Jones",
          "Amy Landesberg",
          "Elizabeth Lide",
          "Eric Mack",
          "Ann-Marie Manker",
          "John Otte",
          "Suellen Parker",
          "Vesna Pavlović",
          "Sandra-Lee Phipps",
          "Amy Pleasant",
          "Teresa Bramlette Reeves",
          "Seana Reilly",
          "Shana Robbins",
          "Pete Schulte",
          "Richard Sexton",
          "Jered Sprecher",
          "Whitney & Micah Stansell",
          "Ann Stewart",
          "Tommy Taylor",
          "Constance Thalken",
          "Zipporah Camille Thompson",
          "Robert Walden",
          "Charlie Watts",
          "Emily Weiner" */
]



const Example = () => {

    return (
        <div className="pl-10 pr-10">
        <div className="grid grid-cols-4 gap-4 mx-auto p-12 bg-gray-200  ">
          {artists.map((artist, index) => {
            return (
              <div key={index} className="col-span-1  mx-auto">
                {artist}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4  pt-10">
   
            <div className="bg-white    ">

                <Image className="" src='/assets/bgwsp.webp' width={1000} height={1000} alt='Picture' />
                <p className='p-5 font-bold border-b '>Laura Bell</p>
            </div>

            
            <div className="bg-white    ">

                <Image className="" src='/assets/bgwsp.webp' width={1000} height={1000} alt='Picture' />
                <p className='p-5 font-bold border-b '>Laura Bell</p>
            </div>

            
            <div className="bg-white    ">

                <Image className="" src='/assets/bgwsp.webp' width={1000} height={1000} alt='Picture' />
                <p className='p-5 font-bold border-b '>Laura Bell</p>
            </div>

            
            <div className="bg-white    ">

                <Image className="" src='/assets/bgwsp.webp' width={1000} height={1000} alt='Picture' />
                <p className='p-5 font-bold border-b '>Laura Bell</p>
            </div>
            
            <div className="bg-white    ">

<Image className="" src='/assets/bgwsp.webp' width={1000} height={1000} alt='Picture' />
<p className='p-5 font-bold border-b '>Laura Bell</p>
</div>


<div className="bg-white    ">

<Image className="" src='/assets/bgwsp.webp' width={1000} height={1000} alt='Picture' />
<p className='p-5 font-bold border-b '>Laura Bell</p>
</div>


<div className="bg-white    ">

<Image className="" src='/assets/bgwsp.webp' width={1000} height={1000} alt='Picture' />
<p className='p-5 font-bold border-b '>Laura Bell</p>
</div>


<div className="bg-white    ">

<Image className="" src='/assets/bgwsp.webp' width={1000} height={1000} alt='Picture' />
<p className='p-5 font-bold border-b '>Laura Bell</p>
</div>





</div>
      </div>
    )
}

export default Example  

 