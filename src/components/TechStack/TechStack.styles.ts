import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

export const TechStackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${isMobile ? '1rem' : '2rem'};
  margin-top: 1rem;
`;

export const TechStackItemWrapper = styled.div<{ $isHover: boolean }>`
  margin: 0;
  ${(props) => props.$isHover && 'transform: scale(1.2)'};
`;

export const TechStackItemLabel = styled.p`
  margin-top: 0.5rem;
  ${isMobile && 'font-size: 2vw'};
`;
