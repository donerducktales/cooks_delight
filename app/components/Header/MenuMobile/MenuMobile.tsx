import styles from '@/app/components/Header/MenuMobile/menu-mobile.module.scss';
import styled from 'styled-components';
import scssvariables from '@/app/styles/_variables.module.scss';

const StyledMenuMobile = styled.div<{open?: boolean}>`
   @media (max-width: 800px) {
      background-color: ${scssvariables.dark};
      transition: background-color 3s;

      nav {
         width: 100%;
         margin: 0 16px;
         padding: 0 16px;
         background-color: rgba(255, 251, 242, 0.05);
         border-radius: 0 0 24px 24px;
      }
   }
`;

export default function MenuMobile({open}: {open: boolean}) {
   return (
      <StyledMenuMobile className={styles.menuMobile}>
         <nav>
            f
         </nav>
      </StyledMenuMobile>
   )
}
