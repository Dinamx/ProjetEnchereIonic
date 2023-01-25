import { useState } from 'react';
import { Message } from '../data/messages';
import {
    IonButtons,
    IonContent,
    IonMenuButton,
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
    console.log(match.params.idAuction);
    const [messages, setMessages] = useState<Message[]>([]);
    return (

        <IonSplitPane when="xl" contentId="main">
            {/* Menu and all Links */}
            <Menu></Menu>
            <div className="ion-page" id="main">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Voici l'enchere numero </IonTitle>
                </IonToolbar>
                <IonContent className="ion-padding">
                    <h3></h3>
                </IonContent>
            </div>
        </IonSplitPane>
    )
};

export default AuctionDetail;
