import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SessoesService {
  constructor(private prisma: PrismaService) {}

  criar(dados: any) {
    return this.prisma.sessao.create({ data: dados });
  }

  listar() {
    return this.prisma.sessao.findMany();
  }

  atualizar(id: number, dados: any) {
    return this.prisma.sessao.update({
      where: { id },
      data: dados,
    });
  }

  remover(id: number) {
    return this.prisma.sessao.delete({
      where: { id },
    });
  }
}