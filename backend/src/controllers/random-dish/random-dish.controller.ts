import { Body, Controller, Get, Post } from '@nestjs/common';
import { FavDishDto } from 'src/dto/fav-dish.dto';
import { RandomDishService } from 'src/services/random-dish/random-dish.service';

@Controller('/randomDish')
export class RandomDishController {
  constructor(private randomDishService: RandomDishService) {}

  @Get('/')
  getRandomDish(): any {
    return this.randomDishService.getRandomDish();
  }

  @Post('/save')
  saveRandomDish(@Body() dishDto: FavDishDto): any {
    return this.randomDishService.saveRandomDish(dishDto);
  }
}
