import { LoginUserEntity } from '../entites/login.user.entity';
import { FirebaseAppRepository } from '../firebase/firebase-app.repository';
import { PrismaService } from '../prisma.service';
import { RegisterUserEntity } from '../entites/register.user.entity';
export declare class AuthService {
    private readonly firebaseAppRepository;
    private readonly prisma;
    idToken: string;
    constructor(firebaseAppRepository: FirebaseAppRepository, prisma: PrismaService);
    getHello(): string;
    login(userLoginEntity: LoginUserEntity): Promise<any>;
    signUp(user: RegisterUserEntity): Promise<{
        success: boolean;
        user: import("firebase-admin/lib/auth/user-record").UserRecord;
    }>;
    private createFirebaseUser;
    private _signInWithPassword;
    signOut(): Promise<string>;
}
