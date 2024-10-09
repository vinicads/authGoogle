import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus, HttpException, ValidationPipe, UsePipes, Req } from '@nestjs/common';
import { RotaProtegidaService } from './rota-protegida.service';

@Controller('rota-protegida')
export class RotaProtegidaController {
    constructor(private readonly rotaProtegidaService: RotaProtegidaService) { }

    @Get()
    find(@Req() req: Request, @Res() res: Response) {
      return this.rotaProtegidaService.find(req, res);
    }
}
