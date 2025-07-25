import { montserrat, roboto } from "@/app/assets/fonts";
import Image from "next/image";

export default function AboutUs() {
   return (
      <section className={`w-full bg-background flex flex-col max-w-[1313px] border rounded-[32px] border-solid border-dark border-opacity-25 mb-16 ${'aboutUsSection'}`}>
         <div className={`flex m-4 gap-2 ${'aboutUsContainer'}`}>
            <div className={`max-w-[860px] w-full ${'row1'}`}>
               <div className={`flex mb-2 justify-between ${'row1__column1'}`}>
                  <div className={`flex flex-col items-start mt-12 ml-4 mr-8 ${roboto.className} ${'aboutUs_textBlock'}`}>
                     <div className={`w-[83px] h-6 border rounded-xl bg-primaryRed flex items-center justify-center mb-2 ${'tag'}`}>
                        <p className={`uppercase text-sm font-medium text-background`}>about us</p>
                     </div>
                     <h1 className={`max-w-96 uppercase text-[2.5rem] text-dark font-bold ${'aboutUsHeader'} mb-4 ${montserrat.className}`}>
                        Our Culinary Chronicle
                     </h1>
                     <p className={`max-w-[385px] text-dark opacity-80 text-base/5 font-light mb-3 ${'aboutUsParagraph'}`}>
                        Our journey is crafted with dedication, creativity, and an unrelenting commitment to delivering delightful culinary experiences. Join us in savoring the essence of every dish and the stories that unfold.
                     </p>
                     <button className={`w-[126px] h-[38px] border border-solid border-dark rounded-3xl bg-background text-dark uppercase text-sm font-medium mb-3 ${'aboutUsButton'}`}>
                        read more
                     </button>
                  </div>
                  <Image 
                     src={'/Home/AboutUsSection/grilled-sandwich.png'}
                     alt="grill"
                     sizes="100vw"
                     width={316}
                     height={326}
                     className={`w-full h-auto max-w-[316px]`}
                  /> 
               </div>
               <div className={` ${'row1__column1'}`}>
                  <Image 
                     src={'/Home/AboutUsSection/grilled-vegetables.png'}
                     alt="veg"
                     width={861}
                     height={331}
                     className={`w-full h-auto max-w-[861px]`}
                  />
               </div>
            </div>
            <div className={`flex shrink-1 max-w-[411px] w-full ${'row2'}`}>
               <Image 
                  src={'/Home/AboutUsSection/cooks-image.png'}
                  alt="cooks image"
                  width={411}
                  height={665}
                  className={` h-auto max-w-[411px]`}
               />
            </div>
         </div>
      </section>
   );
}
