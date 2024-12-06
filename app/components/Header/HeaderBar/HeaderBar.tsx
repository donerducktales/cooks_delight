'use client'

import Image from 'next/image';
import styles from '@/app/components/Header/HeaderBar/header-bar.module.scss';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import scssvariables from '@/app/styles/_variables.module.scss';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import styled from 'styled-components';

const HeaderContainer = styled.div<{ open?: boolean }>`
   @media (max-width: 800px) {
      background-color: ${({ open }) => open && `rgba(255, 251, 242, 0.05)`};
      border-radius: ${({ open }) => open && '24px 24px 0 0'};
      transition: background-color 0.7s;
   }
`;

const NavLogoText = styled.div<{ open?: boolean }>`
   @media (max-width: 800px) {
      color: ${({ open }) => open && scssvariables.background};
      transition: color 0.7s;
   }
`;

export default function HeaderBar({open, setOpen}: {open: boolean, setOpen: any}) {
   function toDark(colorProperty: string) {
      if (open) {
         return { backgroundColor: colorProperty, transition: 'background-color 0.7s'}
      }
   }

   return (
      <header
         className={styles.header} 
         style={toDark(scssvariables.dark)}
      >
         <HeaderContainer 
            open={open}
            className={styles.headerContainer} 
         >
            <nav className={styles.nav}>
               <div className={styles.navLogo}>
                  <Image 
                     width={40}
                     height={35}
                     alt='nav_logo'
                     src='/Header/nav-logo.svg'
                     priority
                     quality={100}
                  />
                  <NavLogoText
                     open={open} 
                     className={styles.navLogoText}
                  >
                     <p>Cooks Delight</p>
                  </NavLogoText>
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
                  style={toDark(scssvariables.light + '16')}
               >
                  {open ? <XMarkIcon color={scssvariables.primaryOrange} /> : <Bars3Icon />}
               </button>
            </nav>
         </HeaderContainer>
      </header>
   )
}