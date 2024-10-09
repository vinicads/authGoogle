// src/auth/auth.module.ts

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';
import { AuthController } from './auth.controller';
import { LoginFunctions } from '../login/functions/login.functions';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'google' }),
    JwtModule.register({
      secret: process.env.secret,
      signOptions: { expiresIn: process.env.timeToken },
    }),
    PrismaClient,
    ConfigModule.forRoot(),
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, ConfigService, PrismaService, LoginFunctions],
  exports: [PassportModule, AuthService],
})
export class AuthModule {}
