import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { JwtMiddlewareGuard } from 'src/common/middleware/auth-guard';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get()
  @UseGuards(JwtMiddlewareGuard)
  async getAll() {
    return await this.usuarioService.getAll();
  }

  @Get('/info')
  @UseGuards(JwtMiddlewareGuard)
  async getInformacionUsuario(@Req() request) {
    return request.user;
  }

  // @Patch('/updateProfile')
  // @UseGuards(JwtMiddlewareGuard)
  // async updateProfile(@Req() request, @Body() body: { email: string; password: string }) {
  //   const userId = request.user.usuarioID;
  //   return await this.usuarioService.updateProfile(userId, body);
  // }

  // @Patch('/changePassword')
  // @UseGuards(JwtMiddlewareGuard)
  // async changePassword(@Req() request, @Body() body: { oldPassword: string; newPassword: string }) {
  //   const userId = request.user.usuarioID;
  //   return await this.usuarioService.changePassword(userId, body.oldPassword, body.newPassword);
  // }
}