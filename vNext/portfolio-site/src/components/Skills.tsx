import { faAws, faReact, type IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { CustomIcon } from './CustomIcon';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export const DotNetIconPath =
  'M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z';

export const TypeScriptIconPath =
  'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z';

interface SkillCardProps {
  skill: string;
  experience: string;
  icon: IconDefinition;
  iconColor?: string;
}

function SkillCard({ skill, experience, icon, iconColor }: SkillCardProps) {
  return (
    <SkillCardWrapper>
      <FontAwesomeIcon icon={icon} size="3x" color={iconColor} />
      <div>
        <SkillCardTitle>{skill}</SkillCardTitle>
        <SkillCardDescription>{experience}</SkillCardDescription>
      </div>
    </SkillCardWrapper>
  );
}

function Skills() {
  return (
    <SectionOuterWrapper>
      <SectionWrapper>
        <Title>Skills</Title>
        <SkillCardsList>
          <SkillCard
            skill="React.js"
            experience="5 years between study & industry"
            icon={faReact}
            iconColor="var(--react-blue)"
          />
          <SkillCard
            skill="TypeScript"
            experience="5 years between study & industry"
            icon={CustomIcon('typescript', TypeScriptIconPath)}
            iconColor="var(--typescript-blue)"
          />
          <SkillCard
            skill="C# & .NET"
            experience="4 years in industry"
            icon={CustomIcon('dotnet', DotNetIconPath)}
            iconColor="var(--dotnet-purple)"
          />
          <SkillCard
            skill="SQL Server"
            experience="4 years in Industry"
            icon={faDatabase}
            iconColor="var(--sql-server-yellow)"
          />
          <SkillCard
            skill="AWS"
            experience="Cloud Practitioner Certified"
            icon={faAws}
            iconColor="var(--aws-orange)"
          />
        </SkillCardsList>
      </SectionWrapper>
    </SectionOuterWrapper>
  );
}

const SectionOuterWrapper = styled.div`
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

  background-color: var(--soft-white);
`;

const Title = styled.h1`
  color: var(--soft-black);
  font-size: 2.5rem;
  margin: 1rem 0;
`;

const SkillCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  margin: auto;
  max-width: 1000px;

  padding: 1rem;
  border-radius: 1rem;

  width: 50%;

  background-color: var(--soft-black);

  @media (max-width: 768px) {
    width: 80%;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const SkillCardTitle = styled.h2`
  color: var(--soft-white);
  text-align: left;
  font-size: 1.25rem;
  margin: 0;
`;

const SkillCardDescription = styled.p`
  color: var(--soft-white);
  text-align: left;
  font-size: 1rem;
  margin: 0;
`;

const SkillCardsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;

export default Skills;
