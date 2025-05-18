'use client'

import { montserrat } from "@/app/assets/fonts";
import { RootState } from "@/lib/store"
import { useSelector } from "react-redux"
import RecipeCard from "../RecipeCard/RecipeCard";
import { useEffect, useState } from "react";

export default function Search() {
   const result = useSelector((state: RootState) => state.search.result);
   const valueRequest = useSelector((state: RootState) => state.search.valueRequest);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 1000);
   }, [])

   return loading ? 
   <div className={`h-full min-h-80 flex justify-center items-center ${'loadingScreen'}`}>
      <p className={`text-2xl ${montserrat.className}`}>Loading...</p>
   </div> :
   <section className={`flex flex-col items-start w-full mb-2 ${'searchResultSection'}`}>
      <h1 className={`mb-8 mt-4 sm:text-5xl text-3xl mx-1 uppercase font-bold ${montserrat.className} ${'searchResultTitle'}`}>
         Results for searching: {valueRequest}
      </h1>
      {
         result.length === 0 ? 
         <div className={`w-full sm:h-96 h-72 flex justify-center items-center ${'searchResultNotFound'}`}>
            <p className={`text-xl text-center font-medium mx-4`}>
               Sorry we have not found any results that match your search criteria, try another suggestion
            </p>
         </div> 
            :
         <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ${'searchResultWrapper'}`}>
            {result.map((el) => 
               <RecipeCard 
                  key={el._id.toString()}
                  imgSrc={el.imgUrl}
                  imgAlt={el.title}
                  title={el.title}
                  description={el.description}
                  prepTime={el.prepTime}
                  difficulty={el.difficulty}
                  serving={el.serving}
               />
            )}
         </div>
      }
   </section>
}
