import logo from './logo.svg';
import './App.css';
import { Plan } from './components/plansPage/plan';
import { PlanLayout } from './components/plansPage/planPageLayout';
import { Nav } from './components/plansPage/plansBar';
import { Top } from './components/plansPage/topComp';
import { WheelerBox } from './components/plansPage/wheelerDetails';
import { SideCard } from './components/plansPage/sidecard';
import { Proposal1 } from './components/proposols/proposal1';
function App() {
  return (
    <div className="App">
      <Proposal1></Proposal1>
    </div>
  );
}

export default App;
