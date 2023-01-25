import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonRow,
    IonSplitPane,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter
} from '@ionic/react';
import Menu from '../components/Menu';
import Auction from '../components/Auction';


const RechargeAccount: React.FC = () => {
    const handleSubmit = () => {

    }

    const [messages, setMessages] = useState<Message[]>([]);
    const [price, setPrice] = useState(0.0);
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
                    <IonItem>
                        <IonLabel position="floating">Recharger mon compte de </IonLabel>
                        <IonRow>
                            <IonInput type="number" value={price} onIonChange={e => setPrice(parseFloat(e.detail.value!))} />
                            <IonLabel position="floating">Ar</IonLabel>
                        </IonRow>
                    </IonItem>
                    <IonItem>
                        <IonButton onClick={handleSubmit}>Valider</IonButton>
                    </IonItem>
                </IonContent>
            </div>
        </IonSplitPane>
    );
};

export default RechargeAccount;
