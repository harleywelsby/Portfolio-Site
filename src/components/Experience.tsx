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
  skills,
}: ExperienceItemProps) {
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
        <TimelineConnector />
      </TimelineSeparator>
      <ExperienceDetailsWrapper>
        <ExperienceTitle>{title}</ExperienceTitle>
        <Institution>{institution}</Institution>
        <Dates>
          {startDate} — {endDate}
        </Dates>
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
          title="Software Engineer"
          institution="Upstock"
          startDate="June 2025"
          endDate="Present"
        />
        <ExperienceItem
          type="work"
          title="Software Developer"
          institution="PartsTrader"
          startDate="November 2021"
          endDate="June 2025"
          // TODO:
          // skills={[
          //   { skill: "React.js", color: "var(--react-blue)" },
          //   { skill: "TypeScript", color: "var(--typescript-blue)" },
          //   { skill: ".NET", color: "var(--dotnet-purple)" },
          //   {
          //     skill: "SQL Server",
          //     color: "var(--sql-server-yellow)",
          //     textColor: "var(--soft-black)",
          //   },
          //   {
          //     skill: "AWS",
          //     color: "var(--aws-orange)",
          //     textColor: "var(--soft-black)",
          //   },
          // ]}
        />
        <ExperienceItem
          type="education"
          title="Bachelor of Engineering (Hons)"
          institution="Victoria University of Wellington"
          startDate="2020"
          endDate="2023"
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

export default Experience;
