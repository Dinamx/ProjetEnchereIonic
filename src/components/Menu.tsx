import {
    IonButtons,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonMenu,
    IonMenuButton,
    IonMenuToggle,
    IonNote,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { calendarOutline, peopleOutline, mapOutline, informationCircleOutline, person, help, logOut, logIn, personAdd, addCircleOutline } from 'ionicons/icons';
import { useLocation } from 'react-router-dom';
import { Message } from '../data/messages';
import './MessageListItem.css';
// Liste des liens a ajouter sur le menu
const routes = {
    appPages: [
        { title: 'Ajouter une nouvelle enchere', path: '/tabs/schedule', icon: addCircleOutline },
        { title: 'Mes encheres', path: '/tabs/speakers', icon: peopleOutline },
        { title: 'Recharger mon compte', path: '/tabs/map', icon: mapOutline },
        { title: 'Notification', path: '/tabs/about', icon: informationCircleOutline }
    ]
};
// Liste des trucs dans la variable page (Amin'izay mba tode precisena hoe inona ny inona)
interface Pages {
    title: string,
    path: string,
    icon: string,
    routerDirection?: string
}

const Menu: React.FC = () => {
    const location = useLocation();
    function renderlistItems(list: Pages[]) {
        return list
            // .filter(route => !!route.path)
            .map(p => (
                <IonMenuToggle key={p.title} auto-hide="false">
                    <IonItem detail={false} routerLink={p.path} routerDirection="none" className={location.pathname.startsWith(p.path) ? 'selected' : undefined}>
                        <IonIcon slot="start" icon={p.icon} />
                        <IonLabel>{p.title}</IonLabel>
                    </IonItem>
                </IonMenuToggle>
            ));
    }


    return (
        <IonMenu contentId="main">
            <IonToolbar>

                <IonTitle>Menus</IonTitle>
            </IonToolbar>
            <IonContent className="ion-padding">
                {renderlistItems(routes.appPages)}
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
