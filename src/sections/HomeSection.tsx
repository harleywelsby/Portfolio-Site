import '../styles/globals.css';
import {
  HeaderSection,
  HeadshotImage,
  HorizontalFlexBox,
  NameText,
  SubtitleText,
} from '../styles/styledComponents';

function HomeSection() {
  return (
    <HeaderSection className="hidden">
      <HorizontalFlexBox>
        <div>
          <NameText className="hidden">Harley Welsby</NameText>
          <SubtitleText className="hidden typewriter">Full-Stack Software Developer</SubtitleText>
        </div>
        <HeadshotImage className="hidden" src="harleyHeadshot.jpg" loading="eager" />
      </HorizontalFlexBox>
    </HeaderSection>
  );
}

export default HomeSection;
