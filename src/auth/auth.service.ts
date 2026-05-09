import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { UsuariosService } from '../usuarios/usuarios.service';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async login(
    email: string,
    senha: string,
  ) {

    const usuario =
      await this.usuariosService.buscarPorEmail(email);

    if (!usuario) {

      throw new UnauthorizedException(
        'Usuário não encontrado',
      );

    }

    const senhaCorreta =
      await bcrypt.compare(
        senha,
        usuario.senha,
      );

    if (!senhaCorreta) {

      throw new UnauthorizedException(
        'Senha inválida',
      );

    }

    const payload = {

      sub: usuario.id,

      email: usuario.email,

      tipo: usuario.tipo,

    };

    return {

      access_token:
        this.jwtService.sign(payload),

    };

  }

}