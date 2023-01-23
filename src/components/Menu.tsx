import {
    IonButtons,
    IonContent,
    IonItem,
    IonLabel,
    IonMenu,
    IonMenuButton,
    IonNote,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { Message } from '../data/messages';
import './MessageListItem.css';



const Menu: React.FC = () => {
    return (
        <IonMenu contentId="main">
            <IonToolbar>

                <IonTitle>Menus</IonTitle>
            </IonToolbar>
            <IonContent className="ion-padding">
                Menu Content
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
