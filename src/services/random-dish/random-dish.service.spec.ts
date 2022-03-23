import { Test, TestingModule } from '@nestjs/testing';
import { RandomDishService } from './random-dish.service';

describe('RandomDishService', () => {
  let service: RandomDishService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomDishService],
    }).compile();

    service = module.get<RandomDishService>(RandomDishService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
