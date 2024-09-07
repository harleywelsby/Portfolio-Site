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
          {isMobile && <HomepageImage className="hidden" src="homepageImage.jpg" loading="eager" />}
          <TechStack />
        </HomeContentWrapper>
        {!isMobile && <HomepageImage className="hidden" src="homepageImage.jpg" loading="eager" />}
      </HorizontalFlexBox>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.section`
  padding: 2rem 0 ${isMobile ? '3rem' : '5rem'} 0;
  display: inline-flex;
  align-items: center;
  height: ${isMobile ? '10vh' : '80vh'};
`;

const HomepageImage = styled.img`
  border-radius: 1rem;
  width: ${isMobile ? '80vw' : '35vw'};
  margin: 1rem 0 1rem 0;
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
  font-size: ${isMobile ? '10vw' : '5vw'};
  margin: 0;
`;

const SubtitleText = styled.p`
  margin: 0;
  font-size: ${isMobile ? '5vw' : '2vw'};
`;

export default HomeSection;
