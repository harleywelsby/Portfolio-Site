import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const NavbarContent = styled.div`
  ${!isMobile && 'display: flex;'}
  justify-content: space-between;
  position: fixed;

  top: 0;
  width: ${isMobile ? '80%' : '70%'};

  padding: 1rem 0 1rem 0;
`;

export const NavbarItemsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: ${isMobile ? 'center' : 'right'};
  gap: 2rem;

  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const NavbarItem = styled.li`
  padding: 1vw;
  font-size: ${isMobile ? '4vw' : '1.5rem'};
`;

export const Logo = styled.img`
  padding-left: 1rem;
  align-self: center;
`;
