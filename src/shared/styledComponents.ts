import { styled } from 'styled-components';

export const HorizontalFlexBox = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.$gap ?? '0'};
`;
