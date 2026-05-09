import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SessoesService } from './sessoes.service';

@Controller('sessoes')
export class SessoesController {
  constructor(private sessoesService: SessoesService) {}

  @Post()
  criar(@Body() dados: any) {
    return this.sessoesService.criar(dados);
  }

  @Get()
  listar() {
    return this.sessoesService.listar();
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() dados: any) {
    return this.sessoesService.atualizar(Number(id), dados);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    return this.sessoesService.remover(Number(id));
  }
}