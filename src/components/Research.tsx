import styled from "styled-components";

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
        <LinkWrapper
          href="https://ojs.victoria.ac.nz/wfes/article/view/8424"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkLogo src="VUW.webp" />
          <div>
            <LinkTitle>
              Understanding Sickness and Emotional Experiences in 360 Degree VR
              Motion Simulators
            </LinkTitle>
            <Institution>
              Harley Welsby • Victoria University of Wellington
            </Institution>
          </div>
        </LinkWrapper>
        <SubHeader>Cited by:</SubHeader>
        <LinkWrapper
          href="https://ojs.victoria.ac.nz/wfes/article/view/8424"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkLogo src="UC.webp" />
          <div>
            <LinkTitle>
              A Study on Cybersickness and Immersion in a VR game with
              360-Degree Motion Simulator
            </LinkTitle>
            <Institution>Ziyang Zhang • University of Canterbury</Institution>
          </div>
        </LinkWrapper>
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
    flex-direction: column;
    padding: 1rem;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const LinkLogo = styled.img`
  width: 100px;
  padding: 1rem;
  border-radius: 2rem;

  @media (max-width: 35em) {
    display: none;
  }
`;

const Institution = styled.p`
  color: var(--soft-white);
  font-size: 1.2rem;
  margin: 0;
  text-align: left;
  width: 80%;
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
  }
`;

export default Research;
