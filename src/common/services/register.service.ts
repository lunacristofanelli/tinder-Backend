import { Injectable } from '@nestjs/common';
import { DBService } from './db.service';
import usuarioQueries from 'src/usuario/queries/usuario.queries';
import * as bcrypt from 'bcrypt';
import { UsuarioDto } from 'src/usuario/dtoUsuario/dto.usuarios';

@Injectable()
export class RegisterService {
  constructor(private dbService: DBService) {}

  async generateHash(pw: string) {
    const hash = await bcrypt.hash(pw, 10);
    return hash;
  }

  async registerUser(
    usuarioDto: UsuarioDto,
  ): Promise<Omit<UsuarioDto, 'password'>> {
    const { email, password, nombre, apellido, imagenes } = usuarioDto;
    const encryptedPassword = await this.generateHash(password);
    const execResult = await this.dbService.execute(
      usuarioQueries.registerUser,
      [email, encryptedPassword, nombre, apellido, 1, 2],
    );
    if (imagenes && imagenes.length < 6) {
      for (const img of imagenes) {
        await this.dbService.execute(usuarioQueries.insertUserImage, [
          execResult.insertId,
          img,
        ]);
      }
    }

    const { password: _, ...userWithoutPassword } = usuarioDto;
    return userWithoutPassword;
  }
}
