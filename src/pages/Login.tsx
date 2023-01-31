import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
    IonButton,
    IonCard,
    IonCardContent,
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
import './Login.css';

const Login: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const history = useHistory();


    const login = async (e: React.FormEvent) => {
        history.push('/home', { direction: 'none' });
        // setLocalStorage('id');
        // e.preventDefault();
        setFormSubmitted(true);
        if (!username) {
            setUsernameError(true);
        }
        if (!password) {
            setPasswordError(true);
        }
        if (username && password) {
            //   await setIsLoggedIn(true);
            //   await setUsernameAction(username);
            // history.push('/tabs/schedule', { direction: 'none' });
        }

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
                    <IonTitle>Bienvenue</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">
                            Make your best deals
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCard>
                    {/* Header si besoin */}
                    {/* <IonCardHeader> */}
                    {/* <IonCardTitle>Log in</IonCardTitle> */}
                    {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                    {/* </IonCardHeader> */}

                    <IonCardContent>
                        {/* Here's a small text description for the card content. Nothing more, nothing less. */}



                        {/* <div className="login-logo">
                    <img src="assets/img/appicon.svg" alt="Ionic logo" />
                </div> */}

                        <form noValidate onSubmit={login}>
                            <IonList>
                                <IonItem>
                                    <IonLabel position="stacked" color="primary">Username</IonLabel>
                                    <IonInput name="username" type="text" value={username} spellCheck={false} autocapitalize="off" onIonChange={e => setUsername(e.detail.value!)}
                                        required>
                                    </IonInput>
                                </IonItem>

                                {formSubmitted && usernameError && <IonText color="danger">
                                    <p className="ion-padding-start">
                                        Username is required
                                    </p>
                                </IonText>}

                                <IonItem>
                                    <IonLabel position="stacked" color="primary">Password</IonLabel>
                                    <IonInput name="password" type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}>
                                    </IonInput>
                                </IonItem>

                                {formSubmitted && passwordError && <IonText color="danger">
                                    <p className="ion-padding-start">
                                        Password is required
                                    </p>
                                </IonText>}
                            </IonList>

                            <IonRow>
                                <IonCol>
                                    <IonButton type="submit" expand="block">Login</IonButton>
                                </IonCol>

                            </IonRow>

                        </form>
                        <IonRow>
                            <IonCol>
                                <IonButton routerLink="/signup" color="light" expand="block">Signup</IonButton>
                            </IonCol>
                        </IonRow>

                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default Login;
