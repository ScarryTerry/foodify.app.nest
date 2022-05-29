import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FavDishDto } from 'src/dto/fav-dish.dto';
import { FavDish } from 'src/schemas/fav-dish.schema';
import { FavDishService } from 'src/services/fav-dish/fav-dish.service';

@Controller('favDish')
export class FavDishController {
  constructor(
    private readonly dishServise: FavDishService
  ) { }

  @Get()
  getAllRecipes(): Promise<FavDish[]> {
    return this.dishServise.getAllRecipes();
  }

  @Post(':id')
  getOneRecipe(@Param('id') id: string): Promise<FavDish> {
    return this.dishServise.getOneRecipe(id);
  }

  @Post()
  saveFavDish(@Body() dishDto: FavDishDto): Promise<FavDish> {
    return this.dishServise.saveFavDish(dishDto);
  }

  @Delete(':id')
  removeFavDish(@Param('id') id: string): Promise<FavDish> {
    return this.dishServise.removeFavDish(id);
  }

}
