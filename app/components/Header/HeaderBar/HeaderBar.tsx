'use client'

import Image from 'next/image';
import styles from '@/app/components/Header/HeaderBar/header-bar.module.scss';
import scssvariables from '@/app/styles/_variables.module.scss';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from '@/app/assets/navLinks';
import SearchButton from '../../SearchButton/SearchButton';

const HeaderContainer = styled.div<{ open?: boolean }>`
   @media (max-width: 1024px) {
      background-color: ${({ open }) => open && `rgba(255, 251, 242, 0.05)`};
      border-radius: ${({ open }) => open && '24px 24px 0 0'};
      transition: background-color 0.7s;
   }
`;

const NavLogoText = styled.div<{ open?: boolean }>`
   @media (max-width: 1024px) {
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

   const pathname = usePathname();
   const isActiveLink = (path: string) => path === pathname;

   return (
      <header
         className={styles.header} 
         style={{
            backgroundColor: open ? scssvariables.dark : '',
            paddingBottom: open ? '0' : '16px'
         }}
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
               <div className={styles.navLinks}>
                  {links.map((link) =>
                     <Link 
                        key={link.id} 
                        href={link.path} 
                        style={{
                           borderBottom: isActiveLink(link.path) ? `5px solid ${scssvariables.primaryRed}` : '',
                           color: isActiveLink(link.path) ? scssvariables.dark : '',
                        }}
                     >
                        {link.name}
                     </Link>
                  )}
               </div>
               <div className={styles.navButtons}>
                  {/* <button className={styles.searchButton}>
                     <MagnifyingGlassIcon className='w-6 h-6'/>
                  </button> */}
                  <SearchButton />
                  <button className={styles.subscribeButton}>
                     Subscribe
                  </button>
               </div>
               <button 
                  className={styles.menuHamburgerButton}
                  onClick={() => setOpen(!open)}
                  style={toDark(scssvariables.light + '16')}
               >
                  {open ? <XMarkIcon color={scssvariables.primaryOrange} className='h-5 w-5' /> : <Bars3Icon className='h-5 w-5' />}
               </button>
            </nav>
         </HeaderContainer>
      </header>
   )
}
