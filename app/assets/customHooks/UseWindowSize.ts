'use client'

import { useEffect, useState } from "react";

const useWindowSize = () => {
   const [windowSize, setWindowSize] = useState<any>([
      window.innerWidth,
   ]);

   useEffect(() => {
      const windowSizeHandler = () => {
         setWindowSize([window.innerWidth, window.innerHeight]);
      };

      window.addEventListener("resize", windowSizeHandler);

      windowSizeHandler();

      return () => {
         window.removeEventListener("resize", windowSizeHandler);
      };
   }, []);

   return windowSize;
};

export default useWindowSize;