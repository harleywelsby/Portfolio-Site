import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from 'styled-components';
import { CustomIcon } from './CustomIcon';
import { CypressPath, DotNetIconPath, MySqlPath, TypeScriptIconPath } from '../constants';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAws, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

function TechStack() {
  return (
    <TechStackWrapper>
      <TechStackItem icon={faReact} label="React" />
      <TechStackItem icon={CustomIcon('ts', TypeScriptIconPath)} label="TypeScript" />
      <TechStackItem icon={faNodeJs} label="Node.js" />
      <TechStackItem icon={CustomIcon('dotnet', DotNetIconPath)} label="Dotnet" />
      <TechStackItem icon={faAws} label="AWS" />
      <TechStackItem icon={CustomIcon('cypress', CypressPath)} label="Cypress" />
      <TechStackItem icon={CustomIcon('mysql', MySqlPath)} label="MySQL" />
    </TechStackWrapper>
  );
}

function TechStackItem({ icon, label }: TechStackItemProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <TechStackItemWrapper
      isHover={isHover}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <FontAwesomeIcon icon={icon} size="3x" />
      <TechStackItemLabel>{label}</TechStackItemLabel>
    </TechStackItemWrapper>
  );
}

type TechStackItemProps = {
  icon: IconDefinition;
  label: string;
};

const TechStackWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const TechStackItemWrapper = styled.div<{ isHover: boolean }>`
  margin: 0;
  ${(props) => props.isHover && 'transform: scale(1.2)'};
`;

const TechStackItemLabel = styled.p`
  margin-top: 0.5rem;
`;

export default TechStack;
