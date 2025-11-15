import { Timeline } from "@mui/lab";
import styled from "styled-components";
import { SHOW_WORK_IN_PROGRESS } from "../config";

// TODO:
// interface ExperienceItemProps {
//   role: string;
//   company: string;
//   startDate: string;
//   endDate: string;
//   description: string;
// }

// function ExperienceItem({ role, company, startDate, endDate, description }: ExperienceItemProps) {
//   return <TimelineItem></TimelineItem>;
// }

function Experience() {
  if (!SHOW_WORK_IN_PROGRESS) {
    return null;
  }

  return (
    <SectionWrapper>
      <Title id="Experience">Experience</Title>
      <Timeline>
        {/* <ExperienceItem
          role="Software Engineer"
          company="Company"
          startDate="2020"
          endDate="2021"
          description="Description"
        /> */}
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

export default Experience;
