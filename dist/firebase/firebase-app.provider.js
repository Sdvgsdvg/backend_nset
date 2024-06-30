"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseAppProvider = exports.firebaseAdminProvider = exports.FirebaseAppProvider = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const admin = require("firebase-admin");
const app_1 = require("firebase/app");
let FirebaseAppProvider = class FirebaseAppProvider {
    constructor(configService) {
        this.configService = configService;
    }
    async initializeFirebaseAdmin() {
        if (!this.firebaseAdmin) {
            const firebaseConfig = {
                type: this.configService.get('TYPE'),
                project_id: this.configService.get('PROJECT_ID'),
                private_key_id: this.configService.get('PRIVATE_KEY_ID'),
                private_key: this.configService.get('PRIVATE_KEY'),
                client_email: this.configService.get('CLIENT_EMAIL'),
                client_id: this.configService.get('CLIENT_ID'),
                auth_uri: this.configService.get('AUTH_URI'),
                token_uri: this.configService.get('TOKEN_URI'),
                auth_provider_x509_cert_url: this.configService.get('AUTH_CERT_URL'),
                client_x509_cert_url: this.configService.get('CLIENT_CERT_URL'),
                universe_domain: this.configService.get('UNIVERSAL_DOMAIN'),
            };
            try {
                this.firebaseAdmin = admin.initializeApp({
                    credential: admin.credential.cert(firebaseConfig),
                    databaseURL: this.configService.get('DATABASE_URL'),
                    storageBucket: this.configService.get('STORAGE_BUCKET'),
                });
            }
            catch (error) {
                console.error('Error initializing Firebase Admin:', error);
                throw new Error('Failed to initialize Firebase admin app');
            }
        }
        return this.firebaseAdmin;
    }
    async initializeFirebaseApp() {
        if (!this.firebaseApp) {
            const firebaseConfig = {
                apiKey: this.configService.get('API_KEY'),
                authDomain: this.configService.get('AUTH_DOMAIN'),
                databaseURL: this.configService.get('DATABASE_URL'),
                projectId: this.configService.get('PROJECT_ID'),
                storageBucket: this.configService.get('STORAGE_BUCKET'),
                messagingSenderId: this.configService.get('SENDER_ID'),
                appId: this.configService.get('APP_ID'),
                measurementId: this.configService.get('MEASUREMENT_ID'),
            };
            try {
                this.firebaseApp = (0, app_1.initializeApp)(firebaseConfig, 'firebaseApp');
            }
            catch (error) {
                console.error('Error initializing Firebase app:', error);
                throw new Error('Failed to initialize Firebase app');
            }
        }
        return this.firebaseApp;
    }
};
exports.FirebaseAppProvider = FirebaseAppProvider;
exports.FirebaseAppProvider = FirebaseAppProvider = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.ConfigService)),
    __metadata("design:paramtypes", [config_1.ConfigService])
], FirebaseAppProvider);
exports.firebaseAdminProvider = {
    provide: 'FIREBASE_ADMIN',
    useFactory: async (firebaseAppProvider) => await firebaseAppProvider.initializeFirebaseAdmin(),
    inject: [FirebaseAppProvider],
};
exports.firebaseAppProvider = {
    provide: 'FIREBASE_APP',
    useFactory: async (firebaseAppProvider) => await firebaseAppProvider.initializeFirebaseApp(),
    inject: [FirebaseAppProvider],
};
//# sourceMappingURL=firebase-app.provider.js.map