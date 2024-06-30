import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TherapistService } from './Therapist.service';


@Controller('Therapists')
export class TherapistsController {
  constructor(private readonly firestoreService: TherapistService) {}

  @Post()
  async createTherapist(@Body() data: any) {
    return this.firestoreService.create('Therapists', data);
  }

  @Get(':id')
  async getTherapist(@Param('id') id: string) {
    return this.firestoreService.read('Therapists', id);
  }

  @Put(':id')
  async updateTherapist(@Param('id') id: string, @Body() data: any) {
    return this.firestoreService.update('Therapists', id, data);
  }

  @Delete(':id')
  async deleteTherapist(@Param('id') id: string) {
    return this.firestoreService.delete('Therapists', id);
  }
}
