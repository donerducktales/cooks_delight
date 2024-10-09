import { useEffect, useState } from "react";
const useViewPortWidth = () => {
   const [windowSize, setWindowSize] = useState([0, 0]); // коли ми використовуєм хук, 0 для ширини екрану, 1 для висоти

   useEffect(() => {
      const windowSizeHandler = () => {
         setWindowSize([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener("resize", windowSizeHandler);

      return () => {
         window.removeEventListener("resize", windowSizeHandler);
      };
   }, []);

   return windowSize;
};

export default useViewPortWidth;

