import { isMobile } from 'react-device-detect';
import { css, styled } from 'styled-components';

export const ResearchSectionWrapper = styled.section`
  padding: ${isMobile ? '1rem' : '3rem 1rem'};
  display: flex;
  flex-direction: column;
  align-items: center;

  // This is bad and hacky, but without it the sections don't fill the screen responsively.
  ${!isMobile && 'margin: 0 -16.9vw;'}
`;

export const ResearchSectionText = styled.p`
  flex-wrap: wrap;
  text-align: left;
  padding: 0 10vw;

  ${!isMobile &&
  css`
    font-size: 1rem;
    width: 40%;
  `}
`;
