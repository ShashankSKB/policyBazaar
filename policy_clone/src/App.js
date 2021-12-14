import logo from './logo.svg';
import './App.css';
import { Plan } from './components/plansPage/plan';
import { PlanLayout } from './components/plansPage/planPageLayout';
import { Nav } from './components/plansPage/plansBar';
function App() {
  return (
    <div className="App">
    {/* <Plan imageSrc="https://static.pbcdn.in/twowheeler-cdn/InsurerImages/Bajaj_Allianz.gif" plantype="Regular Third Party Only" price="RS.  725" ></Plan> */}
    {/* <PlanLayout></PlanLayout> */}
    <Nav></Nav>
    </div>
  );
}

export default App;
