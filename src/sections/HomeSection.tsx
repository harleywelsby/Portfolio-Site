import { isMobile } from 'react-device-detect';
import '../styles/globals.css';
import { HorizontalFlexBox } from '../styles/styledComponents';
import { styled } from 'styled-components';
import TechStack from '../components/TechStack';

function HomeSection() {
  return (
    <HomeWrapper className="hidden">
      <HorizontalFlexBox $gap="6rem">
        <HomeContentWrapper>
          <TitleWrapper>
            <NameText className="hidden">Harley Welsby</NameText>
            <SubtitleText className="hidden typewriter">Full-Stack Software Developer</SubtitleText>
          </TitleWrapper>
          <TechStack />
        </HomeContentWrapper>
        <HomepageImage className="hidden" src="homepageImage.jpg" loading="eager" />
      </HorizontalFlexBox>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.section`
  padding: 5rem 2rem ${isMobile ? '3rem' : '5rem'} 2rem;
  display: inline-flex;
  align-items: center;
  height: ${isMobile ? '10vh' : '80vh'};
`;

const HomepageImage = styled.img`
  border-radius: 1rem;
  width: 38rem;
`;

const HomeContentWrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 4rem 0 4rem 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameText = styled.h1`
  color: var(--orange);
  margin-bottom: 0.3rem;
  font-size: ${isMobile ? '1.5rem' : '5rem'};
  margin: 0;
`;

const SubtitleText = styled.p`
  margin: 0;
  font-size: ${isMobile ? '0.7rem' : '2rem'};
`;

export default HomeSection;
