// 'use client'

import styles from '@/app/components/Footer/footer.module.scss';
import Image from "next/image";

export default function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={styles.footerContainer}>
            <nav className={styles.footerNav}>
               <div className={styles.footerNavLogo}>
                  <Image 
                     src={'/Footer/white-logo.svg'}
                     alt="white footer logo"
                     width={40}
                     height={35}
                  />
                  <p>Cooks Delight</p>
               </div>
               <ul className={styles.footerNavLinks}>
                  <li>Home</li>
                  <li>Recipes</li>
                  <li>Cooking tips</li>
                  <li>About Us</li>
               </ul>
               <div className={styles.footerNavSocialMedia}>
                  <Image 
                     src={'/Header/facebook-logo.png'}
                     alt='facebook logo'
                     width={20}
                     height={20}
                  />
                  <Image 
                     src={'/Header/insta-logo.png'}
                     alt='instagram logo'
                     width={20}
                     height={20}
                  />
                  <Image 
                     src={'/Header/yt-logo.png'}
                     alt='youtube logo'
                     width={20}
                     height={20}
                  />
               </div>
            </nav>
            <div className={styles.footerCopyright}>
               <p>Copyright: © 2024 Cooks Delight.</p>
            </div>
         </div>
      </footer>
   );
}
