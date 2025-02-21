'use client'

import useViewPortSize from "@/app/assets/customHooks/useViewPortSize";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export default function SearchButton() {
   const [toggle, setToggle] = useState<boolean>(false);
   const windowSize = useViewPortSize()

   useEffect(() => {
      if (windowSize.width < 1000) {
         setToggle(false);
      }
   });

   return (
      <div className={`flex flex-row justify-center relative ${'searchButtonWrapper'}`}>
         {
            toggle && 
               <form
                  className="searchForm"
               >
                  <input 
                     type="text" 
                     className={`w-40 h-9 outline-none rounded-s-2xl pl-2 pr-2 ml-2 bg-dark bg-opacity-10`}
                  />
               </form>
         }
         <button 
            className={`w-9 h-9 flex justify-center items-center ${toggle ? 'bg-primaryRed rounded-e-2xl' : 'bg-dark rounded-2xl' } ${!toggle && 'bg-opacity-10'} ${'searchButtonSwitch'}`}
            onClick={() => setToggle(!toggle)}
         >
            {
               toggle ? 
                  <XMarkIcon className="w-6 h-6 text-background"/> :
                  <MagnifyingGlassIcon className="w-6 h-6"/>
            }
         </button>
      </div>
   );
}
