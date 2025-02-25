import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function SearchButtonMobile() {
   return (
      <form className={`w-full flex flex-row mt-4 rounded-2xl ${'searchMobile'}`}>
         <input 
            type="text" 
            className={`w-full outline-none bg-background bg-opacity-10 text-light h-9 mr-4 pl-2 pr-2 rounded-2xl`}
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
