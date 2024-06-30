import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { FirebaseApp } from 'firebase/app';
export declare class FirebaseAppProvider {
    private readonly configService;
    private firebaseAdmin;
    private firebaseApp;
    constructor(configService: ConfigService);
    initializeFirebaseAdmin(): Promise<admin.app.App>;
    initializeFirebaseApp(): Promise<FirebaseApp>;
}
export declare const firebaseAdminProvider: Provider;
export declare const firebaseAppProvider: Provider;
