import { Injectable } from '@nestjs/common';

@Injectable()
export class RotaProtegidaService {
    async find(req, res){
        return res.status(200).send("Você conseguiu acessar por estar logado! Beba água.");
    }
}
