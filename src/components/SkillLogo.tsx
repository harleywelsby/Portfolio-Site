import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import { SkillLogoLabel, SkillLogoWrapper } from '../styles/styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LinkLogoProps {
  icon: IconDefinition;
  label?: string;
  size: SizeProp;
  $colour?: string;
}

function SkillLogo({ icon, label, size, $colour }: LinkLogoProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <SkillLogoWrapper onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <FontAwesomeIcon
        className={`skillLogo ${isHover && 'skillLogoHover'}`}
        icon={icon}
        size={size}
      />
      <SkillLogoLabel className="skillLogoHover">{label}</SkillLogoLabel>
    </SkillLogoWrapper>
  );
}

export default SkillLogo;
