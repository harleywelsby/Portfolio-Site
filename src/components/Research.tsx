import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

interface ResearchPaperLinkProps {
  title: string;
  name: string;
  institution: string;
  logo: string;
  logoHasBorderRadius?: boolean;
  url: string;
}

function ResearchPaperLink({
  title,
  name,
  institution,
  logo,
  logoHasBorderRadius,
  url,
}: ResearchPaperLinkProps) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 35em)" });

  return (
    <LinkWrapper href={url} target="_blank" rel="noopener noreferrer">
      <LinkLogo src={logo} $withBorderRadius={logoHasBorderRadius} />
      <div>
        <LinkTitle>{title}</LinkTitle>
        {!isSmallScreen && (
          <Institution>
            {name} • {institution}
          </Institution>
        )}
        {isSmallScreen && (
          <>
            <Institution>{name}</Institution>
            <Institution>{institution}</Institution>
          </>
        )}
      </div>
    </LinkWrapper>
  );
}

function Research() {
  return (
    <SectionOuterWrapper>
      <SectionWrapper>
        <Title id="Research">Research</Title>
        <IntroParagraph>
          As part of my Bachelor of Engineering at Victoria University, I
          conducted a year-long research project studying the effects of VR
          motion simulators on physical sickness, in partnership with the VR
          startup Eight360.
          <br />
          <br />
          The study involved the development of a spaceship flight simulator
          compatible with Eight360's Nova motion simulator, as well as the
          development of a web application to analyze data from participants.
          <br />
          <br />
        </IntroParagraph>
        <SubHeader>You can find the results of my study here:</SubHeader>
        <ResearchPaperLink
          title="Understanding Sickness and Emotional Experiences in 360° VR Motion Simulators"
          name="Harley Welsby"
          institution="Victoria University of Wellington"
          logo="VUW.webp"
          url="https://ojs.victoria.ac.nz/wfes/article/view/8424/7478"
        />
        <SubHeader>Cited by:</SubHeader>
        <ResearchPaperLink
          title="A Study on Cybersickness and Immersion in a VR game with 360-Degree Motion Simulator"
          name="Ziyang Zhang"
          institution="University of Canterbury"
          logo="UC.webp"
          logoHasBorderRadius={true}
          url="https://ir.canterbury.ac.nz/server/api/core/bitstreams/ee0805c8-250c-4774-a8fc-1eca4e4ad23f/content"
        />
      </SectionWrapper>
    </SectionOuterWrapper>
  );
}

const SectionOuterWrapper = styled.div`
  margin-top: 4rem;
  background-color: var(--soft-white);
  padding-bottom: 2rem;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1000px;
  margin: 2rem auto;
`;

const Title = styled.h1`
  color: var(--soft-black);
  font-size: 2.5rem;
  margin: 1rem 0;
`;

const IntroParagraph = styled.p`
  color: var(--soft-black);
  font-size: 1.2rem;
  margin: 0;
  text-align: left;
  width: 80%;

  @media (max-width: 35em) {
    font-size: 1.1rem;
    width: 90%;
  }
`;

const SubHeader = styled.h2`
  color: var(--soft-black);
  font-size: 1.2rem;
  text-align: left;
  margin: 1rem 1.5rem 0;
  width: 89%;

  @media (min-width: 35em) {
    width: 80%;
  }
`;

const LinkWrapper = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: var(--soft-white);
  font-size: 1.2rem;
  margin: 0;
  text-align: left;
  width: 80%;

  background-color: var(--soft-black);
  margin: 1rem 0;
  border-radius: 1rem;

  text-decoration: none;

  @media (max-width: 35em) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    padding: 1rem;
    max-width: 80%;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const LinkLogo = styled.img<{ $withBorderRadius?: boolean }>`
  width: 100px;
  padding: 1rem;
  ${({ $withBorderRadius }) => $withBorderRadius && "border-radius: 2rem;"}

  @media (max-width: 35em) {
    width: 50px;
    padding: 0;
    margin: 0.2rem 0.8rem 0 0;
    ${({ $withBorderRadius }) => $withBorderRadius && "border-radius: 1rem;"}
  }
`;

const Institution = styled.p`
  color: var(--soft-white);
  font-size: 1.2rem;
  margin: 0;
  text-align: left;
  width: 80%;

  @media (max-width: 35em) {
    width: 100%;
    margin: 0rem 0 0.25rem 0;
    font-size: 0.8rem;
  }
`;

const LinkTitle = styled.h3`
  color: var(--soft-white);
  font-size: 1.2rem;
  margin: 0;
  text-align: left;
  width: 80%;

  @media (max-width: 35em) {
    width: 100%;
    margin: 0rem 0 0.25rem 0;
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;

export default Research;
