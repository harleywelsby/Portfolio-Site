import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

/* Text */

export const NameText = styled.h1`
  color: var(--orange);
  margin-bottom: 0.3rem;
  margin-top: ${isMobile ? '2.5rem' : '8.5rem'};
  font-size: ${isMobile ? '2rem' : '5.5rem'};
`;

export const RoleText = styled.p`
  margin: 0;
  font-size: ${isMobile ? '0.8rem' : '2.5rem'};
`;

export const SectionTitle = styled.h1`
  font-size: ${isMobile ? '2rem' : '5rem'};
  margin: 1rem 0;
`;

export const ParagraphText = styled.p`
  font-size: ${isMobile ? '1rem' : '1.5rem'};
  max-width: ${isMobile ? '80%' : '50%'};
  weight: 4;
  margin: 0;
  padding: 0;
  text-align: left;
`;

export const LinkLogoLabel = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;

/* Images */

export const HeadshotImage = styled.img`
  border-radius: 40%;
  margin-top: ${isMobile ? '0rem' : '0rem'};
  margin-left: ${isMobile ? '0rem' : '5rem'};
  width: ${isMobile ? '120px' : '400px'};
  height: ${isMobile ? '120px' : '400px'};
`;

/* Sections */

export const HeaderSection = styled.section`
  padding: 2rem;
  padding-bottom: ${isMobile ? '3rem' : '5rem'};
  display: flex;
  align-items: center;
  height: ${isMobile ? '10vh' : '80vh'};
`;

export const Section = styled.section`
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  // This is bad and hacky, but without it the sections don't fill the screen responsively.
  ${!isMobile && 'margin: 0 -16.9vw;'}
`;

/* Layouts */

export const HorizontalFlexBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LinkLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${isMobile ? '1rem' : '1rem 2rem'};
  color: var(--black);
`;
