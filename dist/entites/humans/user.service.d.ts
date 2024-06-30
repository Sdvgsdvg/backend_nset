import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.UserCreateInput): Promise<User>;
    updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User>;
    deleteUser(id: number): Promise<User>;
    findUserById(id: number): Promise<User | null>;
    findUserByEmail(email: string): Promise<User | null>;
    findUserByFirebaseUid(firebaseUid: string): Promise<User | null>;
    findUsers(): Promise<User[]>;
}
