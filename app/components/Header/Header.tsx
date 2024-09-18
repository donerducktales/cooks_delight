import Image from 'next/image'
import '../Header/header.scss'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import MenuMobile from './MenuMobile/MenuHamburgerButton'

export default function Header() {
   return (
      <header className="header">
         <div className="header_container">
            <nav className="nav">
               <div className="nav_logo">
                  <Image 
                     width={180}
                     height={35}
                     alt='nav_logo'
                     src='/nav-logo.svg'
                     priority
                  />
               </div>
               <ul className='nav_links'>
                  <li>Home</li>
                  <li>Recipes</li>
                  <li>Cooking tips</li>
                  <li>About Us</li>
               </ul>
               <div className='nav_buttons'>
                  <button className="search-button">
                     <MagnifyingGlassIcon />
                  </button>
                  <button className="subscribe-button">
                     Subscribe
                  </button>
               </div>
               <MenuMobile />
            </nav>
         </div>
      </header>
   )
}
