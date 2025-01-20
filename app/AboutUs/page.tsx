import FeaturedSection from "../components/FeaturedSection/FeaturedSection";

export default function AboutUs() {
   return (
      <main className={`flex flex-col justify-between items-center min-h-screen w-full bg-[#F0EBE1] ${'main'}`}>
         <div className={`flex flex-col items-center w-[calc(100%-2rem)] max-w-[1312px] ${'mainContainer'}`}>
            <FeaturedSection />
         </div>
      </main>
   )
}
