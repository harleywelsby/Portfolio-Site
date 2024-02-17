import '../styles/globals.css';

function HomeSection() {
  return (
    <section className="hidden paddedSection verticalCenter">
      <div className="horizontal">
        <div>
          <h1 className="nameText webTitle">Harley Welsby</h1>
          <p className="roleText webSubTitle">Full-Stack Software Developer</p>
        </div>
        <img
          className="profilePhoto"
          src="src/assets/harleyHeadshot.webp"
          width={400}
          height={400}
          loading="eager"
        />
      </div>
    </section>
  );
}

export default HomeSection;
