import dynamic from "next/dynamic";
import FetchRecipesSection from "./components/RecipesSection/FetchRecipesSection";
import HeroSection from "./layouts/HeroSection/HeroSection";
import ExploreSectionLayout from "./layouts/ExploreSectionLayout/ExploreSectionLayout";
// import AboutUs from "./components/AboutUsSec(Home)/AboutUs";

const DynamicFeaturedSectionNoSSR = dynamic(
   () => import('@/app/components/FeaturedSection/FetchFeaturedRecipes'),
   { ssr: false }
);

export default function Home() {
   return (
      <main className={`main flex flex-col justify-between items-center min-h-[100vh] w-full bg-background`}>
         <div className={`mainContainer flex flex-col items-center max-w-[1312px] w-[calc(100%-32px)]`}>
            <HeroSection />
            <ExploreSectionLayout />
            <DynamicFeaturedSectionNoSSR />
            <FetchRecipesSection />
            {/* <AboutUs /> */}
         </div>
      </main>
   );
}
