import {
  faAws,
  faConfluence,
  faDocker,
  faJava,
  faJira,
  faReact,
  faUnity,
} from '@fortawesome/free-brands-svg-icons';
import SkillLogo from '../components/SkillLogo';
import {
  HorizontalFlexBox,
  SubtitleText,
  Section,
  SectionTitle,
  SkillStack,
  VerticalFlexBox,
} from '../styles/styledComponents';
import { CustomIcon } from '../components/CustomIcon';
import {
  CppIconpath,
  CsharpIconPath,
  DotNetIconPath,
  JavaScriptIconPath,
  NextIconPath,
  TypeScriptIconPath,
  UnrealIconPath,
  ViteIconPath,
} from '../constants';
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
            <SkillLogo
              icon={CustomIcon('js', JavaScriptIconPath)}
              label="JavaScript"
              size={isMobile ? '3x' : '5x'}
            />
            <SkillLogo
              icon={CustomIcon('ts', TypeScriptIconPath)}
              label="TypeScript"
              size={isMobile ? '3x' : '5x'}
            />
            <SkillLogo
              icon={CustomIcon('next', NextIconPath)}
              label="Next.js"
              size={isMobile ? '3x' : '5x'}
            />
            <SkillLogo
              icon={CustomIcon('vite', ViteIconPath)}
              label="Vite"
              size={isMobile ? '3x' : '5x'}
            />
          </SkillStack>
        </VerticalFlexBox>
        <VerticalFlexBox>
          <SubtitleText>Back-End</SubtitleText>
          <SkillStack>
            <SkillLogo
              icon={CustomIcon('dotnet', DotNetIconPath)}
              label=".NET Core"
              size={isMobile ? '3x' : '5x'}
            />
            <SkillLogo
              icon={CustomIcon('c#', CsharpIconPath)}
              label="C#"
              size={isMobile ? '3x' : '5x'}
            />
            <SkillLogo
              icon={CustomIcon('c++', CppIconpath)}
              label="C++"
              size={isMobile ? '3x' : '5x'}
            />
            <SkillLogo icon={faJava} label="Java" size={isMobile ? '3x' : '5x'} />
          </SkillStack>
        </VerticalFlexBox>
        <VerticalFlexBox>
          <SubtitleText>The Rest</SubtitleText>
          <SkillStack>
            <SkillLogo icon={faAws} label="AWS" size={isMobile ? '3x' : '5x'} />
            <SkillLogo icon={faDocker} label="Docker" size={isMobile ? '3x' : '5x'} />
            <SkillLogo icon={faJira} label="Jira" size={isMobile ? '3x' : '5x'} />
            <SkillLogo icon={faConfluence} label="Confluence" size={isMobile ? '3x' : '5x'} />
            <SkillLogo icon={faUnity} label="Unity" size={isMobile ? '3x' : '5x'} />
            <SkillLogo
              icon={CustomIcon('unreal', UnrealIconPath)}
              label="Unreal Engine"
              size={isMobile ? '3x' : '5x'}
            />
          </SkillStack>
        </VerticalFlexBox>
      </HorizontalFlexBox>
    </Section>
  );
}

export default SkillsSection;
