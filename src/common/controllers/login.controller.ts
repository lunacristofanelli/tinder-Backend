import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginService } from '../services/login.service';

@Controller('/login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  @HttpCode(200)
  async login(@Body() body: { email: string; password: string }) {
    return await this.loginService.login(body);
  }

  // @Post('/generarPassword')
  // @HttpCode(200)
  // async generarPassword(@Body() body: { password: string }) {
  //   return await this.loginService.generarPassword(body.password);
  // }

  // @Put('/actualizarPerfil')
  // @UseGuards(JwtMiddlewareGuard)
  // async actualizarPerfil(@Body() body: { email: string; password: string }) {
  //   const userId = 1; 
  //   return await this.loginService.actualizarPerfil(userId, body);
  // }

  // @Put('/cambiarPassword')
  // @UseGuards(JwtMiddlewareGuard)
  // async cambiarPassword(@Body() body: { oldPassword: string; newPassword: string }) {
  //   const userId = 1; 
  //   return await this.loginService.cambiarPassword(userId, body.oldPassword, body.newPassword);
  // }

}