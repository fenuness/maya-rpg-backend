import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NotificacoesService } from './notificacoes.service';

@Controller('notificacoes')
export class NotificacoesController {
  constructor(private notificacoesService: NotificacoesService) {}

  @Post()
  criar(@Body() dados: any) {
    return this.notificacoesService.criar(dados);
  }

  @Get()
  listar() {
    return this.notificacoesService.listar();
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() dados: any) {
    return this.notificacoesService.atualizar(Number(id), dados);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    return this.notificacoesService.remover(Number(id));
  }
}