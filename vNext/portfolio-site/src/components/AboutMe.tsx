import styled from 'styled-components';
import { zIndex } from '../shared/styles/styleConstants';

function AboutMe() {
  return (
    <SectionWrapper>
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
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 700px;
  margin: 0 auto;
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
`;

export default AboutMe;
