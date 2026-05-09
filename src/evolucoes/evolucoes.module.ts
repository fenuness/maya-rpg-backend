import { Module } from '@nestjs/common';
import { EvolucoesController } from './evolucoes.controller';
import { EvolucoesService } from './evolucoes.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EvolucoesController],
  providers: [EvolucoesService],
})
export class EvolucoesModule {}
