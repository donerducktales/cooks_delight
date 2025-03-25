import Search from '@/app/components/Search/Search'

export default function SearchResultPage() {
   return (
      <main className={`flex flex-col justify-between items-center w-full ${'main'}`}>
         <div className={`flex flex-col items-center w-[calc(100%-2rem)] max-w-[1312px] ${'mainContainer'}`}>
            <Search />
         </div>
      </main>
   )
}
