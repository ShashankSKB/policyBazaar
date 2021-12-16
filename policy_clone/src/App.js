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
function App() {
  return (
    <div className="App">
      <PropLayout1></PropLayout1>
    </div>
  );
}

export default App;
