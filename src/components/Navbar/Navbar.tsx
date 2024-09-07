import { isMobile } from 'react-device-detect';
import {
  NavbarWrapper,
  NavbarContent,
  Logo,
  NavbarItemsWrapper,
  NavbarItem,
} from './Navbar.styles';

export const Navbar = () => {
  // TODO: Currently not in use
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
