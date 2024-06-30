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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const firebase_app_repository_1 = require("../firebase/firebase-app.repository");
const prisma_service_1 = require("../prisma.service");
const auth_1 = require("firebase/auth");
let AuthService = class AuthService {
    constructor(firebaseAppRepository, prisma) {
        this.firebaseAppRepository = firebaseAppRepository;
        this.prisma = prisma;
    }
    getHello() {
        return 'Hello World!';
    }
    async login(userLoginEntity) {
        console.log('userLoginEntity:', userLoginEntity.idToken);
        try {
            const decodedToken = await this.firebaseAppRepository.auth.verifyIdToken(userLoginEntity.idToken);
            const uid = decodedToken.uid;
            console.log('decodedToken:', decodedToken);
            let user;
            if (userLoginEntity.role === 'therapist') {
                user = await this.prisma.therapist.findUnique({
                    where: { firebase_uid: uid },
                });
            }
            else {
                user = await this.prisma.user.findUnique({
                    where: { firebase_uid: uid },
                });
            }
            if (!user) {
                return { error: 'User not found' };
            }
            return user;
        }
        catch (error) {
            console.error('Error during login:', error);
            throw new Error('Failed to login');
        }
    }
    async signUp(user) {
        let userRecord;
        try {
            userRecord = await this.createFirebaseUser(user);
        }
        catch (error) {
            console.error('Error during createFirebaseUser:', error);
            throw new Error('Failed to createFirebaseUser');
        }
        const uid = userRecord.uid;
        const role = user.role;
        try {
            if (role === 'therapist') {
                await this.prisma.therapist.create({
                    data: { ...user.data, firebase_uid: uid },
                });
            }
            else {
                await this.prisma.user.create({
                    data: { ...user.data, firebase_uid: uid },
                });
            }
            return { success: true, user: userRecord };
        }
        catch (error) {
            console.error('Error during database integration:', error);
            throw new Error('Failed to sign up');
        }
    }
    async createFirebaseUser(user) {
        let userRecord;
        try {
            userRecord = await this.firebaseAppRepository.auth.createUser({
                email: user.data.email,
                displayName: user.data.first_name +
                    '-' +
                    user.data.last_name +
                    '-' +
                    Math.random(),
                phoneNumber: user.data.phone_number,
                password: user.password,
                photoURL: user.data.photoURL,
            });
        }
        catch (error) {
            console.error('Error during createFirebaseUser:', error);
            throw new Error('Failed to createFirebaseUser');
        }
        try {
            this.idToken = await this._signInWithPassword(user.data.email, user.password);
            return userRecord;
        }
        catch (error) {
            console.error('Error during signInWithPassword:', error);
            throw new Error('Failed to signInWithPassword');
        }
    }
    async _signInWithPassword(email, password) {
        const userCredential = await (0, auth_1.signInWithEmailAndPassword)(this.firebaseAppRepository.authInstance, email, password);
        const idToken = await userCredential.user.getIdToken();
        console.debug('idToken = ' + idToken);
        return idToken;
    }
    async signOut() {
        return 'signOut';
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [firebase_app_repository_1.FirebaseAppRepository,
        prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map