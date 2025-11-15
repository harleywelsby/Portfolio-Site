import styled from 'styled-components';
import { zIndex } from '../shared/styles/styleConstants';
import { useMediaQuery } from 'react-responsive';

function AboutMe() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 700px)' });

  return (
    <SectionWrapper>
      {!isBigScreen && (
        <>
          <WelcomeText>
            {`Kia ora, I'm Harley. 👋`}
            <br />
            {`I'm a `}
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
      {isBigScreen && (
        <DesktopWrapper>
          <WelcomeText>
            {`Kia ora, I'm Harley. 👋`}
            <br />
            {`I'm a `}
            <OrangeHighlight>Full-Stack Web Developer</OrangeHighlight>
            {` based in Wellington, New Zealand.`}
            <br />
            <br />
            {`I'm passionate about designing and developing `}
            <OrangeHighlight>React & .NET apps</OrangeHighlight>
            {` that solve problems & make a difference.`}
          </WelcomeText>
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

  max-width: 1000px;
  margin: 0 auto;
`;

const WelcomeText = styled.p`
  justify-self: center;

  color: var(--soft-white);
  font-size: 1rem;
  text-align: left;
  padding: 0.5rem 1rem;
  margin: 1rem;
  z-index: ${zIndex.AlwaysAtFront};
  position: relative;

  background-color: var(--deep-black);
  border-radius: 1rem;

  height: fit-content;

  width: 90%;

  @media (min-width: 700px) {
    margin: 0 0 0 1rem;
    padding: 1rem;
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
`;

const ProfilePicImage = styled.img`
  width: 100%;
  border-radius: 1rem;

  max-width: 1000px;
`;

const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin: 1rem 0;
  gap: 1rem;
`;

export default AboutMe;
