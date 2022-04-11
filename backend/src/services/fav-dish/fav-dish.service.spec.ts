import { Test, TestingModule } from '@nestjs/testing';
import { FavDishService } from './fav-dish.service';

describe('FavDishService', () => {
  let service: FavDishService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavDishService],
    }).compile();

    service = module.get<FavDishService>(FavDishService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
