import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { ExerciciosModule } from './exercicios/exercicios.module';
import { SessoesModule } from './sessoes/sessoes.module';
import { EvolucoesModule } from './evolucoes/evolucoes.module';
import { AgendamentosModule } from './agendamentos/agendamentos.module';
import { NotificacoesModule } from './notificacoes/notificacoes.module';

@Module({
  imports: [PrismaModule, UsuariosModule, AuthModule, PacientesModule, ExerciciosModule, SessoesModule, EvolucoesModule, AgendamentosModule, NotificacoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
