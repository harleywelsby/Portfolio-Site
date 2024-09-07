import { isMobile } from 'react-device-detect';
import { styled } from 'styled-components';

export const Flex = styled.div<{ $direction: 'row' | 'column'; $gap?: string }>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  gap: ${(props) => props.$gap ?? '0'};
`;

export const SectionTitle = styled.h1`
  font-size: ${isMobile ? '2rem' : '4rem'};
  margin: 1rem 0;
`;
