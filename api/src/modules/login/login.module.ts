import { Module, ValidationPipe  } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { APP_PIPE } from '@nestjs/core';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { LoginFunctions } from './functions/login.functions';
import { PrismaService } from 'src/database/PrismaService';


@Module({
  imports: [
    JwtModule.register({
      secret: process.env.secret,
      signOptions: { expiresIn: process.env.timeToken },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, LoginFunctions, PrismaService, {
    provide: APP_PIPE,
    useClass: ValidationPipe,
  }],
})
export class LoginModule {}

