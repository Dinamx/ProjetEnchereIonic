import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSplitPane,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import Menu from '../components/Menu';
import Auction from '../components/Auction';


const Home: React.FC = () => {



  return (

    <IonSplitPane when="xl" contentId="main">
      {/* Menu and all Links */}
      <Menu></Menu>
      <div className="ion-page" id="main">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Main Page</IonTitle>
        </IonToolbar>
        <IonContent className="ion-padding">
          <Auction></Auction>
        </IonContent>
      </div>
    </IonSplitPane>


  );
};

export default Home;
