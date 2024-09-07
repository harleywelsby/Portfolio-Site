import { isMobile } from 'react-device-detect';
import { styled } from 'styled-components';

export const HomeWrapper = styled.section`
  padding: ${isMobile ? '2rem' : '4rem'} 0 ${isMobile ? '3rem' : '5rem'} 0;
  display: inline-flex;
  align-items: center;
  height: ${!isMobile && '80vh'};
`;

export const HomepageImage = styled.img`
  border-radius: 1rem;
  width: ${isMobile ? '80vw' : '35vw'};
  margin: 1rem 0 1rem 0;
`;

export const HomeContentWrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  ${!isMobile && 'padding: 4rem 0 4rem 0;'}
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameText = styled.h1`
  color: var(--orange);
  margin-bottom: 0.3rem;
  font-size: ${isMobile ? '10vw' : '5rem'};
  margin: 0;
`;

export const SubtitleText = styled.p`
  margin: 0;
  font-size: ${isMobile ? '5vw' : '2rem'};
`;
