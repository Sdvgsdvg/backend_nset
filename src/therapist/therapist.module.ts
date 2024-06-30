import { Module } from '@nestjs/common';
import { FirebaseAppModule } from '../firebase/firebase-app.module';


import { TherapistsController } from './Therapist.controller';
import { TherapistService } from './Therapist.service';
@Module({
  imports: [FirebaseAppModule],
  
  controllers: [TherapistsController],
  providers: [TherapistService],
})
export class TherapistModule {}