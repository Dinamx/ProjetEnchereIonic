import { useEffect, useState } from 'react';
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
import { baseUrl } from '../data/webService';
import axios from 'axios';

interface detailSurenchere {
    id: String,
    idenchere: String,
    idutilisateur: String,
    montantOffre: String,
    dateheuremise: String
}

interface IdAuction
    extends RouteComponentProps<{
        idAuction: string;
    }> { }

const AuctionDetail: React.FC<IdAuction> = ({ match }) => {
    // Find The Auction Details

    const url = baseUrl();
    const [detailsSurenchere, setDetailsSurenchere] = useState<Array<detailSurenchere>>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url + '/surenchere/' + match.params.idAuction);
                setDetailsSurenchere(response.data);
                console.log(response.data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    // Find all person who participated to the Auction
    console.log(match.params.idAuction);
    // alert(match.params.idAuction);

    const [detailsEnchereDetailEnchere, setDetailsEnchereDetailEnchere] = useState<Array<any>>([]);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <img src="path/to/header/photo.jpg" alt="Header Photo" />
                    </IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>Element 1</IonItem>
                    <IonItem>Element 2</IonItem>
                    <IonItem>Element 3</IonItem>
                    {/* Add more elements as needed */}
                </IonList>

            </IonContent>
        </IonPage>
    )
};

export default AuctionDetail;
