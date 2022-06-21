import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavDishController } from 'src/controllers/fav-dish/fav-dish.controller';
import { FavDish, FavDishSchema } from 'src/schemas/fav-dish.schema';
import { FavDishService } from 'src/services/fav-dish/fav-dish.service';
import { RandomDishModule } from '../random-dish/random-dish.module';

@Module({
  controllers: [FavDishController],
  providers: [FavDishService],
  imports: [
    forwardRef(() => RandomDishModule),
    MongooseModule.forFeature([
      {
        name: FavDish.name,
        schema: FavDishSchema,
      },
    ]),
  ],
  exports: [FavDishService],
})
export class FavDishModule {}
