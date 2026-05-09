import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotificacoesService {
  constructor(private prisma: PrismaService) {}

  criar(dados: any) {
    return this.prisma.notificacao.create({ data: dados });
  }

  listar() {
    return this.prisma.notificacao.findMany();
  }

  atualizar(id: number, dados: any) {
    return this.prisma.notificacao.update({
      where: { id },
      data: dados,
    });
  }

  remover(id: number) {
    return this.prisma.notificacao.delete({
      where: { id },
    });
  }
}