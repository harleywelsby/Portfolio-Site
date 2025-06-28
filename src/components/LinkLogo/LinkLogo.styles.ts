import styled from 'styled-components';

export const LinkLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--white);

  padding: 1rem;

  @media (min-width: 35em) {
    padding: 1rem 2rem;
  }
`;

export const LinkLogoLabel = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;
