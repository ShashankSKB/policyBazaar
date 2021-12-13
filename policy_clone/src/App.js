import logo from './logo.svg';
import './App.css';
import { Plan } from './components/plansPage/plan';

function App() {
  return (
    <div className="App">
    <Plan imageSrc="https://static.pbcdn.in/twowheeler-cdn/InsurerImages/Bajaj_Allianz.gif" plantype="Regular Third Party Only" price="RS.  725" ></Plan>
    </div>
  );
}

export default App;
