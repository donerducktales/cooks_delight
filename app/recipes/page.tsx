import FetchRecipesSection from "../components/RecipesSection/FetchRecipesSection";
import TipsAnnotationSection from "../components/TipsAnnotationSection/TipsAnnotationSection";

export default function RecipesPage() {
   return (
      <main className={`flex flex-col justify-between items-center min-h-screen w-full ${'main'}`}>
         <div className={`flex flex-col items-center w-[calc(100%-2rem)] max-w-[1312px]  ${'mainContainer'}`}>
            <FetchRecipesSection />
            <TipsAnnotationSection />
         </div>
      </main>
   )
}
