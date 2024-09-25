'use client'

import Image from 'next/image';
import styles from '@/app/components/Header/header.module.scss';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import scssvariables from '@/app/styles/_variables.module.scss';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuMobile from './MenuMobile/MenuMobile';
import styled from 'styled-components';

// const HeaderStyled = styled.header<{open?: boolean}>`

// `;

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

export default function Header() {
   const [open, setOpen] = useState<boolean>(false);

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
                     src='/nav-logo.svg'
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
                  style={toDark('rgba(255, 251, 242, 0.26)')}
               >
                  {open ? <XMarkIcon color={scssvariables.primaryOrange} /> : <Bars3Icon />}
               </button>
            </nav>
         </HeaderContainer>
         {open && <MenuMobile open={open} />}
      </header>
   )
}
