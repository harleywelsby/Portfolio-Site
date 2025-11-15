import styled from "styled-components";
import { zIndex } from "../shared/styles/styleConstants";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 700px)" });

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
          <ContactLinksHeader>
            <b>Keen to connect?</b> You can find me here:
          </ContactLinksHeader>
          <ContactLinksWrapper>
            <ContactLink
              href="https://www.linkedin.com/in/harleywelsby/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="5x" />
            </ContactLink>
            <ContactLink
              href="https://github.com/harleywelsby"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="5x" />
            </ContactLink>
          </ContactLinksWrapper>
        </>
      )}
      {isBigScreen && (
        <DesktopWrapper>
          <div>
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
            <ContactLinksHeader>
              <b>Keen to connect?</b> You can find me here:
            </ContactLinksHeader>
            <ContactLinksWrapper>
              <ContactLink
                href="https://www.linkedin.com/in/harleywelsby/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="5x" />
              </ContactLink>
              <ContactLink
                href="https://github.com/harleywelsby"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="5x" />
              </ContactLink>
            </ContactLinksWrapper>
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
  width: 85%;

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
  align-items: center;
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

const ContactLinksHeader = styled.p`
  color: var(--soft-white);
  font-size: 1rem;
  margin: 1rem;
`;

const ContactLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContactLink = styled.a`
  color: var(--soft-white);
  text-decoration: none;
  padding: 0.3rem;

  font-weight: 500;
  font-size: clamp(1rem, 2vw + 0.7rem, 1.5rem);

  &:hover {
    color: var(--title-orange);
  }
`;

export default AboutMe;
