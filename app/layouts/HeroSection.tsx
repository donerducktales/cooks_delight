import { montserrat, roboto } from "../assets/fonts";

export default function HeroSection() {
   return (
     <section
       className={`heroSection flex items-center justify-center w-full h-[577px] rounded-[32px] bg-[url(/Home/HeroSection/hero-section-background.png)] mb-4`}
     >
       <div className={`heroTextWrapper flex flex-col items-center justify-center`}>
         <h1 className={`max-w-[880px] uppercase text-background sm:text-[5rem] text-[2.375rem] text-center font-extrabold mx-4 mb-4 ${montserrat.className}`}>
            Unleash Culinary Excellence
         </h1>
         <p className={`max-w-[410px] text-background sm:text-[1.313rem] text-base text-center font-light leading-[1.6rem] mx-4 mb-10 ${roboto.className}`}>
           Explore a world of flavors, discover handcrafted recipes, and let the
           aroma of our passion for cooking fill your kitchen
         </p>
         <button className={`h-9 w-40 bg-primaryOrange text-dark text-sm font-medium uppercase rounded-3xl flex items-center justify-center cursor-pointer ${roboto.className}`}>explore recipes</button>
       </div>
     </section>
   );
}
