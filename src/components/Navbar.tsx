import { isMobile } from 'react-device-detect';
import { styled } from 'styled-components';

export const Navbar = () => {
  return (
    <NavbarWrapper className="hidden">
      <NavbarContent>
        {!isMobile && <Logo src="icon.png" width={40} height={40} />}

        <NavbarItemsWrapper>
          {/* <NavbarItem>Projects</NavbarItem> */}
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
  ${!isMobile && 'display: flex;'}
  justify-content: space-between;
  position: fixed;

  top: 0;
  width: ${isMobile ? '80%' : '70%'};

  padding: 1rem 0 1rem 0;
`;

const NavbarItemsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: ${isMobile ? 'center' : 'right'};
  gap: 2rem;

  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavbarItem = styled.li`
  padding: 1vw;
  font-size: ${isMobile ? '4vw' : '1.5rem'};
`;

const Logo = styled.img`
  padding-left: 1rem;
  align-self: center;
`;
