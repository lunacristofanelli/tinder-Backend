import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from '../services/register.service';
import { UsuarioDto } from 'src/usuario/dtoUsuario/dto.usuarios';


@Controller('/register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  async registerUser(@Body() usuarioDto: UsuarioDto) {
    const userWithoutPassword = await this.registerService.registerUser(usuarioDto);
    return { message: `Usuario ${userWithoutPassword.email} creado con éxito`, user: userWithoutPassword };
  }

}