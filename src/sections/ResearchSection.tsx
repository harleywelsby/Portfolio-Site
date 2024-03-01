import {
  ProjectDemoImageReference,
  ProjectReadMoreText,
  RESEARCH_PARAGRAPH_1,
  RESEARCH_PARAGRAPH_2,
  RESEARCH_PARAGRAPH_3,
  RESEARCH_PARAGRAPH_4,
  RESEARCH_PARAGRAPH_5,
  VuwResearchPaperUrl,
} from '../constants';
import {
  DemoImage,
  ImageReference,
  ParagraphText,
  Section,
  SectionTitle,
} from '../styles/styledComponents';

function ResearchSection() {
  // TODO: Unimplemented

  return (
    <Section className="hidden altBackground">
      <SectionTitle className="lightThemeText">Research</SectionTitle>
      <ParagraphText className="hidden">{RESEARCH_PARAGRAPH_1}</ParagraphText>
      <br />
      <ParagraphText className="hidden">{RESEARCH_PARAGRAPH_2}</ParagraphText>
      <br />
      <DemoImage className="hidden" src="src/assets/ResearchProjectDemo.jpg" loading="eager" />
      <ImageReference className="hidden">{ProjectDemoImageReference}</ImageReference>
      <br />
      <ParagraphText className="hidden">{RESEARCH_PARAGRAPH_3}</ParagraphText>
      <br />
      <ParagraphText className="hidden">{RESEARCH_PARAGRAPH_4}</ParagraphText>
      <br />
      <ParagraphText className="hidden">{RESEARCH_PARAGRAPH_5}</ParagraphText>
      <br />
      <ParagraphText className="hidden">
        {`${ProjectReadMoreText} `}
        <a href={VuwResearchPaperUrl} target="_blank" rel="noreferrer">
          here.
        </a>
      </ParagraphText>
    </Section>
  );
}

export default ResearchSection;
