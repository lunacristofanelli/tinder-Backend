import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from '../services/register.service';


@Controller('/register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  async Register(@Body() body: { email: string; password: string }) {
    const username = await this.registerService.register(body);
    return { message: `Usuario ${username} creado con éxito` };
  }

  // @Put('/actualizarPerfil')
  // @UseGuards(JwtMiddlewareGuard) // Protegido con JWT
  // async actualizarPerfil(@Body() body: { email: string; password: string }) {
  //   const userId = 1; 
  //   return await this.registerService.actualizarPerfil(userId, body);
  // }

  // @Put('/cambiarPassword')
  // @UseGuards(JwtMiddlewareGuard) // Protegido con JWT
  // async cambiarPassword(@Body() body: { oldPassword: string; newPassword: string }) {
  //   const userId = 1; 
  //   return await this.registerService.cambiarPassword(userId, body.oldPassword, body.newPassword);
  // }

}