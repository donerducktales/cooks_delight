import { Montserrat, Roboto, Homemade_Apple } from "next/font/google";

export const roboto = Roboto({
   subsets: ['latin'],
   weight: ['300', '400', '500', '700',],
});

export const montserrat = Montserrat({
   subsets: ['latin'],
   weight: ['600', '700', '800']
});

export const homemadeApple = Homemade_Apple({
   subsets: ['latin'],
   weight: ['400'],
});