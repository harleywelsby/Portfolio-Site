import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import { LinkLogoLabel, LinkLogoWrapper } from '../styles/styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LinkLogoProps {
  iconName: IconDefinition;
  link: string;
  label?: string;
  newTab?: boolean;
  size: SizeProp;
}

function LinkLogo({ iconName, link, label, newTab, size }: LinkLogoProps) {
  // Custom hover check. We don't use :hover in CSS for this
  // as doing it custom can make both the icon and label change
  // colour at the same time.
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <a href={link} target={newTab ? '_blank' : ''} rel="noreferrer">
      <LinkLogoWrapper onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <FontAwesomeIcon className={`${isHover && 'linkLogoHover'}`} icon={iconName} size={size} />{' '}
        <LinkLogoLabel className={`${isHover && 'linkLogoHover'}`}>{label}</LinkLogoLabel>
      </LinkLogoWrapper>
    </a>
  );
}

export default LinkLogo;
