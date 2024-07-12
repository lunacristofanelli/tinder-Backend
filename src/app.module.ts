import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { CommonModule } from './common/common.module';
import { InteresesModule } from './interesesUsuarios/intereses.module';
import { MatchesModule } from './matches/matches.module';

@Module({
  imports: [InteresesModule, UsuarioModule, CommonModule ,MatchesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
