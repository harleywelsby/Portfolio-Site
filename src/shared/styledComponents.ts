import { styled } from 'styled-components';

export const Flex = styled.div<{ $direction: 'row' | 'column'; $gap?: string }>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  gap: ${(props) => props.$gap ?? '0'};
`;
