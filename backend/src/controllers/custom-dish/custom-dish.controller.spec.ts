import { Test, TestingModule } from '@nestjs/testing';
import { CustomDishController } from './custom-dish.controller';

describe('CustomDishController', () => {
  let controller: CustomDishController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomDishController],
    }).compile();

    controller = module.get<CustomDishController>(CustomDishController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
