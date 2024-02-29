import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import { LinkLogoLabel, LinkLogoWrapper } from '../styles/styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LinkLogoProps {
  icon: IconDefinition;
  label?: string;
  size: SizeProp;
}

function SkillLogo({ icon, label, size }: LinkLogoProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <LinkLogoWrapper onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <FontAwesomeIcon
        className={`skillLogo ${isHover && 'skillLogoHover'}`}
        icon={icon}
        size={size}
      />{' '}
      {isHover && <LinkLogoLabel className="skillLogoHover">{label}</LinkLogoLabel>}
    </LinkLogoWrapper>
  );
}

export default SkillLogo;
