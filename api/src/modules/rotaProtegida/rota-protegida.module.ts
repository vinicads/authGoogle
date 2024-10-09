import { Module, ValidationPipe  } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { RotaProtegidaController } from './rota-protegida.controller';
import { RotaProtegidaService } from './rota-protegida.service';


@Module({
  imports: [],
  controllers: [RotaProtegidaController],
  providers: [ RotaProtegidaService, {
    provide: APP_PIPE,
    useClass: ValidationPipe,
  }],
})
export class RotaProtegidaModule {}

