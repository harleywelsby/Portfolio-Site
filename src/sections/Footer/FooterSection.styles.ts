import { isMobile } from 'react-device-detect';
import { styled } from 'styled-components';

export const FooterWrapper = styled.section`
  padding: ${isMobile ? '1rem' : '3rem 1rem'};
  display: flex;
  flex-direction: column;
  align-items: center;

  // This is bad and hacky, but without it the sections don't fill the screen responsively.
  /* ${!isMobile && 'margin: 0 -16.9vw;'} */
`;

export const FooterText = styled.p`
  font-size: ${isMobile ? '1rem' : '1.5rem'};
  max-width: ${isMobile ? '80%' : '50%'};
  font-weight: 4;
  margin: 0;
  padding: 0;
  text-align: left;
`;
