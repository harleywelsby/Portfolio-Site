import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { TechStackItemWrapper, TechStackItemLabel } from './TechStack.styles';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

function TechStackItem({ icon, label }: TechStackItemProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <TechStackItemWrapper
      $isHover={isHover}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <FontAwesomeIcon icon={icon} size={isMobile ? '2x' : '3x'} />
      <TechStackItemLabel>{label}</TechStackItemLabel>
    </TechStackItemWrapper>
  );
}

type TechStackItemProps = {
  icon: IconDefinition;
  label: string;
};

export default TechStackItem;
