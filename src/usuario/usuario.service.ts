import { Injectable } from '@nestjs/common';
import usuarioQueries from './queries/usuario.queries';
import { RowDataPacket } from 'mysql2';
import { DBService } from 'src/common/services/db.service';

@Injectable()
export class UsuarioService {
  constructor(private dbService: DBService) {}
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
        // tipoUsuario: rs['tipoUsuario'],
      };
    });
    return usuarios;
  }
}
































  // async updateProfile(userId: number, updateData: { email: string; password: string }) {
  //   const { email, password } = updateData;
  //   const hashedPassword = await this.generateHash(password);
  //   await this.dbService.executeQuery(usuarioQueries.updateProfile, [email, hashedPassword, userId]);
  //   return { message: 'Perfil actualizado correctamente' };
  // }

  // async changePassword(userId: number, oldPassword: string, newPassword: string) {
  //   const resultQuery: RowDataPacket[] = await this.dbService.executeSelect(
  //     usuarioQueries.selectPasswordById,
  //     [userId],
  //   );

  //   if (resultQuery.length === 0) {
  //     throw new NotFoundException('Usuario no encontrado');
  //   }

  //   const dbPassword = resultQuery[0].password;
  //   const isValidPassword = await bcrypt.compare(oldPassword, dbPassword);

  //   if (!isValidPassword) {
  //     throw new Error('La contraseña actual no es válida');
  //   }

  //   const hashedNewPassword = await this.generateHash(newPassword);
  //   await this.dbService.executeQuery(usuarioQueries.updatePassword, [hashedNewPassword, userId]);

  //   return { message: 'Contraseña actualizada correctamente' };
  // }

  // private async generateHash(password: string): Promise<string> {
  //   const saltOrRounds = 10;
  //   return await bcrypt.hash(password, saltOrRounds);
  // }
