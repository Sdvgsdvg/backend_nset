import { AuthService } from './auth.service';
import { LoginUserEntity } from '../entites/login.user.entity';
import { RegisterUserEntity } from '../entites/register.user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: LoginUserEntity): Promise<any>;
    signUp(body: RegisterUserEntity): Promise<{
        success: boolean;
        user: import("firebase-admin/lib/auth/user-record").UserRecord;
    }>;
    getHello(): string;
}
