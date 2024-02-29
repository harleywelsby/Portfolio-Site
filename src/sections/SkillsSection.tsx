import { faAws, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import SkillLogo from '../components/SkillLogo';
import {
  HorizontalFlexBox,
  ParagraphText,
  SubtitleText,
  Section,
  SectionTitle,
  SkillStack,
  VerticalFlexBox,
} from '../styles/styledComponents';
import { CustomIcon } from '../components/CustomIcon';
import { DotNetIconPath } from '../constants';
import { isMobile } from 'react-device-detect';

function SkillsSection() {
  return (
    <Section className="hidden">
      <SectionTitle className="darkThemeText">My Skills</SectionTitle>
      <HorizontalFlexBox>
        <VerticalFlexBox>
          <SubtitleText>Front-End</SubtitleText>
          <SkillStack>
            <SkillLogo icon={faReact} label="React.js" size={isMobile ? '3x' : '5x'} />
            <SkillLogo icon={faJs} label="JavaScript" size={isMobile ? '3x' : '5x'} />
          </SkillStack>
        </VerticalFlexBox>
        <VerticalFlexBox>
          <SubtitleText>Back-End</SubtitleText>
          <SkillStack>
            <SkillLogo
              icon={CustomIcon('dotnet', DotNetIconPath)}
              label=".NET Core & Framework"
              size={isMobile ? '3x' : '5x'}
            />
            <SkillLogo icon={faJava} label="Java" size={isMobile ? '3x' : '5x'} />
          </SkillStack>
        </VerticalFlexBox>
        <VerticalFlexBox>
          <SubtitleText>Operations</SubtitleText>
          <SkillStack>
            <SkillLogo icon={faAws} label="AWS" size={isMobile ? '3x' : '5x'} />
          </SkillStack>
        </VerticalFlexBox>
      </HorizontalFlexBox>
    </Section>
  );
}

export default SkillsSection;
