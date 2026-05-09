import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExerciciosService {

  constructor(
    private prisma: PrismaService,
  ) {}

  async criar(dados: any) {

    return this.prisma.exercicio.create({
      data: dados,
    });

  }

  async listar() {

    return this.prisma.exercicio.findMany();

  }

  async atualizar(
    id: number,
    dados: any,
  ) {

    return this.prisma.exercicio.update({

      where: { id },

      data: dados,

    });

  }

  async remover(id: number) {

    return this.prisma.exercicio.delete({

      where: { id },

    });

  }

}