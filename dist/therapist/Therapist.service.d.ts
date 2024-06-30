import { FirebaseAppRepository } from '../firebase/firebase-app.repository';
export declare class TherapistService extends FirebaseAppRepository {
    create(Therapist: string, data: any): Promise<string>;
    read(Therapist: string, docId: string): Promise<any>;
    update(Therapist: string, docId: string, data: any): Promise<string>;
    delete(Therapist: string, docId: string): Promise<string>;
    list(Therapist: string): Promise<any[]>;
}
