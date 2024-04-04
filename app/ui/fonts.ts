import { Montserrat, Dosis, Barlow_Condensed } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin'] });

export const dosis = Dosis({ subsets: ['latin'] });

export const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '700'],
});
