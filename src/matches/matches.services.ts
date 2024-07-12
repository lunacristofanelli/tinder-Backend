import { Injectable } from '@nestjs/common';
import { DBService } from 'src/common/services/db.service';
import matchesQueries from './matches.queries';
import { InteraccionDto } from './dto/dto.Interaccion';

@Injectable()
export class MatchesService {
  getUserMatches(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private dbService: DBService) {}


  async reject(interaccion: InteraccionDto) {
    const { usuarioOrigenID, usuarioDestinoID } = interaccion;
    await this.dbService.execute(matchesQueries.interaccion, [usuarioOrigenID, usuarioDestinoID, 2 ]);
  }


  async like(interaccion: InteraccionDto) {
    const { usuarioOrigenID, usuarioDestinoID } = interaccion;
    await this.dbService.execute(matchesQueries.interaccion, [usuarioOrigenID, usuarioDestinoID, 1 ]);
  }

  
  async getLikes(usuarioID: number) {
    await this.dbService.execute(matchesQueries.likesRecibidos, [usuarioID]);
  }

  async getMatches(usuarioID: number) {
    await this.dbService.execute(matchesQueries.matches, [usuarioID]);
  }
}

