'use client'

import { useEffect, useState } from "react";
import styled from "styled-components";
import HeaderBar from "./HeaderBar/HeaderBar";
import MenuMobile from "./MenuMobile/MenuMobile";
import useViewPortSize from "@/app/assets/customHooks/useViewPortSize";

const HeaderStyled = styled.header<{open: boolean}>`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   position: ${({open}) => open && 'fixed'};
   z-index: 9;

   @media (max-width: 800px) {
      overflow-x: scroll;
   }
`;

export default function Header() {
   const [open, setOpen] = useState<boolean>(false);
   const windowSize = useViewPortSize();

   useEffect (() => {
      if (windowSize.width > 800) {
         setOpen(false);
      }
   });

   return (
      <HeaderStyled open={open}>
         <HeaderBar open={open} setOpen={setOpen}/>
         {open && <MenuMobile open={open} setOpen={setOpen} />}
      </HeaderStyled>
   )
}
