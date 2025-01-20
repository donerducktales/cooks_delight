'use client'

import styled from 'styled-components';
import scssvariables from '@/app/styles/_variables.module.scss';
import { montserrat, roboto } from '@/app/assets/fonts';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import { links } from '@/app/assets/navLinks';

const StyledMenuMobile = styled.div<{open: boolean}>`
   display: none;

   @media (max-width: 800px) {
      background-color: ${scssvariables.dark};
      display: flex;
      transform: translateY(-17px);
      width: 100%;
      height: 100vh;
      padding-bottom: 20px;

      .mobile-nav {
         width: 100%;
         height: 422px;
         margin: 0 16px;
         padding: 0 16px;
         background-color: rgba(255, 251, 242, 0.05);
         transition: background-color 3s;
         border-radius: 0 0 24px 24px;
         display: flex;
         flex-direction: column;

         ul {
            display: flex;
            flex-direction: column;
            align-items: start;
            margin: 40px 0;
            gap: 12px;

            li {
               height: 48px;
               font-size: 1rem;
               text-transform: uppercase;
               font-weight: 500;
               width: calc(100% - 8px);
               margin-left: 6px;
               border-bottom: 1px solid ${scssvariables.background};
               display: flex;
               align-items: center;

               a {
                  text-decoration: none;
                  color: ${scssvariables.background};
               }
            }
         }

         .mobile-nav_buttons {
            display: flex;
            gap: 16px;
            justify-content: center;

            .search-button {
               width: 37px;
               height: 37px;
               border: none;
               outline: none;
               border-radius: 16px;
               background-color: ${scssvariables.light}16;
               display: flex;
               justify-content: center;
               align-items: center;
               cursor: pointer;
            }

            .subscribe-button {
               width: 100%;
               height: 38px;
               border: none;
               outline: none;
               border-radius: 24px;
               background-color: ${scssvariables.light}16;
               display: flex;
               align-items: center;
               justify-content: center;
               color: ${scssvariables.background};
               text-transform: uppercase;
               font-weight: 500;
               cursor: pointer;
            }
         }
      }

      .social-media-links {
         display: flex;
         align-items: center;
         justify-content: center;
         margin-top: 40px;
         gap: 16px;
         cursor: pointer;

         a {
            display: flex;
            align-items: center;
         }
      }
   }
`;

export default function MenuMobile({open, setOpen}: {open: boolean, setOpen: any}) {
   return (
      <StyledMenuMobile open={open} >
         <nav className='mobile-nav'>
            <ul className={montserrat.className}>
               {links.map((link) => 
                  <li key={link.id}>
                     <Link href={link.path} onClick={() => setOpen(false)}>
                        {link.name}
                     </Link>
                  </li>
               )}
            </ul>
            <div className="mobile-nav_buttons">
               <button className="search-button">
                  <MagnifyingGlassIcon style={{color: scssvariables.background}} className='w-6 h-6'/>
               </button>
               <button className={`${roboto.className} subscribe-button`}>
                  Subscribe
               </button>
            </div>
            <div className='social-media-links'>
               <Image 
                  src={'/Header/facebook-logo.png'}
                  alt='facebook-logo'
                  width={18}
                  height={18}
                  quality={'100'}
               />
               <Image 
                  src={'/Header/insta-logo.png'}
                  alt='instagram-logo'
                  width={18}
                  height={18}
                  quality={100}
               />
               <Link href={'https://www.youtube.com'}>
                  <Image 
                     src={'/Header/yt-logo.png'}
                     alt='youtube-logo'
                     width={20}
                     height={16}
                     quality={100}
                  />
               </Link>
            </div>
         </nav>
      </StyledMenuMobile>
   )
}
