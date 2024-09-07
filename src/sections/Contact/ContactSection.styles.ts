import { isMobile } from 'react-device-detect';
import { css, styled } from 'styled-components';

export const ContactSectionWrapper = styled.section`
  padding: ${isMobile ? '1rem' : '3rem 1rem'};
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--white);
  color: var(--black);

  // This is bad and hacky, but without it the sections don't fill the screen responsively.
  ${!isMobile && 'margin: 0 -16.9vw;'}
`;

export const ContactSectionText = styled.p`
  flex-wrap: wrap;
  text-align: center;
  padding: 0 10vw;
  color: var(--black);

  ${!isMobile &&
  css`
    font-size: 1.5rem;
    width: 40%;
  `};
`;
