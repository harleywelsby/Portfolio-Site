import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LinkLogo from '../components/LinkLogo';
import '../styles/globals.css';
import {
  HorizontalFlexBox,
  ParagraphText,
  Section,
  SectionTitle,
} from '../styles/styledComponents';
import {
  ABOUT_ME_PARAGRAPH_1,
  ABOUT_ME_PARAGRAPH_2,
  GithubLabel,
  GithubUrl,
  LinkedinLabel,
  LinkedinUrl,
} from '../constants';

function AboutSection() {
  return (
    <Section className="hidden altBackground">
      <SectionTitle className="hidden">About Me</SectionTitle>
      <ParagraphText className="hidden lightThemeText">{ABOUT_ME_PARAGRAPH_1}</ParagraphText>
      <br />
      <ParagraphText className="hidden lightThemeText">{ABOUT_ME_PARAGRAPH_2}</ParagraphText>
      <br />
      <HorizontalFlexBox className="hidden paddedTop">
        <LinkLogo
          iconName={faLinkedin}
          link={LinkedinUrl}
          label={LinkedinLabel}
          newTab
          size={'10x'}
        />
        <LinkLogo iconName={faGithub} link={GithubUrl} label={GithubLabel} newTab size={'10x'} />
      </HorizontalFlexBox>
    </Section>
  );
}

export default AboutSection;
