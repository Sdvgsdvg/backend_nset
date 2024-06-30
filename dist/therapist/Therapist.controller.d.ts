import { TherapistService } from './Therapist.service';
export declare class TherapistsController {
    private readonly firestoreService;
    constructor(firestoreService: TherapistService);
    createTherapist(data: any): Promise<string>;
    getTherapist(id: string): Promise<any>;
    updateTherapist(id: string, data: any): Promise<string>;
    deleteTherapist(id: string): Promise<string>;
}
