/**
 * This file is being phased out in favour of individual *.styles.ts files for each section.
 */

import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

/* Text */

export const NameText = styled.h1`
  color: var(--orange);
  margin-bottom: 0.3rem;
  margin-top: ${isMobile ? '2.5rem' : '8.5rem'};
  font-size: ${isMobile ? '1.5rem' : '5.5rem'};
`;

export const SubtitleText = styled.p`
  margin: 0;
  font-size: ${isMobile ? '0.7rem' : '2.5rem'};
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

export const ImageReference = styled.p`
  font-size: ${isMobile ? '0.7rem' : '1rem'};
  max-width: ${isMobile ? '80%' : '50%'};
  weight: 4;
  margin: 0;
  padding: 0;
  text-align: center;
  font-style: italic;
`;

/* Images */

export const HeadshotImage = styled.img`
  border-radius: 40%;
  margin-top: ${isMobile ? '1rem' : '0rem'};
  margin-left: ${isMobile ? '1rem' : '5rem'};
  width: ${isMobile ? '28%' : '400px'};
  height: ${isMobile ? '28%' : '400px'};
  border-style: solid;
  border-color: var(--orange);
  border-width: ${isMobile ? '0.2rem' : '0.5rem'};
`;

export const DemoImage = styled.img`
  border-top-right-radius: 10% 15%;
  border-top-left-radius: 10% 15%;
  border-bottom-right-radius: 10% 15%;
  border-bottom-left-radius: 10% 15%;
  margin: 1rem 0;
  width: ${isMobile ? '80%' : '50%'};
`;

/* Sections */

export const HeaderSection = styled.section`
  padding: 2rem;
  padding-bottom: ${isMobile ? '3rem' : '5rem'};
  display: inline-flex;
  align-items: center;
  height: ${isMobile ? '10vh' : '80vh'};
`;

export const Section = styled.section`
  padding: ${isMobile ? '1rem' : '3rem 1rem'};
  display: flex;
  flex-direction: column;
  align-items: center;

  // This is bad and hacky, but without it the sections don't fill the screen responsively.
  ${!isMobile && 'margin: 0 -16.9vw;'}
`;

/* Layouts */

export const HorizontalFlexBox = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.$gap ?? '0'};
`;

export const VerticalFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${isMobile ? '0.5rem' : '3rem'};
`;

export const LinkLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${isMobile ? '1rem' : '1rem 2rem'};
  color: var(--black);
`;
