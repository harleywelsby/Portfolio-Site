import styled from 'styled-components';

export const ProjectsSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--white);
  color: var(--black);

  padding: 1rem;

  @media (min-width: 35em) {
    padding: 3rem 1rem;
  }
`;

// TODO: Currently not in use
export const ProjectsSectionText = styled.p`
  flex-wrap: wrap;
  text-align: center;
  padding: 0 10vw;

  @media (min-width: 35em) {
    font-size: 1.5rem;
    width: 40%;
  }
`;
