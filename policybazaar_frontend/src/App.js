import { Route, Switch } from 'react-router-dom';
import Numbike from './components/Number BikePage/Numbike';
import PolicySteps from './components/Policy detail page/PolicySteps';
import Twheelmake from "./components/vehicle details/Twheelmake"
import Bikenotodetails from './Routes/Bike no to Bike details/BikeNotoDetails';
import { PlanLayout } from './components/plansPage/planPageLayout';
import { PropLayout1 } from './components/proposols/step1/prop1layout';
import { PropLayout2 } from './components/proposols/step2/prop2layout';
import { PropLayout3 } from './components/proposols/step3/prop3layout';
import { Home } from './components/Home Page/Home';
import { Login } from './components/Login page/Logni';
import { Check } from './components/modal';

import { PaymentDetails } from "./components/PaymentDetails/PaymentDetails";
import { Credit } from "./components/CreditCard/Credit";
import { Paydone } from "./components/Lastpay/Paydone";
function App() {
  return (
    <>

  <Switch>
  
  <Route path="/" exact>
  <Home />
  </Route>

  <Route path="/login" exact>
  <Login />
  </Route>

  <Route path="/bikeno" exact>
  <Bikenotodetails />
  <Numbike />
  </Route>
  <Route path="/bikedetail" exact>
  <Bikenotodetails />
  <Twheelmake />
  </Route>
  <Route path="/policystep" exact>
  <PolicySteps />
  </Route>
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


      <Route path="/paydetails">
          <PaymentDetails />
        </Route>
        <Route path="/credit">
          <Credit />
        </Route>
        <Route path="/payment">
          <Paydone />
        </Route>
  </Switch>
  </>
  );
}

export default App;
