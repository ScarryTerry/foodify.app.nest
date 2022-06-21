import { HttpModule } from '@nestjs/axios';
import { Module, forwardRef } from '@nestjs/common';
import { RandomDishController } from 'src/controllers/random-dish/random-dish.controller';
import { RandomDishService } from 'src/services/random-dish/random-dish.service';
import { FavDishModule } from '../fav-dish/fav-dish.module';

@Module({
  controllers: [RandomDishController],
  providers: [RandomDishService],
  imports: [forwardRef(() => FavDishModule), HttpModule],
})
export class RandomDishModule {}
