import '../styles/globals.css';
import { HeadshotImage, NameText, RoleText } from '../styles/styledComponents';

function HomeSection() {
  return (
    <section className="hidden paddedBottom verticalCenter">
      <div className="horizontal">
        <div>
          <NameText>Harley Welsby</NameText>
          <RoleText>Full-Stack Software Developer</RoleText>
        </div>
        <HeadshotImage src="src/assets/harleyHeadshot.webp" loading="eager" />
      </div>
    </section>
  );
}

export default HomeSection;
