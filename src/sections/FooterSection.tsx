import { GitHubPortfolioSiteUrl } from '../constants';
import { ParagraphText, Section } from '../styles/styledComponents';

function FooterSection() {
  // TODO: Unimplemented

  return (
    <Section className="hidden">
      <ParagraphText>
        © 2024 Harley Welsby |{' '}
        <a href={GitHubPortfolioSiteUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </ParagraphText>
    </Section>
  );
}

export default FooterSection;
