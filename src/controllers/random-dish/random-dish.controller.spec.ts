import { Test, TestingModule } from '@nestjs/testing';
import { RandomDishController } from './random-dish.controller';

describe('RandomDishController', () => {
  let controller: RandomDishController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomDishController],
    }).compile();

    controller = module.get<RandomDishController>(RandomDishController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
