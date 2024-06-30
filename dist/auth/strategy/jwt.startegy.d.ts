import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
declare const JwtStartegy_base: new (...args: any[]) => Strategy;
export declare class JwtStartegy extends JwtStartegy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(payload: any): Promise<{
        userId: any;
        email: any;
    }>;
}
export {};
