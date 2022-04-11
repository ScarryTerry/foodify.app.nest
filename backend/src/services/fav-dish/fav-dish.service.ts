import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FavDishDto } from 'src/dto/fav-dish.dto';

import { FavDish, FavDishDocument } from 'src/schemas/fav-dish.schema';

@Injectable()
export class FavDishService {
  constructor(
    @InjectModel(FavDish.name) private favDishModel: Model<FavDishDocument>
  ) { }

  async saveFavDish(dto: FavDishDto): Promise<FavDish> {
      const existingRecipe = await this.favDishModel.findOne(dto);

      if (existingRecipe === null) {
        const newRecipe = new this.favDishModel(dto);
        return newRecipe.save(); 
      }
      throw new HttpException("Recipe already exist", HttpStatus.CONFLICT);
  }

  async removeFavDish(id: string): Promise<FavDish> {
   return this.favDishModel.findByIdAndRemove(id);
  }

  async getAllRecipes(): Promise<FavDish[]> {
    return this.favDishModel.find().exec();
  }
}
