'use client'

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import variables from '@/app/styles/_variables.module.scss'

export default function MenuMobile() {
   const [open, setOpen] = useState(false);

   return (
      <MenuHamburgerButton open={open} setOpen={setOpen}/>
   );
}

const MenuHamburgerButton = ({open, setOpen}: {open: boolean, setOpen: any}) => {
   return (
      <button 
         className='menu-hamburger-button'
         onClick={() => setOpen(!open)}
      >
         {open ? <XMarkIcon color={variables.primaryOrange} /> : <Bars3Icon />}
      </button>
   )
}