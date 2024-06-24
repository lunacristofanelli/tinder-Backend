// import { Injectable } from '@nestjs/common';
// import { DBService } from './db.service';
// import * as bcrypt from 'bcrypt';

// @Injectable()
// export class AdminService {
//   constructor(private dbService: DBService) {}

//   async createUser(user: any): Promise<any> {
//     const passwordHash = await bcrypt.hash(user.password, 10);
//     await this.dbService.executeQuery('INSERT INTO usuarios (email, password, activo, tipoUsuario, rolID) VALUES (?, ?, ?, ?, ?)', [
//       user.email,
//       passwordHash,
//       user.activo,
//       user.tipoUsuario,
//       user.rolID,
//     ]);
//     return { message: 'Usuario creado con éxito' };
//   }

//   async updateUser(id: number, user: any): Promise<any> {
//     await this.dbService.executeQuery('UPDATE usuarios SET email = ?, password = ?, activo = ?, tipoUsuario = ?, rolID = ? WHERE usuarioID = ?', [
//       user.email,
//       user.password,
//       user.activo,
//       user.tipoUsuario,
//       user.rolID,
//       id,
//     ]);
//     return { message: 'Usuario actualizado con éxito' };
//   }

//   async deleteUser(id: number): Promise<any> {
//     await this.dbService.executeQuery('DELETE FROM usuarios WHERE usuarioID = ?', [id]);
//     return { message: 'Usuario eliminado con éxito' };
//   }

//   async changeUserStatus(id: number, activo: boolean): Promise<any> {
//     await this.dbService.executeQuery('UPDATE usuarios SET activo = ? WHERE usuarioID = ?', [activo, id]);
//     return { message: 'Estado de usuario cambiado con éxito' };
//   }
// }
