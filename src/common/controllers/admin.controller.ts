// import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
// import { AdminService } from '../services/admin.service';
// import { JwtMiddlewareGuard } from '../middleware/auth.middleware';

// @Controller('/admin')
// @UseGuards(JwtMiddlewareGuard)
// export class AdminController {
//   constructor(private adminService: AdminService) {}

//   @Post('/createUser')
//   async createUser(@Body() body: any) {
//     return await this.adminService.createUser(body);
//   }

//   @Patch('/updateUser/:id')
//   async updateUser(@Param('id') id: number, @Body() body: any) {
//     return await this.adminService.updateUser(id, body);
//   }

//   @Delete('/deleteUser/:id')
//   async deleteUser(@Param('id') id: number) {
//     return await this.adminService.deleteUser(id);
//   }

//   @Patch('/changeUserStatus/:id')
//   async changeUserStatus(@Param('id') id: number, @Body() body: { activo: boolean }) {
//     return await this.adminService.changeUserStatus(id, body.activo);
//   }
// }
