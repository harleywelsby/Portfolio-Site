import { styled } from 'styled-components';

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <HomeTitleWrapper>
        <Logo src="icon.png" width={30} height={30} />
        <NavbarItem>Harley Welsby</NavbarItem>
      </HomeTitleWrapper>

      <NavbarItemsWrapper>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Projects</NavbarItem>
        <NavbarItem>Research</NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </NavbarItemsWrapper>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;

  align-content: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  width: 100%;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  background-color: #000;
`;

const HomeTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 3rem;
  color: var(--orange);
`;

const NavbarItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 2rem;
  padding-right: 3rem;
`;

const NavbarItem = styled.div`
  padding: 1rem;
  font-size: 18pt;
`;

const Logo = styled.img`
  padding-top: 1rem;
`;
