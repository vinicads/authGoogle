import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { LoginFunctions } from '../login/functions/login.functions';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginFunctions: LoginFunctions) { }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Res() res: Response) {
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    const jwt = req.user.accessToken; 
    var token = await this.loginFunctions.generateToken(req.user.user.email);
    res.cookie('meuToken', token, {
      secure: false,
      httpOnly: true,
      sameSite: 'lax',
      maxAge: Number(String(process.env.timeCookie)),
      path: "/",
    })
    res.send('<script>window.opener.postMessage({ token: "' + token + '" }, "*"); window.close();</script>');
  }
}
