import { app, auth } from 'firebase-admin';
import { Auth as AuthInstance } from 'firebase/auth';
import { FirebaseApp } from 'firebase/app';
export declare class FirebaseAppRepository {
    private readonly firebaseAdmin;
    private readonly firebaseApp;
    readonly db: FirebaseFirestore.Firestore;
    readonly collection?: FirebaseFirestore.CollectionReference;
    readonly authInstance: AuthInstance;
    readonly auth: auth.Auth;
    constructor(firebaseAdmin: app.App, firebaseApp: FirebaseApp);
}
