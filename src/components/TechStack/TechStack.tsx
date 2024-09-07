import { CustomIcon } from '../../shared/utils/CustomIcon';
import {
  CypressPath,
  DotNetIconPath,
  MySqlPath,
  TypeScriptIconPath,
} from '../../shared/utils/Constants';
import { faAws, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { TechStackWrapper } from './TechStack.styles';
import TechStackItem from './TechStackItem';

function TechStack() {
  return (
    <TechStackWrapper className="hidden">
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

export default TechStack;
