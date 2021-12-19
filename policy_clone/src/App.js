import logo from './logo.svg';
import './App.css';
import { Plan } from './components/plansPage/plan';
import { PlanLayout } from './components/plansPage/planPageLayout';
import { Nav } from './components/plansPage/plansBar';
import { Top } from './components/plansPage/topComp';
import { WheelerBox } from './components/plansPage/wheelerDetails';
import { SideCard } from './components/plansPage/sidecard';
import { Proposal1 } from './components/proposols/step1/proposal1';
import { Prop1side } from './components/proposols/step1/prop1Side';
import { PropLayout1 } from './components/proposols/step1/prop1layout';
import {Switch ,Route ,Link} from 'react-router-dom';
import { Proposal2 } from './components/proposols/step2/prop2body';
import { PropLayout2 } from './components/proposols/step2/prop2layout';
import { Proposal3 } from './components/proposols/step3/prop3body';
import { PropLayout3 } from './components/proposols/step3/prop3layout';
function App() {
  return (
    <div className="App">
      <Switch >
      <Route path="/planlayout" exact>
        <PlanLayout/>
      </Route>

      <Route path="/step1" exact>
        <PropLayout1/>
      </Route>

      <Route path="/step2" exact>
      <PropLayout2/>
      </Route>

      <Route path="/step3" exact>
    
      <PropLayout3/>
      </Route>
      </Switch>

      
    </div>
  );
}

export default App;
