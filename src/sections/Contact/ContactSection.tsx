import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LinkLogo from '../../components/LinkLogo/LinkLogo';
import { ContactSectionText, ContactSectionWrapper } from './ContactSection.styles';
import { GithubUrl, LinkedinUrl } from '../../shared/utils/Constants';
import { isMobile } from 'react-device-detect';
import { Flex, SectionTitle } from '../../shared/styles/styledComponents';

function ContactSection() {
  return (
    <ContactSectionWrapper className="hidden">
      <SectionTitle $colour="black">Contact</SectionTitle>
      <ContactSectionText>
        I'm always looking to meet people and love to engage with the Tech community, so feel free
        to reach out at the links below!
      </ContactSectionText>
      <Flex $direction="row">
        <LinkLogo
          iconName={faLinkedin}
          link={LinkedinUrl}
          label={'LinkedIn'}
          newTab
          size={isMobile ? '5x' : '10x'}
        />
        <LinkLogo
          iconName={faGithub}
          link={GithubUrl}
          label={'GitHub'}
          newTab
          size={isMobile ? '5x' : '10x'}
        />
      </Flex>
    </ContactSectionWrapper>
  );
}

export default ContactSection;
