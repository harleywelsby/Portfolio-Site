import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { TechStackItemWrapper, TechStackItemLabel } from './TechStack.styles';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useMediaQuery } from 'react-responsive';

function TechStackItem({ icon, label }: TechStackItemProps) {
  const isMobile = useMediaQuery({ query: 'max-width: 35em' });
  const [isHover, setIsHover] = useState<boolean>(false);

  const iconSize = isMobile ? '2x' : '3x';

  return (
    <TechStackItemWrapper
      $isHover={isHover && !isMobile}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <FontAwesomeIcon icon={icon} size={iconSize} />
      <TechStackItemLabel>{label}</TechStackItemLabel>
    </TechStackItemWrapper>
  );
}

type TechStackItemProps = {
  icon: IconDefinition;
  label: string;
};

export default TechStackItem;
