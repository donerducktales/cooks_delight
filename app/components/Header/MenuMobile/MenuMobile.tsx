import styled from 'styled-components';
import scssvariables from '@/app/styles/_variables.module.scss';
import { montserrat, roboto } from '@/app/assets/fonts';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

const StyledMenuMobile = styled.div<{open?: boolean}>`
   display: none;

   @media (max-width: 800px) {
      background-color: ${scssvariables.dark};
      display: flex;
      position: absolute;
      top: 86.5px;
      width: 100%;
      height: 100%;
      padding-bottom: 20px;

      .mobile-nav {
         width: 100%;
         margin: 0 16px;
         padding: 0 16px;
         background-color: rgba(255, 251, 242, 0.05);
         border-radius: 0 0 24px 24px;
         display: flex;
         flex-direction: column;

         ul {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 15px;
            margin: 40px 0;

            li {
               color: ${scssvariables.background};
               font-size: 1rem;
               text-transform: uppercase;
               font-weight: 500;
               width: 100%;
               margin-left: 6px;
            }

            span {
               width: 100%;
               height: 1px;
               background-color: ${scssvariables.background};
               margin-bottom: 10px;
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
   }
`;

export default function MenuMobile({open}: {open: boolean}) {
   return (
      <StyledMenuMobile>
         <nav className='mobile-nav'>
            <ul className={montserrat.className}>
               <li>Home</li>
               <span></span>
               <li>Recipes</li>
               <span></span>
               <li>Cooking Tips</li>
               <span></span>
               <li>About Us</li>
               <span></span>
            </ul>
            <div className="mobile-nav_buttons">
               <button className="search-button">
                  <MagnifyingGlassIcon style={{color: scssvariables.background}}/>
               </button>
               <button className={`${roboto.className} subscribe-button`}>
                  Subscribe
               </button>
            </div>
         </nav>
      </StyledMenuMobile>
   )
}
