import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { APP_PIPE } from '@nestjs/core';
import { VerifyLoginMiddleware } from './middlewares/verifyLogin.middleware';
import { LoginModule } from './modules/login/login.module';
import { AuthModule } from './modules/authGoogle/auth.module';
import { RotaProtegidaModule } from './modules/rotaProtegida/rota-protegida.module';
import { RotaProtegidaController } from './modules/rotaProtegida/rota-protegida.controller';
import { RotaProtegidaService } from './modules/rotaProtegida/rota-protegida.service';
@Module({
  imports: [
      JwtModule.register({
        secret: process.env.secret,
        signOptions: { expiresIn: Number(process.env.timeToken) },
      }),
      LoginModule,
      AuthModule,
      RotaProtegidaModule
  ],
  controllers: [AppController, RotaProtegidaController],
  providers: [  
    AppService,  {
    provide: APP_PIPE,
    useClass: ValidationPipe,
  }, RotaProtegidaService,],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyLoginMiddleware)
      .exclude(
        'login/(.*)',
      )
      .forRoutes(
        RotaProtegidaController
      )
  }
}
