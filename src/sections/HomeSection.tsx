import '../styles/globals.css';

function HomeSection() {
  return (
    <section className="hidden paddedSection verticalCenter">
      <div className="horizontal">
        <img
          className="profilePhoto"
          src="src/assets/harleyProfile.jpg"
          width={474}
          height={600}
          loading="eager"
        />
        <div>
          <h1 className="nameText webTitle">Harley Welsby</h1>
          <p className="roleText webSubTitle">Full-Stack Software Developer</p>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
