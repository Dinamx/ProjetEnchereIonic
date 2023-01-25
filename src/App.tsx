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
import Auction from './components/Auction';
import AuctionDetail from './pages/AuctionDetails';
import Notification from './pages/Notifications';
import Notifications from './pages/Notifications';

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
        <Route path="/auction/:idAuction" component={AuctionDetail} exact={true} />
        {/* <Route path="/auction/:id" exact={true}>
          <AuctionDetail history={undefined} location={undefined} match={undefined} />
        </Route> */}
        {/* Add an auction */}
        <Route path="/auction/new" exact={true}>
          <AddAuction />
        </Route>
        {/* Notifications */}
        <Route path="/notifications" exact={true}>
          <Notifications />
        </Route>
        {/* One Auction */}
        <Route path="/message/:id">
          <ViewMessage />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
