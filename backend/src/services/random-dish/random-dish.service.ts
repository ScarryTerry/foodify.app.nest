import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { FavDishDto } from 'src/dto/fav-dish.dto';
import { FavDish, FavDishDocument } from 'src/schemas/fav-dish.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RandomDishService {

  constructor(
    @InjectModel(FavDish.name)
    private FavDishModel: Model<FavDishDocument>,
    private httpService: HttpService
  ) { }

  getRandomDish(): Observable<AxiosResponse<void>> {
    return this.httpService.get("https://www.themealdb.com/api/json/v1/1/random.php", {
      headers: {
        'Accept': 'application/json'
      }
    }).pipe(
      map(response => response.data),
    );
  }

  async saveRandomDish(dto: FavDishDto): Promise<FavDish | HttpStatus> {
    try {
      const existingRecipe = await this.FavDishModel.findOne(dto);

      if (existingRecipe === null) {
        const newRecipe = new this.FavDishModel(dto);
        return newRecipe.save();
      }
      throw new HttpException("Recipe already exist", HttpStatus.CONFLICT);
    } catch (e) {
      console.error(e);
    }
  }
}
