import { Controller, Get, Post, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { MatchesService } from './matches.services';
import { InteraccionDto } from './dto/dto.Interaccion';
import { JwtMiddlewareGuard } from 'src/common/middleware/auth-guard';

@Controller('/matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) { }

  @Get('getLikes/:usuarioID')
  @UseGuards(JwtMiddlewareGuard)
  async getLikes(@Param('usuarioID') usuarioID: number) {
    const likes = await this.matchesService.getLikes(usuarioID);
    return likes;
  }

  @Get('getMatches/:usuarioID')
  @UseGuards(JwtMiddlewareGuard)
  async getMatches(@Param('usuarioID') usuarioID: number) {
    const likes = await this.matchesService.getMatches(usuarioID);
    return likes;
  }

  @Post('like')
  @UseGuards(JwtMiddlewareGuard)
  async like(@Body() interaccionDto: InteraccionDto) {
    await this.matchesService.like(interaccionDto);
    return { message: 'Like registrado con éxito' };
  }

  @Post('reject')
  @UseGuards(JwtMiddlewareGuard)
  async reject(@Body() interaccionDto: InteraccionDto) {
    await this.matchesService.reject(interaccionDto);
    return { message: 'Rechazo registrado con éxito' };
  }
 
}
