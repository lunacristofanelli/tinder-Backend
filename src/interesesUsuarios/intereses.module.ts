import { Module } from '@nestjs/common';
import { InteresesController } from './intereses.controller';
import { InteresesService } from './intereses.service';
import { DBService } from 'src/common/services/db.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret:
        'hjfdsalhfdsahfjkdsakreaurceukfbukalsfyuej43243545y47988367+++fdsfjhdsifyhujdshfjkdsahfjkdskgfhjdsgfygsuyejkgfhdjgfsgejfgdjhsdgfhjsekfyhdbsyfjegfjdysgfjyefgydegfhjseyrfeyr63254342343',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [InteresesController],
  providers: [InteresesService, DBService],
})
export class InteresesModule {}
