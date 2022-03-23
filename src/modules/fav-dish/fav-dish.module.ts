import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavDishController } from 'src/controllers/fav-dish/fav-dish.controller';
import { FavDish, FavDishSchema } from 'src/schemas/fav-dish.schema';
import { FavDishService } from 'src/services/fav-dish/fav-dish.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FavDish.name,
        schema: FavDishSchema
      }
    ])
  ],
  controllers: [FavDishController],
  providers: [FavDishService]
})
export class FavDishModule { }
