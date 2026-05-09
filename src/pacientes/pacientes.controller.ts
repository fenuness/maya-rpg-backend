import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { PacientesService } from './pacientes.service';

@Controller('pacientes')
export class PacientesController {

  constructor(
    private pacientesService: PacientesService,
  ) {}

  @Post()
  criar(@Body() dados: any) {

    return this.pacientesService.criar(dados);

  }

  @Get()
  listar() {

    return this.pacientesService.listar();

  }

  @Put(':id')
  atualizar(
    @Param('id') id: string,
    @Body() dados: any,
  ) {

    return this.pacientesService.atualizar(
      Number(id),
      dados,
    );

  }

  @Delete(':id')
  remover(@Param('id') id: string) {

    return this.pacientesService.remover(
      Number(id),
    );

  }

}