import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService,
  ) {}

  async findOrCreate(googleId: string, email: string){
    let user = await this.prisma.autenticacao.findFirst({ where: { googleId } });

    if (!user) {
      const dataAtual = new Date()
      const userExists = await this.prisma.autenticacao.findFirst({
        where: {
          email: email
        }
      })

      if (userExists){
        await this.prisma.autenticacao.updateMany({
          where: {
            email: email
          },
          data: {
            googleId: googleId
          }
        })
        user = userExists
      }else{
        user = await this.prisma.autenticacao.create({
          data: {
            googleId,
            email,
          },
        });
      }
  

     
    }

    return user;
  }
}
