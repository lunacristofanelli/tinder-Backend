import { Controller, Get, Req, UseGuards, Put, Param, Body, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { JwtMiddlewareGuard } from 'src/common/middleware/auth-guard';
import { UsuarioDto } from './dtoUsuario/dto.usuarios';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get()
  @UseGuards(JwtMiddlewareGuard)
  async getAll() {
    return await this.usuarioService.getAll();
  }

  @Get('/likeables/:email')
  @UseGuards(JwtMiddlewareGuard)
  async getLikeableUsers(@Param('email') email: string)  {
    return await this.usuarioService.getLikeableUsers(email);
  }

  @Get('/:usuarioID')
  @UseGuards(JwtMiddlewareGuard)
  async selectUserById(@Param('usuarioID') usuarioID: number) {
    return await this.usuarioService.selectUserById(usuarioID);
  }

   @Get('/email/:email')
  @UseGuards(JwtMiddlewareGuard) 
  async getInformacionUsuario(@Param('email') email: string) {
    return await this.usuarioService.selectUserByEmail(email);
  } 

  @Put('/:usuarioID')
  @UseGuards(JwtMiddlewareGuard)
  async updateUser(@Param('usuarioID') usuarioID: string, @Body() usuarioDto: UsuarioDto) {
    await this.usuarioService.updateUser(Number(usuarioID), usuarioDto);
    return { message: 'Usuario actualizado correctamente' };
  }

  @Put('/:id/password')
  @UseGuards(JwtMiddlewareGuard)
  async updatePassword(@Param('id') id: string, @Body() body: { newPassword: string }) {
    await this.usuarioService.updatePassword(Number(id), body.newPassword);
    return { message: 'Contraseña actualizada con éxito' };
  }

  @Delete('/:usuarioID')
  @UseGuards(JwtMiddlewareGuard)
  async deleteUser(@Param('usuarioID') usuarioID: string) {
    await this.usuarioService.deleteUser(Number(usuarioID));
    return { message: 'Usuario eliminado correctamente' };
  }
}
