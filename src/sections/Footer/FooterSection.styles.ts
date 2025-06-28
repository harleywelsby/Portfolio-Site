import { styled } from 'styled-components';

export const FooterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  margin-top: 2rem;

  background-color: var(--deep-black);

  @media (min-width: 35em) {
    padding: 2rem 1rem;
  }
`;

export const FooterText = styled.p`
  font-weight: 4;
  margin: 0;
  padding: 0;
  text-align: left;

  font-size: 1rem;
  max-width: 80%;

  @media (min-width: 35em) {
    font-size: 1.5rem;
    max-width: 50%;
  }
`;
