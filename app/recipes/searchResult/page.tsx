import Search from '@/app/components/Search/Search'
import React from 'react'

export default function SearchResultPage() {
   return (
      <main className={`flex flex-col justify-between items-center min-h-screen w-full ${'main'}`}>
         <div className={`flex flex-col items-center w-[calc(100%-2rem)] max-w-[1312px]  ${'mainContainer'}`}>
            <Search />
         </div>
      </main>
   )
}
