import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LinkLogo from '../../components/LinkLogo';
import {
  ContactSectionText,
  ContactSectionTitle,
  ContactSectionWrapper,
} from './ContactSection.styles';
import { GithubLabel, GithubUrl, LinkedinLabel, LinkedinUrl } from '../../constants';
import { isMobile } from 'react-device-detect';
import { Flex } from '../../shared/styledComponents';

function ContactSection() {
  // TODO: Unimplemented

  return (
    <ContactSectionWrapper className="hidden altBackground">
      <ContactSectionTitle className="lightThemeText">Contact</ContactSectionTitle>
      <ContactSectionText className="lightThemeText">
        I'm always looking to meet people and love to engage with the Tech community, so feel free
        to reach out at the links below!
      </ContactSectionText>
      <Flex $direction="row">
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
      </Flex>
    </ContactSectionWrapper>
  );
}

export default ContactSection;
