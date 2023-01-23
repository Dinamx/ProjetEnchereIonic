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
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import Menu from '../components/Menu';
import Auction from '../components/Auction';


const Home: React.FC = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

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

    // <IonPage id="home-page">
    //   <IonHeader>
    //     <IonToolbar>
    //       <IonButtons slot="start">
    //         <IonMenuButton></IonMenuButton>
    //       </IonButtons>
    //       <IonTitle>Bienvenue</IonTitle>

    //     </IonToolbar>
    //   </IonHeader>
    //   <IonContent fullscreen>
    //     {/* <IonRefresher slot="fixed" onIonRefresh={refresh}>
    //       <IonRefresherContent></IonRefresherContent>
    //     </IonRefresher> */}

    //     <IonHeader collapse="condense">
    //       <IonToolbar>
    //         <IonTitle size="large">
    //           Inbox
    //         </IonTitle>
    //       </IonToolbar>
    //     </IonHeader>

    //     <IonList>
    //       {messages.map(m => <MessageListItem key={m.id} message={m} />)}
    //     </IonList>
    //   </IonContent>


    //   <IonMenu side="start" contentId="home-page">
    //     <IonHeader>
    //       <IonToolbar>
    //         <IonTitle>Menu</IonTitle>
    //       </IonToolbar>
    //     </IonHeader>
    //     <IonContent>
    //       {/* your menu items here */}
    //     </IonContent>
    //   </IonMenu>


    // </IonPage>
  );
};

export default Home;
