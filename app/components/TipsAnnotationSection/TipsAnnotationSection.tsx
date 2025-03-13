'use client'

import { montserrat } from "@/app/assets/fonts"
import { motion } from "motion/react"
import Link from "next/link"

export default function TipsAnnotationSection() {
   return (
      <motion.section 
         className={`flex flex-col justify-center items-center w-full bg-primaryLightBlue rounded-[40px] h-[486px] mb-4 ${'tipsAnnotationSection'}`}
         initial={{translateY: 200}} whileInView={{translateY: 0}} viewport={{once: true}} transition={{duration: 0.3}}
      >
         <h1 className={`sm:text-7xl text-6xl max-[425px]:text-5xl uppercase text-dark font-extrabold mb-6 ml-4 mr-4 text-center ${'annotationHeader'} ${montserrat.className}`}>
            Cooking tips
         </h1>
         <p className={`max-w-[768px] text-center sm:text-xl text-base mb-6 ml-4 mr-4 ${'annotationParagraph'}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sed laboriosam nisi, praesentium dolores quis harum exercitationem delectus tenetur non veritatis ducimus omnis perferendis ut! Sint nisi quia enim nesciunt reiciendis deleniti quae, doloribus amet?
         </p>
         <Link href={'/tips'}>
            <button className={`w-32 h-10 bg-dark rounded-2xl text-background uppercase text-sm font-bold ${'annotationButton'}`}>
               see more
            </button>
         </Link>
      </motion.section>
   )
}
