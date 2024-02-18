import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

/* Text */

export const NameText = styled.h1`
  color: var(--title-orange);
  margin-bottom: 0.3rem;
  margin-top: ${isMobile ? '2.5rem' : '8.5rem'};
  font-size: ${isMobile ? '2rem' : '5.5rem'};
`;

export const RoleText = styled.p`
  margin: 0;
  font-size: ${isMobile ? '0.8rem' : '2.5rem'};
`;

export const SectionTitle = styled.h1`
  color: var(--background-grey);
  font-size: ${isMobile ? '2rem' : '5rem'};
  margin-bottom: 1rem;
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
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  ${isMobile ? '' : 'margin: 0 -16.9vw;'}// Bad and hacky, but extends background colour to edges
`;

/* Layouts */

export const HorizontalFlexBox = styled.div`
  display: flex;
  flex-direction: row;
`;
