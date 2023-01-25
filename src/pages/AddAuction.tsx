import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonButton, IonButtons, IonMenuButton, IonSplitPane, IonTitle, IonToolbar, IonRow } from '@ionic/react';
import Menu from '../components/Menu';

const AddAuction: React.FC = () => {
    const [price, setPrice] = useState(0.0);
    const [auctionDescription, setAuctionDescription] = useState("");
    const [userId, setUserId] = useState(2);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [duration, setDuration] = useState({ hours: 0, minutes: 0 });
    const [productDescription, setProductDescription] = useState("");
    const [categoryId, setCategoryId] = useState(1);
    const [photo, setPhoto] = useState("");
    const [productName, setProductName] = useState("");
    const [auctionDate, setAuctionDate] = useState("2023-01-20T06:10:58.453+00:00");
    const handleSubmit = () => {
        // Prendre l'id user

        // Convert duration to minutes
        const durationInMinutes = duration.hours * 60 + duration.minutes;
        const data = {
            "prixminimumvente": price,
            "descriptionenchere": auctionDescription,
            "idutilisateur": userId,
            "nom": name,
            "prenom": surname,
            "duree": durationInMinutes,
            "description": productDescription,
            "idcategorieproduit": categoryId,
            "photo": photo,
            "nomproduit": productName,
            "dateheureenchere": auctionDate
        };
        console.log(data);
        // Code to handle form submission here
    }

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

                    <IonContent>
                        <IonItem>
                            <IonLabel position="floating">Prix minimum de vente</IonLabel>
                            <IonRow>
                                <IonInput type="number" value={price} onIonChange={e => setPrice(parseFloat(e.detail.value!))} />
                                <IonLabel position="floating">Ar</IonLabel>
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Description de l'enchère</IonLabel>
                            <IonInput value={auctionDescription} onIonChange={e => setAuctionDescription(e.detail.value!)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Nom</IonLabel>
                            <IonInput value={name} onIonChange={e => setName(e.detail.value!)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Prénom</IonLabel>
                            <IonInput value={surname} onIonChange={e => setSurname(e.detail.value!)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Durée</IonLabel>
                            <IonRow>
                                <IonLabel position="floating">Heure</IonLabel>
                                <IonInput type="number" placeholder="Heures" min={0} value={duration.hours} onIonChange={e => setDuration({ ...duration, hours: parseInt(e.detail.value!, 10) })} />
                                <IonLabel position="floating">Minutes</IonLabel>
                                <IonInput type="number" placeholder="Minutes" min={0} value={duration.minutes} onIonChange={e => setDuration({ ...duration, minutes: parseInt(e.detail.value!, 10) })} />
                            </IonRow>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="fixed">Description du produit</IonLabel>
                            <IonInput type="text" value={productDescription} onIonChange={e => setProductDescription(e.detail.value!)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="fixed">ID catégorie produit</IonLabel>
                            <IonInput type="number" value={categoryId} onIonChange={e => setCategoryId(parseInt(e.detail.value!, 10))} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Photo</IonLabel>
                            <IonInput value={photo} onIonChange={e => setPhoto(e.detail.value!)} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Nom du produit</IonLabel>
                            <IonInput value={productName} onIonChange={e => setProductName(e.detail.value!)} />
                        </IonItem>
                        <IonButton onClick={handleSubmit}>Valider</IonButton>
                    </IonContent>
                </IonContent>
            </div>
        </IonSplitPane>
    );
};

export default AddAuction;
