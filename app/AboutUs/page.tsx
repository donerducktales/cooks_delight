import Image from "next/image";
import { homemadeApple, montserrat, roboto } from "../assets/fonts";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import authorImage from '@/public/AboutUs/author-image.png';
import facebookLogoDark from '@/public/AboutUs/facebook-logo-dark.png';
import instaLogoDark from '@/public/AboutUs/insta-logo-dark.png';
import youtubeLogoDark from '@/public/AboutUs/yt-logo-dark.png';
import smc from '@/public/AboutUs/gallery-wrapper-img1.png'

export default function AboutUs() {
   return (
      <main className={`flex flex-col justify-between items-center min-h-screen w-full bg-background ${'main'}`}>
         <div className={`flex flex-col items-center w-[calc(100%-2rem)] max-w-[1312px] ${'mainContainer'}`}>
         <section className={`flex flex-col lg:flex-row justify-between mt-16 mb-16 max-[560px]:mt-8 gap-9 max-[560px]:gap-4 ${'heroSection'}`}>
            <div className={`max-w-[648px] ${'heroSectionHeadline'}`}>
               <h1 className={`text-[5rem] max-[560px]:text-5xl font-extrabold uppercase text-dark text-start ${montserrat.className}`}>
                  Welcome to my Culinary Haven!
               </h1>
            </div>
            <div className={`flex flex-col gap-10 items-start justify-center max-w-[648px] ${'heroSectionTextNdButton'} ${roboto.className}`}>
               <p className={`text-xl text-start max-w-[648px] text-dark opacity-60`}>
                  Bonjour and welcome to the heart of my kitchen! I'm Isabella Russo, the culinary enthusiast behind this haven of flavors, Cooks Delight. Join me on a gastronomic journey where each dish carries a story, and every recipe is a crafted symphony of taste.
               </p>
               <button className={`w-40 h-9 rounded-3xl bg-primaryOrange text-dark text-sm uppercase font-medium`}>
                  explore recipes
               </button>
            </div>
         </section>
         <section className={`flex flex-col gap-16 items-center mb-16 border border-solid border-dark border-opacity-25 rounded-3xl w-full p-4 ${'aboutUsSection'}`}>
            <div className={`flex lg:flex-row flex-col gap-16 items-center ${'biographyWrapper'}`}>
               <div className={`flex flex-col gap-4 ${'imageWrapper'}`}>
                  <Image 
                     src={authorImage}
                     alt="author-image"
                     sizes="100vw"
                  />
                  <div className={`flex flex-row items-center justify-between h-12 max-w-[620px] w-full border rounded-3xl border-solid border-dark pl-6 pr-6 ${'imageWrapperButton'}`}>
                     <p className={`uppercase text-xs font-medium`}>Follow Me</p>
                     <div className={`flex flex-row gap-4 ${'imgWrapperButton__icons'}`}>
                        <Image 
                           src={facebookLogoDark}
                           alt={'facebook icon'}
                        />
                        <Image 
                           src={instaLogoDark}
                           alt={'insta icon'}
                        />
                        <Image 
                           src={youtubeLogoDark}
                           alt={'youtube icon'}
                        />
                     </div>
                  </div>
               </div>
               <div className={`flex flex-col ${'textWrapper'}`}>
                  <h1 className={`max-w-[572px] uppercase text-dark text-[2.5rem] font-bold mb-4 ${'textWrapperHeader'} ${montserrat.className}`}>
                     From Italian Roots to Global Palates
                  </h1>
                  <div className={`max-w-[572px] flex flex-col gap-4 text-dark opacity-55 font-light text-base ${'textWrapperParagraphs'}`}>
                     <p>Born and raised in the vibrant culinary landscape of Italy, my journey with food began in the heart of my family's kitchen. Surrounded by the aroma of fresh herbs, the sizzle of pans, and the laughter of loved ones, I developed a deep appreciation for the art of cooking. My culinary education took me from the historic streets of Rome to the bustling markets of Florence, where I honed my skills and cultivated a love for the simplicity and authenticity of Italian cuisine.</p>
                     <p>Driven by a relentless curiosity, I embarked on a global culinary exploration, seeking inspiration from the rich tapestry of flavors found in kitchens around the world. From the spicy markets of Marrakech to the sushi stalls of Tokyo, each experience added a unique brushstroke to my culinary canvas.</p>
                     <p>Whether you're a seasoned home cook or just starting your culinary adventure, I'm delighted to have you here. Let's stir, simmer, and savor the beauty of creating something wonderful together.</p>
                     <p>Warmest regards,</p>
                     <p className={`text-xl font-normal ${homemadeApple.className}`}>Isabella Russo</p>
                  </div>
               </div>
            </div>
            <div className={`w-full flex flex-col items-center justify-start ${'galleryWrapper'}`}>
               <div className={`grid min-[1326px]:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 [&>div]:h-60 [&>div]:w-[308px] [&>div]:relative`}>
                  <div>
                     <Image 
                        src={`/AboutUs/gallery-wrapper-img1.png`}
                        alt="gallery wrapper image"
                        fill
                        sizes="308px"
                     />
                  </div>
                  <div>
                     <Image 
                        src={`/AboutUs/gallery-wrapper-img2.png`}
                        alt="gallery wrapper image"
                        fill
                        sizes="308px"
                     />
                  </div>
                  <div>
                     <Image 
                        src={`/AboutUs/gallery-wrapper-img3.png`}
                        alt="gallery wrapper image"
                        fill
                        sizes="308px"
                     />
                  </div>
                  <div>
                     <Image 
                        src={`/AboutUs/gallery-wrapper-img4.png`}
                        alt="gallery wrapper image"
                        fill
                        sizes="308px"
                     />
                  </div>
                  <div>
                     <Image 
                        src={`/AboutUs/gallery-wrapper-img5.png`}
                        alt="gallery wrapper image"
                        fill
                        sizes="308px"
                     />
                  </div>
               </div>
            </div>
         </section>
            <FeaturedSection />
         </div>
      </main>
   )
}
