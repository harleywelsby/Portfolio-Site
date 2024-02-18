import '../styles/globals.css';
import {
  HeaderSection,
  HeadshotImage,
  HorizontalFlexBox,
  NameText,
  RoleText,
} from '../styles/styledComponents';

function HomeSection() {
  return (
    <HeaderSection className="hidden">
      <HorizontalFlexBox>
        <div>
          <NameText className="hidden">Harley Welsby</NameText>
          <RoleText className="hidden typewriter">Full-Stack Software Developer</RoleText>
        </div>
        <HeadshotImage className="hidden" src="src/assets/harleyHeadshot.webp" loading="eager" />
      </HorizontalFlexBox>
    </HeaderSection>
  );
}

export default HomeSection;
