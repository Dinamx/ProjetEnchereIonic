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


const AddAuction: React.FC = () => {

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
                    <IonTitle>Ajouter une enchere</IonTitle>
                </IonToolbar>
                <IonContent className="ion-padding">
                    <h3>Ajout d'enchère</h3>
                </IonContent>
            </div>
        </IonSplitPane>

    );
};

export default AddAuction;
