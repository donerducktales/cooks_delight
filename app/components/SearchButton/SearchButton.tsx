'use client'

import useViewPortSize from "@/app/assets/customHooks/useViewPortSize";
import { fetchResults, setSearchValue } from "@/lib/features/searchSlice";
import { AppDispatch, RootState } from "@/lib/store";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchButton() {
   const [toggle, setToggle] = useState<boolean>(false);
   const windowSize = useViewPortSize();
   const dispatch: AppDispatch = useDispatch();
   const value = useSelector((state: RootState) => state.search.value);
   const router = useRouter();

   useEffect(() => {
      if (windowSize.width < 1024) {
         setToggle(false);
      }
   });

   async function handleSubmit(e: any) {
      e.preventDefault()

      try {
         dispatch(fetchResults(value))
         router.push('/searchResult');
      } catch (error) {
         alert(`${error}`)
      }
   }

   return (
      <div className={`flex flex-row justify-center relative ${'searchButtonWrapper'}`}>
         {
            toggle && 
               <form
                  onSubmit={handleSubmit}
                  className={`flex flex-row bg-dark bg-opacity-10 rounded-s-2xl ${'searchForm'}`}
               >
                  <button 
                     type="submit"
                     className={`w-9 hover:bg-primaryLightBlue flex flex-row justify-center items-center rounded-2xl ${'submitSearchButton'}`}
                  >
                     <MagnifyingGlassIcon className="w-6 h-6" />
                  </button>
                  <input 
                     type="text" 
                     className={`max-w-32 h-9 outline-none rounded-s-2xl pr-2 ml-2 bg-dark bg-opacity-0`}
                     onChange={(e) => dispatch(setSearchValue(e.target.value))}
                  />
               </form>
         }
         <div className={`bg-dark bg-opacity-10 ${toggle ? 'rounded-e-2xl' : 'rounded-2xl'} ${'searchButtonToggle'}`}>
            <button  
               className={`w-9 h-9 flex justify-center items-center ${toggle ? 'bg-primaryRed rounded-2xl' : 'bg-dark rounded-2xl' } ${!toggle && 'bg-opacity-10'} ${'searchButtonSwitch'}`}
               onClick={() => setToggle(!toggle)}
            >
               {
                  toggle ? 
                  <XMarkIcon className="w-6 h-6 text-background"/> :
                  <MagnifyingGlassIcon className="w-6 h-6" />
               }
            </button>
         </div>
      </div>
   );
}
