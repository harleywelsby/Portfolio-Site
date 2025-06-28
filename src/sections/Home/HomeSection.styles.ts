import { styled } from 'styled-components';

export const HomeWrapper = styled.section`
  display: inline-flex;
  align-items: center;

  padding: 1rem 0 3rem 0;

  @media (min-width: 35em) {
    padding: 4rem 0 3rem 0;
    height: 80vh;
  }
`;

export const HomepageImage = styled.img`
  border-radius: 1rem;
  margin: 1rem 0 1rem 0;
  width: 80vw;

  @media (min-width: 35em) {
    width: 30vw;
  }
`;

export const HomeContentWrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 35em) {
    padding: 4rem 0 4rem 0;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const NameText = styled.h1`
  margin: 0;
  padding: 0;

  color: var(--orange);
  margin-bottom: 0.3rem;

  font-size: clamp(3rem, 3vw + 0.25rem, 4rem);

  @media (min-width: 35em) {
    font-size: 5rem;
  }
`;

export const SubtitleText = styled.p`
  margin: 0;

  font-size: clamp(1.5rem, 3vw + 0.25rem, 4rem);

  @media (min-width: 35em) {
    font-size: 2rem;
  }
`;
