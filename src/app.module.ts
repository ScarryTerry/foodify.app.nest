import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomDishController } from './random-dish/random-dish.controller';
import { CustomDishController } from './custom-dish/custom-dish.controller';
import { FavDishController } from './fav-dish/fav-dish.controller';

@Module({
  imports: [],
  controllers: [AppController, RandomDishController, CustomDishController, FavDishController],
  providers: [AppService],
})
export class AppModule {}
