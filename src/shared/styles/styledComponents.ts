import { styled } from 'styled-components';

export const Flex = styled.div<{ $direction: 'row' | 'column'; $gap?: string }>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  gap: ${(props) => props.$gap ?? '0'};
`;

export const SectionTitle = styled.h1`
  margin: 1rem 0;
  font-size: 2rem;

  @media (min-width: 35em) {
    font-size: 4rem;
  }
`;

export const SectionDivider = styled.div`
  margin: 2rem 0;
  color: var(--grey);
  min-width: 100%;
  justify-self: center;

  border-bottom: solid;
  border-width: 0.5rem;
  border-radius: 0.5rem;
`;
