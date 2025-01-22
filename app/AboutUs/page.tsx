import { montserrat, roboto } from "../assets/fonts";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";

export default function AboutUs() {
   return (
      <main className={`flex flex-col justify-between items-center min-h-screen w-full bg-background ${'main'}`}>
         <div className={`flex flex-col items-center w-[calc(100%-2rem)] max-w-[1312px] ${'mainContainer'}`}>
         <section className={`flex flex-col lg:flex-row justify-between mt-16 mb-16 max-[560px]:mt-8 gap-9 max-[560px]:gap-4 ${'heroSection'}`}>
            <div className={`max-w-[648px] ${'heroSectionHeadline'}`}>
               <p className={`text-[5rem] max-[560px]:text-5xl font-extrabold uppercase text-dark text-start ${montserrat.className}`}>
                  Welcome to my Culinary Haven!
               </p>
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
            <FeaturedSection />
         </div>
      </main>
   )
}
