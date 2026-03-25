import {
  Timeline,
  TimelineConnector,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

interface SkillTagProps {
  skill: string;
  color?: string;
  textColor?: string;
}

function SkillTag({ skill, color, textColor }: SkillTagProps) {
  return (
    <SkillTagWrapper $color={color} $textColor={textColor}>
      {skill}
    </SkillTagWrapper>
  );
}

interface ExperienceItemProps {
  type: "work" | "education";
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  description?: string;
  logo?: string;
  skills?: SkillTagProps[];
}

function ExperienceItem({
  type,
  title,
  institution,
  startDate,
  endDate,
  description,
  skills,
}: ExperienceItemProps) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const enableDescription = !!description && !isSmallScreen;

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector />
        <FontAwesomeIcon
          icon={type === "work" ? faBriefcase : faGraduationCap}
          size="2x"
        />
        <TimelineConnector />
        <TimelineConnector />
        {enableDescription && (
          <>
            <TimelineConnector />
            <TimelineConnector />
          </>
        )}
      </TimelineSeparator>
      <ExperienceDetailsWrapper>
        <ExperienceTitle>{title}</ExperienceTitle>
        <Institution>{institution}</Institution>
        <Dates>
          {startDate} — {endDate}
        </Dates>
        {enableDescription && <Description>{description}</Description>}
        {skills && (
          <Skills>
            {skills.map((skill, index) => (
              <SkillTag key={index} skill={skill.skill} color={skill.color} />
            ))}
          </Skills>
        )}
      </ExperienceDetailsWrapper>
    </TimelineItem>
  );
}

function Experience() {
  return (
    <SectionWrapper>
      <Title id="Experience">Experience</Title>
      <Timeline position="right">
        <ExperienceItem
          type="work"
          title="Full-Stack Software Engineer"
          institution="Upstock"
          startDate="June 2025"
          endDate="Present"
          description="As part of a small team in an early-stage startup, I wear many hats. In this role I've gained experience across .NET and React development, SQL databases, on-call production support and operations monitoring, and AWS infrastructure. It's common for tickets to come in as rough ideas or problems, and I turn them into well-structured solutions."
        />
        <ExperienceItem
          type="work"
          title="Full-Stack Software Developer"
          institution="PartsTrader"
          startDate="November 2021"
          endDate="June 2025"
          description="Joining as an intern and progressing into a graduate role, my time at PartsTrader gave me early exposure to a wide range of development practices and design patterns. As part of a large cross-functional team, I was responsible for building and maintaining the PartsTrader web application using .NET, React and SQL Server, across both legacy and modern codebases."
        />
        <ExperienceItem
          type="education"
          title="Bachelor of Engineering (Hons)"
          institution="Victoria University of Wellington"
          startDate="2020"
          endDate="2023"
          description="Majoring in Software Engineering, my education at Victoria University laid the foundation for my career in software development. My final year involved a year-long research project where I designed and developed a VR game in C# for assessing motion sickness in full-body VR simulators, which you can find on my GitHub or read about below."
        />
      </Timeline>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1000px;
  margin: 2rem auto;
`;

const Title = styled.h1`
  color: var(--soft-white);
  font-size: 2.5rem;
  margin: 1rem 0;
`;

const ExperienceTitle = styled.h2`
  color: var(--soft-white);
  font-size: 1.2rem;
  margin: 0 1rem;
  padding: 0;
  text-align: left;
  line-height: 1.2rem;
`;

const Institution = styled.p`
  color: var(--soft-white);
  font-size: 1rem;
  margin: 0.2rem 1rem;
  padding: 0;
  text-align: left;
`;

const Dates = styled.p`
  color: var(--soft-white);
  font-size: 1rem;
  margin: 0.2rem 1rem;
  padding: 0;
  text-align: left;
`;

const ExperienceDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  padding: 1rem 0.5rem;
  margin: 1rem 0;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 0.5rem 1rem;
`;

const SkillTagWrapper = styled.span<{ $color?: string; $textColor?: string }>`
  font-size: 1rem;
  margin: 0;
  padding: 0.2rem 0.5rem;
  text-align: center;
  border-radius: 0.5rem;

  background-color: ${(props) => props.$color || "var(--soft-black)"};
  color: ${(props) => props.$textColor || "var(--soft-white)"};
`;

const Description = styled.p`
  color: var(--soft-white);
  font-size: 1rem;
  margin: 0.2rem 1rem 0 1rem;
  padding: 0;
  text-align: left;
`;

export default Experience;
