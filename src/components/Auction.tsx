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
import Countdown from 'react-countdown-now';
import { useEffect, useState } from 'react';



const Auction: React.FC = () => {

    const [list, setList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getListeEncheres();
            setList(data);
        };
        fetchData();
    }, []);
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
                                        <h3>Description</h3>
                                        <h6 style={{ marginRight: "right" }}>
                                            {/* <Countdown date={new Date("YYYY-MM-DDTHH:mm:ss")} /> */}
                                            <Countdown date={new Date("2023-01-31T00:00:00")} />
                                        </h6>
                                    </IonLabel>

                                </IonItem>
                                <IonItem detail={false} >
                                    {/* <IonLabel> */}
                                    <IonButton onClick={() => { history.push('/auctionDetail/1') }}>SeeMore</IonButton>
                                    {/* <h3>About Blabla</h3> */}
                                    {/* </IonLabel> */}
                                </IonItem>
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default Auction;


