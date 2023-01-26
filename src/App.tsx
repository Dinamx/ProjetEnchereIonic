import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import ViewMessage from './pages/ViewMessage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddAuction from './pages/AddAuction';
import AuctionDetail from './pages/AuctionDetails';
import Notifications from './pages/Notifications';
import RechargeAccount from './pages/RechargeAccount';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          {/* <Redirect to="/login" /> */}
          <Redirect to="/login" />
        </Route>
        {/* Login */}
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        {/* Signup */}
        <Route path="/signup" exact={true}>
          <Signup />
        </Route>
        {/* List of All Auctions */}
        <Route path="/home" exact={true}>
          <Home />
        </Route>
        {/* List of an auction */}
        <Route path="/auction/:id" exact={true}>
        </Route>
        {/* Add an auction */}
        <Route path="/auction/new" exact={true}>
          <AddAuction />
        </Route>
        {/* Notifications */}
        <Route path="/notifications" exact={true}>
          <Notifications />
        </Route>
        {/* Recharge */}
        <Route path="/rechargeAccount" exact={true}>
          <RechargeAccount />
        </Route>

        {/* Auction Detail */}
        <Route path="/auctionDetail/:idAuction" component={AuctionDetail} exact={true} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
