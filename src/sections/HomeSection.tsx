import '../styles/globals.css';
import { HeadshotImage, NameText, RoleText } from '../styles/styledComponents';

function HomeSection() {
  return (
    <section className="hidden paddedBottom verticalCenter">
      <div className="horizontal">
        <div>
          <NameText className="hidden">Harley Welsby</NameText>
          <RoleText className="hidden typewriter">Full-Stack Software Developer</RoleText>
        </div>
        <HeadshotImage className="hidden" src="src/assets/harleyHeadshot.webp" loading="eager" />
      </div>
    </section>
  );
}

export default HomeSection;
