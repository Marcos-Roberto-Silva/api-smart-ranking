import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async createUpdatePlayer(@Body() createPlayer: CreatePlayerDto) {
    const { email } = createPlayer;
    return JSON.stringify(`{
      email: ${email}
    }`);
  }
}
