import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

import { FavDishDto } from 'src/dto/fav-dish.dto';
import { FavDish } from 'src/schemas/fav-dish.schema';
import { FavDishService } from '../fav-dish/fav-dish.service';

@Injectable()
export class RandomDishService {
  constructor(
    private favDishService: FavDishService,
    private httpService: HttpService,
  ) {}

  getRandomDish(): Observable<AxiosResponse<void>> {
    return this.httpService
      .get('https://www.themealdb.com/api/json/v1/1/random.php', {
        headers: {
          Accept: 'application/json',
        },
      })
      .pipe(map((response) => response.data));
  }

  saveRandomDish(dto: FavDishDto): Promise<FavDish> {
    return this.favDishService.saveFavDish(dto);
  }
}
