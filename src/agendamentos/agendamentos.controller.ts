import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AgendamentosService } from './agendamentos.service';

@Controller('agendamentos')
export class AgendamentosController {
  constructor(private agendamentosService: AgendamentosService) {}

  @Post()
  criar(@Body() dados: any) {
    return this.agendamentosService.criar(dados);
  }

  @Get()
  listar() {
    return this.agendamentosService.listar();
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() dados: any) {
    return this.agendamentosService.atualizar(Number(id), dados);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    return this.agendamentosService.remover(Number(id));
  }
}