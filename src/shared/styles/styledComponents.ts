import { styled } from 'styled-components';

export const Flex = styled.div<{ $direction: 'row' | 'column'; $gap?: string }>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  gap: ${(props) => props.$gap ?? '0'};
`;

export const SectionTitle = styled.h1<{ $colour: 'black' | 'white' | 'orange' }>`
  margin: 1rem 0;
  color: ${(props) => `var(--${props.$colour})`};

  font-size: 2rem;

  @media (min-width: 35em) {
    font-size: 4rem;
  }
`;
