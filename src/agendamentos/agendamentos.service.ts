import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AgendamentosService {
  constructor(private prisma: PrismaService) {}

  criar(dados: any) {
    return this.prisma.agendamento.create({ data: dados });
  }

  listar() {
    return this.prisma.agendamento.findMany();
  }

  atualizar(id: number, dados: any) {
    return this.prisma.agendamento.update({
      where: { id },
      data: dados,
    });
  }

  remover(id: number) {
    return this.prisma.agendamento.delete({
      where: { id },
    });
  }
}