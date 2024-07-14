import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { InteresesService } from './intereses.service';
import { CreateInterestDto } from './dto/dto.crear.interes';
import { UserInterestDto } from './dto/dto.intereses.usuarios';
import { JwtMiddlewareGuard } from 'src/common/middleware/auth-guard';

@Controller('/intereses')
export class InteresesController {
  constructor(private interesesService: InteresesService) {}

  @Get()
  async getInterests() {
    return await this.interesesService.getInterests();
  }

  @Post()
  @UseGuards(JwtMiddlewareGuard)
  async addInterest(@Body() createInterestDto: CreateInterestDto) {
    await this.interesesService.addInterest(createInterestDto);
    return { message: 'Interés añadido con éxito' };
  }

  @Delete('/:interesID')
  @UseGuards(JwtMiddlewareGuard)
  async deleteInterest(@Param('interesID') interesID: number) {
    await this.interesesService.deleteInterest(Number(interesID));
    return { message: 'Interés eliminado con éxito' };
  }

  @Get('/usuario/:perfilID')
  @UseGuards(JwtMiddlewareGuard)
  async getUserInterests(@Param('perfilID') perfilID: number) {
    return await this.interesesService.getUserInterests(Number(perfilID));
  }

  @Post('/usuario')
  @UseGuards(JwtMiddlewareGuard)
  async addUserInterest(@Body() userInterestDto: UserInterestDto) {
    await this.interesesService.addUserInterest(userInterestDto);
    return { message: 'Interés de usuario añadido con éxito' };
  }

  @Delete('/usuario')
  @UseGuards(JwtMiddlewareGuard)
  async deleteUserInterest(@Body() userInterestDto: UserInterestDto) {
    await this.interesesService.deleteUserInterest(
      userInterestDto.perfilID,
      userInterestDto.interesID,
    );
    return { message: 'Interés de usuario eliminado con éxito' };
  }
}
