import styled from "styled-components";
import { zIndex } from "../shared/styles/styleConstants";
import { SHOW_WORK_IN_PROGRESS } from "../config";

function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavbarWrapper>
      <TitleWrapper>
        <Title>Harley Welsby</Title>
      </TitleWrapper>
      {SHOW_WORK_IN_PROGRESS && (
        <NavbarList className="navbar-list">
          <li>
            <NavbarItem onClick={() => scrollToSection("Skills")}>
              Skills
            </NavbarItem>
          </li>
          <li>
            <NavbarItem onClick={() => scrollToSection("Experience")}>
              Experience
            </NavbarItem>
          </li>
          <li>
            <NavbarItem onClick={() => scrollToSection("Research")}>
              Research
            </NavbarItem>
          </li>
        </NavbarList>
      )}
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;

  z-index: ${zIndex.AlwaysAtFront};
  background-color: var(--deep-black);

  min-width: 100%;
  padding-bottom: 1.5rem;

  @media (min-width: 900px) {
    padding-top: 1rem;
    margin-bottom: 3rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 90%;
  padding-bottom: 0.5rem;
`;

const Title = styled.h1`
  color: var(--title-orange);
  font-size: clamp(2rem, 3vw + 1rem, 3rem);

  padding: 1rem 0rem 0.5rem 0.2rem;
  margin: 0;

  @media (min-width: 35em) {
    padding: 0 1rem 1rem 1rem;
  }
`;

const NavbarList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  gap: 2rem;
  padding: 0;
  margin: 0;
`;

const NavbarItem = styled.button`
  all: unset;
  cursor: pointer;
  color: var(--soft-white);
  text-decoration: none;
  padding: 0.3rem;

  font-weight: 500;
  font-size: clamp(1rem, 2vw + 0.7rem, 1.5rem);

  &:hover {
    color: var(--title-orange);
  }
`;

export default Navbar;
