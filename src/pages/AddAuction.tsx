import React, { useState } from 'react';
import { IonContent, IonInput, IonItem, IonLabel, IonButton } from '@ionic/react';

const AddAuction: React.FC = () => {
    const [price, setPrice] = useState("70000.0");
    const [auctionDescription, setAuctionDescription] = useState("pot de fleur a vendre");
    const [userId, setUserId] = useState(2);
    const [name, setName] = useState("Jane");
    const [surname, setSurname] = useState("Smith");
    const [duration, setDuration] = useState({ hours: 0, minutes: 0 });
    const [productDescription, setProductDescription] = useState("pot d echappement neuf");
    const [categoryId, setCategoryId] = useState(1);
    const [photo, setPhoto] = useState("");
    const [productName, setProductName] = useState("echappement");
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
        <IonContent>
            <IonItem>
                <IonLabel position="floating">Prix minimum de vente</IonLabel>
                <IonInput type="number" value={price} onIonChange={e => setPrice(e.detail.value!)} />
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
                <IonInput type="number" placeholder="Heures" value={duration.hours} onIonChange={e => setDuration({ ...duration, hours: parseInt(e.detail.value!, 10) })} />
                <IonInput type="number" placeholder="Minutes" value={duration.minutes} onIonChange={e => setDuration({ ...duration, minutes: parseInt(e.detail.value!, 10) })} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Description du produit</IonLabel>
                <IonInput type="text" value={productDescription} onIonChange={e => setProductDescription(e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">ID catégorie produit</IonLabel>
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
            <IonItem>
                <IonLabel position="floating">Date/heure de l'enchère</IonLabel>
                <IonInput value={auctionDate} onIonChange={e => setAuctionDate(e.detail.value!)} />
            </IonItem>
            <IonButton onClick={handleSubmit}>Valider</IonButton>
        </IonContent>
    );
};

export default AddAuction;
