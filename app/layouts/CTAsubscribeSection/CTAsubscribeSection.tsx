"use client";

import { montserrat } from '@/app/assets/fonts';
import styles from './Ctasubcscribesec.module.scss';
import useViewPortSize from '@/app/assets/customHooks/useViewPortSize';
import { motion } from 'motion/react';

export default function CTAsubscribeSection() {
   const windowSize = useViewPortSize();

   return (
      <motion.section 
         className={styles.CtaSubscribeSection}
         initial={{scale: 0.5}} whileInView={{scale: 1}} viewport={{once: true}} transition={{duration: 0.3}}
      >
         <div className={styles.CtaSubscribeSectionContainer}>
            <div className={styles.CtaSubscribeTextWrapper}>
               <h2>subscribe</h2>
               <h1 className={montserrat.className}>Join the fun Subscribe now!</h1>
               <p>Subscribe to our newsletter for a weekly serving of recipes, cooking tips, and exclusive insights straight to your inbox.</p>
            </div>
            <div className={styles.CtaSubscribeInput}>
               <input type="text" placeholder='Email Address' />
               {windowSize.width > 768 && <button className={styles.subscribeButton}>Subscribe</button>}
            </div> 
            {windowSize.width < 768 && <button className={styles.subscribeButton}>Subscribe</button>}
         </div>
      </motion.section>
   )
}
