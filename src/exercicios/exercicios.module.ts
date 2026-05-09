import { Module } from '@nestjs/common';

import { ExerciciosController } from './exercicios.controller';
import { ExerciciosService } from './exercicios.service';

import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],

  controllers: [ExerciciosController],

  providers: [ExerciciosService],
})
export class ExerciciosModule {}