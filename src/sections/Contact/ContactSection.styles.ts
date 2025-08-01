import { styled } from 'styled-components';

export const ContactSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  @media (min-width: 35em) {
    padding: 3rem 1rem;
  }
`;

export const ContactSectionText = styled.p`
  flex-wrap: wrap;
  text-align: center;
  padding: 0 10vw;

  @media (min-width: 35em) {
    font-size: 1.5rem;
    width: 40%;
  }
`;
