'use client'

import Image from 'next/image';
import styles from '@/app/components/Header/header.module.scss';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import variables from '@/app/styles/_variables.module.scss';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuMobile from './MenuMobile/MenuMobile';

export default function Header() {
   const [open, setOpen] = useState<boolean>(false);

   function toDark(colorProperty: string) {
      if (open) {
         return { backgroundColor: colorProperty, }
      }
   }

   return (
      <header className={styles.header} style={toDark('rgb(38, 37, 34, 0.9)')}>
         <div className={styles.headerContainer} style={toDark(variables.dark)}>
            <nav className={styles.nav}>
               <div className={styles.navLogo}>
                  <Image 
                     width={180}
                     height={35}
                     alt='nav_logo'
                     src='/nav-logo.svg'
                     priority
                  />
               </div>
               <ul className={styles.navLinks}>
                  <li>Home</li>
                  <li>Recipes</li>
                  <li>Cooking tips</li>
                  <li>About Us</li>
               </ul>
               <div className={styles.navButtons}>
                  <button className={styles.searchButton}>
                     <MagnifyingGlassIcon />
                  </button>
                  <button className={styles.subscribeButton}>
                     Subscribe
                  </button>
               </div>
               <button 
                  className={styles.menuHamburgerButton}
                  onClick={() => setOpen(!open)}
                  style={toDark('rgba(255, 251, 242, 0.26)')}
               >
                  {open ? <XMarkIcon color={variables.primaryOrange} /> : <Bars3Icon />}
               </button>
            </nav>
            {open && <MenuMobile />}
         </div>
      </header>
   )
}
