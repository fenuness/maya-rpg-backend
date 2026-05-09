import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EvolucoesService } from './evolucoes.service';

@Controller('evolucoes')
export class EvolucoesController {
  constructor(private evolucoesService: EvolucoesService) {}

  @Post()
  criar(@Body() dados: any) {
    return this.evolucoesService.criar(dados);
  }

  @Get()
  listar() {
    return this.evolucoesService.listar();
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() dados: any) {
    return this.evolucoesService.atualizar(Number(id), dados);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    return this.evolucoesService.remover(Number(id));
  }
}