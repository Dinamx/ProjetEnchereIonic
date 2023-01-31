import {
    IonAvatar,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCol,
    IonGrid,
    IonItem,
    IonLabel,
    IonList,
    IonRow,
} from '@ionic/react';
import { useHistory } from 'react-router';



const Auction: React.FC = () => {
    const history = useHistory();
    return (
        <IonGrid fixed>
            <IonRow>
                <IonCol size="12" size-md="6" >
                    <IonCard className="speaker-card">
                        <IonCardHeader>
                            <IonItem button detail={false} lines="none" className="speaker-item" >
                                <IonAvatar slot="start">
                                    <img src="yo.jpg" alt="Speaker profile pic" />
                                </IonAvatar>
                                <IonLabel>
                                    <h2>Nom produit</h2>
                                    <p>Prix de base</p>
                                </IonLabel>
                            </IonItem>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonList lines="none">
                                <IonItem detail={false} >
                                    <IonLabel>
                                        <h3>Ma surenchere ; </h3>
                                    </IonLabel>
                                </IonItem>
                                {/* <IonItem detail={false} >
                                    <IonButton onClick={() => { history.push('/auctionDetail/1') }}>SeeMore</IonButton>
                                </IonItem> */}
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default Auction;
