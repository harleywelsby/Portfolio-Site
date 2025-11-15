import {
  Timeline,
  TimelineConnector,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import styled from "styled-components";
import { SHOW_WORK_IN_PROGRESS } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

interface ExperienceItemProps {
  type: "work" | "education";
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  description?: string;
  logo?: string;
}

function ExperienceItem({
  type,
  title,
  institution,
  startDate,
  endDate,
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
      </ExperienceDetailsWrapper>
    </TimelineItem>
  );
}

function Experience() {
  if (!SHOW_WORK_IN_PROGRESS) {
    return null;
  }

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

export default Experience;
