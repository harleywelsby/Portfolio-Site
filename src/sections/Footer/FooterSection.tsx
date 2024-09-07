import { GitHubPortfolioSiteUrl } from '../../constants';
import { FooterWrapper, FooterText } from './FooterSection.styles';

function FooterSection() {
  return (
    <FooterWrapper className="hidden">
      <FooterText>
        © 2024 Harley Welsby |{' '}
        <a href={GitHubPortfolioSiteUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </FooterText>
    </FooterWrapper>
  );
}

export default FooterSection;
