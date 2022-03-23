import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CustomDishDto } from 'src/dto/cust-dish.dto';
import { CustDish, CustDishDocument } from 'src/schemas/cust-dish.schema';

@Injectable()
export class CustomDishService {
  constructor(
    @InjectModel(CustDish.name) private custDishModel: Model<CustDishDocument>
  ) { }

  async addCustomDish(dto: CustomDishDto): Promise<any> {
    try {
      const existingRecipe = await this.custDishModel.findOne(dto);

      if (existingRecipe !== null) {
        return HttpStatus.CONFLICT;
      }

      const newRecipe = new this.custDishModel(dto);
      return newRecipe.save();
    } catch (e) {
      console.error(e);
    }
  }

  async getAllCustomRecipes(): Promise<CustDish[]> {
    return this.custDishModel.find().exec();
  }

  async removeDish(id: string): Promise<CustDish> {
    return this.custDishModel.findByIdAndRemove(id);
  }

  async updateDish(id: string, cunstDishDto: CustomDishDto): Promise<CustDish> {
    return this.custDishModel.findByIdAndUpdate(id, cunstDishDto, { new: true });
  }
}
