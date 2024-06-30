import { Injectable } from '@nestjs/common';
import { firestore } from 'firebase-admin';

import {FirebaseAppRepository} from '../firebase/firebase-app.repository';


@Injectable()
export class TherapistService extends FirebaseAppRepository {
  

    
    
    

  async create(Therapist: string, data: any): Promise<string> {
    const docRef = await this.db.collection(Therapist).add(data);
    return docRef.id;
  }

  async read(Therapist: string, docId: string): Promise<any> {
    const doc = await this.db.collection(Therapist).doc(docId).get();
    return doc.data();
  }

  async update(Therapist: string, docId: string, data: any): Promise<string> {
    await this.db.collection(Therapist).doc(docId).update(data);
    return 'update is success actually';
  }

  async delete(Therapist: string, docId: string): Promise<string> {
    await this.db.collection(Therapist).doc(docId).delete();
    return 'therapist of course was removed';
  }

  async list(Therapist: string): Promise<any[]> {
    const querySnapshot = await this.db.collection(Therapist).get();
    const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return documents;
  }
}