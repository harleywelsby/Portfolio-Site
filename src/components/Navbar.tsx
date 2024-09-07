import { isMobile } from 'react-device-detect';
import { styled } from 'styled-components';

export const Navbar = () => {
  return (
    <NavbarWrapper className="hidden">
      <NavbarContent>
        {!isMobile && <Logo src="icon.png" width={40} height={40} />}

        <NavbarItemsWrapper>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Research</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </NavbarItemsWrapper>
      </NavbarContent>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;

  ${!isMobile && 'justify-content: space-between;'}

  position: fixed;
  top: 0;
  width: 70%;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const NavbarItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 2rem;
`;

const NavbarItem = styled.div`
  padding: 1rem;
  font-size: ${isMobile ? '8pt' : '18pt'};
`;

const Logo = styled.img`
  padding-left: 1rem;
  align-self: center;
`;
