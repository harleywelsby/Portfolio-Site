import { isMobile } from 'react-device-detect';
import { Flex } from '../../shared/styledComponents';
import TechStack from '../../components/TechStack';
import {
  HomeContentWrapper,
  HomepageImage,
  HomeWrapper,
  NameText,
  SubtitleText,
  TitleWrapper,
} from './HomeSection.styles';

function HomeSection() {
  return (
    <HomeWrapper className="hidden">
      <Flex $direction="row" $gap="6rem">
        <HomeContentWrapper>
          <TitleWrapper>
            <NameText className="hidden">Harley Welsby</NameText>
            <SubtitleText className="hidden typewriter">Full-Stack Software Developer</SubtitleText>
          </TitleWrapper>
          {isMobile && <HomepageImage className="hidden" src="homepageImage.jpg" loading="eager" />}
          <TechStack />
        </HomeContentWrapper>
        {!isMobile && <HomepageImage className="hidden" src="homepageImage.jpg" loading="eager" />}
      </Flex>
    </HomeWrapper>
  );
}

export default HomeSection;
