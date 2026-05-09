import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EvolucoesService {
  constructor(private prisma: PrismaService) {}

  criar(dados: any) {
    return this.prisma.evolucao.create({ data: dados });
  }

  listar() {
    return this.prisma.evolucao.findMany();
  }

  atualizar(id: number, dados: any) {
    return this.prisma.evolucao.update({
      where: { id },
      data: dados,
    });
  }

  remover(id: number) {
    return this.prisma.evolucao.delete({
      where: { id },
    });
  }
}