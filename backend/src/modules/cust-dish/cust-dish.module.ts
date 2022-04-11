import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomDishController } from 'src/controllers/custom-dish/custom-dish.controller';
import { CustDish, CustDishSchema } from 'src/schemas/cust-dish.schema';
import { CustomDishService } from 'src/services/custom-dish/custom-dish.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CustDish.name,
        schema: CustDishSchema
      }
    ])
  ],
  controllers: [CustomDishController],
  providers: [CustomDishService]
})
export class CustDishModule { }
