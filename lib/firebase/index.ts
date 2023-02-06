import { config } from 'config/firebase';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
    Auth,
    AuthProvider,
    browserLocalPersistence,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    User,
} from 'firebase/auth';
import { doc, Firestore, getDoc, getFirestore } from 'firebase/firestore';

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let user: User;

const initFirebase = () => {
    if (app !== undefined) return;
    app = initializeApp(config);
    auth = getAuth();
    db = getFirestore(app);
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signIn(provider);
};

const signIn = async (provider: AuthProvider) => {
    try {
        await auth.setPersistence(browserLocalPersistence);
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log({ token, user });
        // IdP data available using getAdditionalUserInfo(result)
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ error, credential });
    }
};

const signOut = async () => {
    await auth.signOut();
};

const getUser = () => {
    return auth.currentUser;
};

const checkUserAuthorization = async (uid: string) => {
    try {
        const docSnap = await getDoc(doc(db, 'admin', 'authorizedUsers'));
        const user = docSnap.data() as { [uid: string]: boolean };
        return !!user[uid];
    } catch (error: any) {
        return false;
    }
};

export { app, auth, db, signInWithGoogle, initFirebase, getUser, user, signOut, checkUserAuthorization };
