import { Injectable, Res } from '@nestjs/common';
import { LoginFunctions } from './functions/login.functions';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/database/PrismaService';
@Injectable()
export class LoginService {
  constructor(
    private readonly loginFunctions: LoginFunctions,
    private readonly prisma: PrismaService,
    private jwt: JwtService,) { }

  async find(req, res) {
    const cookies = req.cookies;
    if (cookies.meuToken) {
      const resultado = await this.loginFunctions.verifyToken(cookies.meuToken);
      if (resultado){
        var autenticacao = await this.loginFunctions.verifyUser(resultado.email);
        if(autenticacao){
         
          const newDados= {
            "autenticacao": autenticacao,
          };
            return res.status(200).send(newDados);
        }
    }
    
    res.cookie('meuToken', "token", {
      maxAge: 1,
      secure: false,
      httpOnly: true,
      sameSite: 'lax',
      withCredentials: true,
      path: "/",
    });
    var dados = {
      "message": "Token inválido.",
    }
      return res.status(401).send(dados)

  } else {
    var dados = {
      "message": "Primeiro faça login",
    }
    return res.status(401).send(dados);
  }
}

  async logout(req, res) {
    const cookies = req.cookies;
    if (cookies.meuToken) {
      res.cookie('meuToken', "token", {
        maxAge: 1,
        secure: false,
        sameSite: 'lax',
        httpOnly: true,
        withCredentials: true,
        path: "/",
      });
    }
    return res.status(200).send('Saiu com sucesso!');
  }


}

