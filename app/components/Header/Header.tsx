'use client'

import { useState } from "react";
import styled from "styled-components";
import HeaderBar from "./HeaderBar/HeaderBar";
import MenuMobile from "./MenuMobile/MenuMobile";

const HeaderStyled = styled.header<{open: boolean}>`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   position: ${({open}) => open && 'fixed'};
   z-index: 9;
`;

export default function Header() {
   const [open, setOpen] = useState<boolean>(false);
   
   return (
      <HeaderStyled open={open}>
         <HeaderBar open={open} setOpen={setOpen}/>
         {open && <MenuMobile open={open} />}
      </HeaderStyled>
   )
}
