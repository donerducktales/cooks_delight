'use client'

import useSearchStore from "@/lib/features/states/searchStore";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

export default function SearchButtonMobile({ setOpen }: { setOpen: (open: boolean) => void }) {
   const { value, fetchResults, setValueRequest, setSearchValue } = useSearchStore();
   const router = useRouter();

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()

      try {
         fetchResults(value);
         router.push('/searchResult');
         setValueRequest();
         setOpen(false);
      } catch (error) {
         alert(`${error}`)
      }
   }
   
   return (
      <form 
         className={`w-full flex flex-row mt-4 rounded-2xl ${'searchMobile'}`}
         onSubmit={handleSubmit}   
      >
         <input 
            type="text" 
            className={`w-full outline-none bg-background bg-opacity-10 text-light h-9 mr-4 pl-2 pr-2 rounded-2xl`}
            onChange={(e) => setSearchValue(e.target.value)}
         />
         <button
            type="submit"
            className={`min-w-9 bg-background bg-opacity-10 rounded-2xl hover:bg-primaryLightBlue text-background hover:text-dark flex justify-center items-center`}
         >
            <MagnifyingGlassIcon className="w-6 h-6" />
         </button>
      </form>
   )
}
