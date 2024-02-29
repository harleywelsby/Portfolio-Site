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
  ABOUT_ME_PARAGRAPH_3,
  GithubLabel,
  GithubUrl,
  LinkedinLabel,
  LinkedinUrl,
} from '../constants';
import { isMobile } from 'react-device-detect';

function AboutSection() {
  return (
    <Section className="hidden altBackground">
      <SectionTitle className="hidden lightThemeText">About Me</SectionTitle>
      <ParagraphText className="hidden lightThemeText">{ABOUT_ME_PARAGRAPH_1}</ParagraphText>
      <br />
      <ParagraphText className="hidden lightThemeText">{ABOUT_ME_PARAGRAPH_2}</ParagraphText>
      <br />
      <ParagraphText className="hidden lightThemeText">{ABOUT_ME_PARAGRAPH_3}</ParagraphText>
      <br />
      <HorizontalFlexBox className={`hidden ${!isMobile && 'paddedTop smallMarginBottom'}`}>
        <LinkLogo
          iconName={faLinkedin}
          link={LinkedinUrl}
          label={LinkedinLabel}
          newTab
          size={isMobile ? '5x' : '10x'}
        />
        <LinkLogo
          iconName={faGithub}
          link={GithubUrl}
          label={GithubLabel}
          newTab
          size={isMobile ? '5x' : '10x'}
        />
      </HorizontalFlexBox>
    </Section>
  );
}

export default AboutSection;
