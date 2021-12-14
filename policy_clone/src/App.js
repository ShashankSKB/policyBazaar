import logo from './logo.svg';
import './App.css';
import { Plan } from './components/plansPage/plan';
import { PlanLayout } from './components/plansPage/planPageLayout';
import { Nav } from './components/plansPage/plansBar';
import { Temp } from './components/plansPage/samp';
function App() {
  return (
    <div className="App">
   <PlanLayout></PlanLayout>
    </div>
  );
}

export default App;
