import { Metadata } from "next";
import { montserrat } from "../assets/fonts";
import EssentialSection from "../components/EssentialSection/EssentialSection";
import CookingBasicsSSR from "../components/CookingBasicsSection/CookingTechniquesSSR";

export const metadata: Metadata = {
   title: 'Cooking Tips'
}

export default function CookingTips() {
   return (
      <main className={`flex flex-col justify-between items-center min-h-screen w-full bg-background ${'main'}`}>
         <div className={`flex flex-col items-center w-[calc(100%-2rem)] max-w-[1312px] ${'mainContainer'}`}>
            <section className={`flex flex-col items-center mb-4 w-full ${'hero&EssentialsSection'}`}>
               <div className={`w-full flex lg:flex-row lg:justify-between lg:items-center flex-col items-start mt-16 mb-12 lg:gap-12 gap-4 ${'heroSection'}`}>
                  <h1 className={`uppercase md:text-[5rem] sm:text-6xl text-4xl text-dark font-extrabold max-w-[763px] ${'heroHeader'} ${montserrat.className}`}>
                     Our Essential Cooking Tips
                  </h1>
                  <p className={`min-[565px]:text-xl text-base text-dark opacity-60 font-normal max-w-3xl lg:max-w-[532px] lg:text-right text-left ${'heroText'}`}>
                     Welcome to Cooks Delight's treasure trove of cooking wisdom! Whether you're a seasoned chef or just starting your culinary journey, our cooking tips are designed to elevate your skills, enhance your kitchen experience, and bring joy to your cooking adventures.
                  </p>
               </div>
               <EssentialSection />
               <CookingBasicsSSR />
            </section>
         </div>
      </main>
   );
}
