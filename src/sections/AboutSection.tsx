import '../styles/globals.css';
import { ParagraphText, Section, SectionTitle } from '../styles/styledComponents';

const ABOUT_ME_PARAGRAPH_1 = `Kia ora! I'm Harley, a Full-Stack Software Develeoper from Wellington, New Zealand. I'm passionate about designing and developing web applications with React and .NET, and I'm always up for a challenge. I love to work through and solve problems with code, and I'm always learning about anything and everything the tech world has to offer.`;
const ABOUT_ME_PARAGRAPH_2 = `Feel free to reach out to me at the links below, or stay and scroll through my portfolio to see some of the cool stuff I've done!`;

function AboutSection() {
  return (
    <Section className="hidden altBackground">
      <SectionTitle>About Me</SectionTitle>
      <ParagraphText className="lightThemeText">{ABOUT_ME_PARAGRAPH_1}</ParagraphText>
      <br />
      <ParagraphText className="lightThemeText">{ABOUT_ME_PARAGRAPH_2}</ParagraphText>
    </Section>
  );
}

export default AboutSection;
