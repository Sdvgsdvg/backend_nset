import { Module } from '@nestjs/common';
import { UserService } from './user.service';

import { PrismaService } from '../../prisma.service';
import { TherapistService } from 'src/therapist/Therapist.service';

@Module({
  providers: [UserService,  PrismaService],
  imports: [],
})
export class HumansModule {}
