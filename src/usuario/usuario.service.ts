import { Injectable } from '@nestjs/common';
import usuarioQueries from './queries/usuario.queries';
import { RowDataPacket } from 'mysql2';
import * as bcrypt from 'bcrypt';
import { DBService } from 'src/common/services/db.service';
import { UsuarioDto } from './dtoUsuario/dto.usuarios';

@Injectable()
export class UsuarioService {
  constructor(private dbService: DBService) { }
  async getAll() {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
      usuarioQueries.selectAll,
      [],
    );
    const usuarios = resultQuery.map((rs: RowDataPacket) => {
      return {
        id: rs['usuarioID'],
        email: rs['email'],
        activo: rs['activo'],
      };
    });
    return usuarios;
  }

  async getLikeableUsers(email: string) {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
      usuarioQueries.selectLikeableUsers,
      [email,email],
    );
    const usuarios = resultQuery.map((rs: RowDataPacket) => {
      return {
        id: rs['usuarioID'],
        email: rs['email'],
        nombre: rs['nombre'],
        apellido: rs['apellido'],
        dni: rs['dni'],
        genero: rs['genero'],
        intereses: this.getInteresesUsuarios(rs['usuarioID']),
        imagenes: this.getImagenesUsuarios(rs['usuarioID']),
      };
    });
    return usuarios;
  }

  async getImagenesUsuarios(id: number) {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
      usuarioQueries.selectImagenes,
      [id],
    );
    const imagenes = resultQuery.map((rs: RowDataPacket) => {
      return rs['imagen_url'];
    });
    return imagenes;
  }

  async getInteresesUsuarios(id: number) {
    const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
      usuarioQueries.selectIntereses,
      [id],
    );
    const intereses = resultQuery.map((rs: RowDataPacket) => {
      return rs['nombre'];
    });
    return intereses;
  }

  async updateUser(usuarioID: number, usuarioDto: UsuarioDto) {
    const { email, activo, rolID } = usuarioDto;
    await this.dbService.execute(usuarioQueries.updateUser, [
      email,
      activo ? 1 : 0,
      rolID,
      usuarioID,
    ]);
  }

  async updatePassword(usuarioID: number, newPassword: string) {
    const encryptedPassword = await bcrypt.hash(newPassword, 10);
    await this.dbService.execute(usuarioQueries.updatePassword, [
      encryptedPassword,
      usuarioID,
    ]);
  }

  async deleteUser(usuarioID: number) {
    await this.dbService.execute(usuarioQueries.deleteUser, [usuarioID]);
  }

  async selectUserById(usuarioID: number) {
    return await this.dbService.executeSelect(usuarioQueries.selectUserById, [usuarioID]);
  }

  async selectUserByEmail(email: string) {
    return await this.dbService.executeSelect(usuarioQueries.selectByEmail, [email]);
  }
}