import { useState } from 'react';
import { Message } from '../data/messages';
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenuButton,
    IonPage,
    IonSplitPane,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import Menu from '../components/Menu';
import { RouteComponentProps } from 'react-router-dom';

interface IdAuction
    extends RouteComponentProps<{
        idAuction: string;
    }> { }

const AuctionDetail: React.FC<IdAuction> = ({ match }) => {
    // Find The Auction Details

    // Find all person who participated to the Auction
    console.log(match.params.idAuction);
    const [messages, setMessages] = useState<Message[]>([]);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <img src="path/to/header/photo.jpg" alt="Header Photo" />
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>Element 1</IonItem>
                    <IonItem>Element 2</IonItem>
                    <IonItem>Element 3</IonItem>
                    {/* Add more elements as needed */}
                </IonList>
                <IonButtons slot="start">
                    <IonBackButton text="retour" />
                </IonButtons>
            </IonContent>
        </IonPage>
    )
};

export default AuctionDetail;
