import { Injectable } from '@nestjs/common';
import { DBService } from 'src/common/services/db.service';
import interesesQueries from './intereses.queries';
import { CreateInterestDto } from './dto/dto.crear.interes';
import { UserInterestDto } from './dto/dto.intereses.usuarios';

@Injectable()
export class InteresesService {
  constructor(private dbService: DBService) {}

  async getInterests() {
    return await this.dbService.executeSelect(interesesQueries.selectInterests, []);
  }

  async addInterest(createInterestDto: CreateInterestDto) {
    await this.dbService.execute(interesesQueries.addInterest, [createInterestDto.nombre]);
  }

  async deleteInterest(interesID: number) {
    await this.dbService.execute(interesesQueries.deleteInterest, [interesID]);
  }

  async getUserInterests(perfilID: number) {
    return await this.dbService.executeSelect(interesesQueries.getUserInterests, [perfilID]);
  }

  async addUserInterest(userInterestDto: UserInterestDto) {
    await this.dbService.execute(interesesQueries.addUserInterest, [userInterestDto.perfilID, userInterestDto.interesID]);
  }

  async deleteUserInterest(perfilID: number, interesID: number) {
    await this.dbService.execute(interesesQueries.deleteUserInterest, [perfilID, interesID]);
  }
}
