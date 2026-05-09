import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PacientesService {

  constructor(
    private prisma: PrismaService,
  ) {}

  async criar(dados: any) {

    return this.prisma.paciente.create({
      data: dados,
    });

  }

  async listar() {

    return this.prisma.paciente.findMany();

  }

  async atualizar(
    id: number,
    dados: any,
  ) {

    return this.prisma.paciente.update({

      where: { id },

      data: dados,

    });

  }

  async remover(id: number) {

    return this.prisma.paciente.delete({

      where: { id },

    });

  }

}