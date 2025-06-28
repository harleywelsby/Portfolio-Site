import { Flex } from '../../shared/styles/styledComponents';
import TechStack from '../../components/TechStack/TechStack';
import {
  HomeContentWrapper,
  HomepageImage,
  HomeWrapper,
  NameText,
  SubtitleText,
  TitleWrapper,
} from './HomeSection.styles';
import { useMediaQuery } from 'react-responsive';

function HomeSection() {
  return (
    <HomeWrapper className="hidden">
      <Flex $direction="column" $gap="1rem">
        <HomeContentWrapper>
          <TitleWrapper>
            <NameText className="hidden">Harley Welsby</NameText>
            <SubtitleText className="hidden typewriter">{`{ Full-Stack Developer }`}</SubtitleText>
          </TitleWrapper>
          <HomepageImage className="hidden" src="homepageImage.jpg" loading="eager" />
          <TechStack />
        </HomeContentWrapper>
      </Flex>
    </HomeWrapper>
  );
}

export default HomeSection;
