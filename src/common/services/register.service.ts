import { Injectable } from '@nestjs/common';
import { DBService } from './db.service';
import usuarioQueries from 'src/usuario/queries/usuario.queries';
import * as bcrypt from 'bcrypt';
import UserRegister from 'src/model/datosUsuario/dto/register.dto';

@Injectable()
export class RegisterService {

  constructor(private dbService: DBService) {}

  async generateHash(pw: string) {
    const hash = await bcrypt.hash(pw,10);
    return hash;
  }

  async register(user: UserRegister): Promise<Omit<UserRegister, 'password'>> {
    const encriptedPassword = await this.generateHash(user.password);

    await this.dbService.executeQuery(usuarioQueries.registerUser, [
      user.email,
      encriptedPassword,
      1,
      2,
    ]);

    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
}