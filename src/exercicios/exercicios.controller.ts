import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ExerciciosService } from './exercicios.service';

@Controller('exercicios')
export class ExerciciosController {

  constructor(
    private exerciciosService: ExerciciosService,
  ) {}

  @Post()
  criar(@Body() dados: any) {

    return this.exerciciosService.criar(dados);

  }

  @Get()
  listar() {

    return this.exerciciosService.listar();

  }

  @Put(':id')
  atualizar(
    @Param('id') id: string,
    @Body() dados: any,
  ) {

    return this.exerciciosService.atualizar(
      Number(id),
      dados,
    );

  }

  @Delete(':id')
  remover(@Param('id') id: string) {

    return this.exerciciosService.remover(
      Number(id),
    );

  }

}