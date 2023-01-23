import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
    IonButton,
    IonCol,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonRow,
    IonText,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter
} from '@ionic/react';
import { useHistory } from 'react-router';

const Signup: React.FC = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();


    const signup = async (e: React.FormEvent) => {

        // Ketreana try catch kely au cas ou misy bleme ny exception
        history.push('/login', { direction: 'none' });
    };

    useIonViewWillEnter(() => {
        const msgs = getMessages();
        // setMessages(msgs);
    });

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    return (
        <IonPage id="home-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sign up </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">
                            Sign Up to make your best deals
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>


                {/* <div className="login-logo">
                    <img src="assets/img/appicon.svg" alt="Ionic logo" />
                </div> */}

                <form noValidate onSubmit={signup}>
                    <IonList>
                        <IonItem>
                            <IonLabel position="stacked" color="primary">Name</IonLabel>
                            <IonInput name="Name" type="text" value={name} spellCheck={false} autocapitalize="off" onIonChange={e => setName(e.detail.value!)}
                                required>
                            </IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked" color="primary">Last Name (Username)</IonLabel>
                            <IonInput name="LastName" type="password" value={lastName} onIonChange={e => setLastName(e.detail.value!)}>
                            </IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked" color="primary">Email</IonLabel>
                            <IonInput name="Email" type="text" value={email} spellCheck={false} autocapitalize="off" onIonChange={e => setEmail(e.detail.value!)}
                                required>
                            </IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked" color="primary">Password</IonLabel>
                            <IonInput name="Password" type="text" value={password} spellCheck={false} autocapitalize="off" onIonChange={e => setPassword(e.detail.value!)}
                                required>
                            </IonInput>
                        </IonItem>
                    </IonList>

                    <IonRow>
                        <IonCol>
                            <IonButton type="submit" expand="block">Signup</IonButton>
                        </IonCol>
                    </IonRow>
                </form>
                <IonRow>
                    <IonCol>
                        <IonButton routerLink="/login" color="light" expand="block">Login</IonButton>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
};

export default Signup;
