import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CustomDishDto } from 'src/dto/cust-dish.dto';
import { CustDish } from 'src/schemas/cust-dish.schema';
import { CustomDishService } from 'src/services/custom-dish/custom-dish.service';

@Controller('custom-dish')
export class CustomDishController {
  constructor(
    private readonly dishServise: CustomDishService
  ) { }

  @Post('add')
  @HttpCode(HttpStatus.CREATED)
  addCustomDish(@Body() dishDto: CustomDishDto): Promise<CustDish | HttpStatus> {
    return this.dishServise.addCustomDish(dishDto);
  }

  @Get('all')
  getAllCustomRecipes(): Promise<CustDish[]> {
    return this.dishServise.getAllCustomRecipes();
  }

  @Delete(':id')
  removeDish(@Param('id') id: string): Promise<CustDish> {
    return this.dishServise.removeDish(id);
  }

  @Put(':id')
  updateDish(@Body() updateDishDto: CustomDishDto, @Param('id') id: string): Promise<CustDish> {
    return this.dishServise.updateDish(id, updateDishDto);
  }
}
