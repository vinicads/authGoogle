import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus, HttpException, ValidationPipe, UsePipes, Req } from '@nestjs/common';
import { response } from 'express';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) { }

  @Get()
  find(@Req() req: Request, @Res() res: Response) {
    return this.loginService.find(req, res);
  }

  @Get("/logout")
  logout(@Req() req: Request, @Res() res: Response) {
    return this.loginService.logout(req, res);
  }


}
