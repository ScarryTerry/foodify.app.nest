import { Test, TestingModule } from '@nestjs/testing';
import { FavDishController } from './fav-dish.controller';

describe('FavDishController', () => {
  let controller: FavDishController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavDishController],
    }).compile();

    controller = module.get<FavDishController>(FavDishController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
