import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

export const LinkLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${isMobile ? '1rem' : '1rem 2rem'};
  color: var(--black);
`;

export const LinkLogoLabel = styled.p`
  margin: 0;
  font-size: 1.5rem;
`;
