import styled from 'styled-components';
import { zIndex } from '../shared/styles/styleConstants';
import { useMediaQuery } from 'react-responsive';

function AboutMe() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 700px)' });

  return (
    <SectionWrapper>
      {isSmallScreen && (
        <>
          <WelcomeText>
            {`Kia ora👋 I'm Harley, a `}
            <br />
            <OrangeHighlight>Full-Stack Web Developer</OrangeHighlight>
            {` based in Wellington, New Zealand.`}
          </WelcomeText>
          <ImageWrapper>
            <ProfilePicImage src="ProfilePic.webp" alt="Profile picture" />
          </ImageWrapper>
          <WelcomeText>
            {`I'm passionate about designing and developing `}
            <OrangeHighlight>React & .NET apps</OrangeHighlight>
            {` that solve problems & make a difference.`}
          </WelcomeText>
        </>
      )}
      {!isSmallScreen && (
        <DesktopWrapper>
          <div>
            <WelcomeText>
              {`Kia ora👋 I'm Harley, a `}
              <br />
              <OrangeHighlight>Full-Stack Web Developer</OrangeHighlight>
              {` based in Wellington, New Zealand.`}
              <br />
              <br />
              {`I'm passionate about designing and developing `}
              <OrangeHighlight>React & .NET apps</OrangeHighlight>
              {` that solve problems & make a difference.`}
            </WelcomeText>
          </div>
          <ImageWrapper>
            <ProfilePicImage src="ProfilePic.webp" alt="Profile picture" />
          </ImageWrapper>
        </DesktopWrapper>
      )}
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WelcomeText = styled.p`
  justify-self: center;

  color: var(--soft-white);
  font-size: clamp(1rem, 2vw + 0.7rem, 1.5rem);
  text-align: left;
  padding: 0.5rem 1rem;
  margin: 1rem;
  z-index: ${zIndex.AlwaysAtFront};
  position: relative;

  background-color: var(--deep-black);
  border-radius: 1rem;

  @media (min-width: 700px) {
    width: 100%;
    margin-right: -3rem;
  }
`;

const OrangeHighlight = styled.span`
  color: var(--title-orange);
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  z-index: ${zIndex.AlwaysAtBack};

  @media (min-width: 700px) {
    padding: 0;
    align-self: center;
  }
`;

const ProfilePicImage = styled.img`
  width: 100%;
  border-radius: 1rem;

  @media (min-width: 700px) {
    width: 80%;
    border-radius: 75% 50%;
    margin: -1rem -3rem 0 0;

    max-width: 1400px;
  }
`;

const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
    max-width: 1000px;
  }
`;

export default AboutMe;
