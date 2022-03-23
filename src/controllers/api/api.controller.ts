import { Controller, Get } from '@nestjs/common';
import { ApiService } from 'src/services/api/api.service';

@Controller('api')
export class ApiController {
  constructor(
    private apiService: ApiService
  ) { }

  @Get('randomDish')
  getRandomDish(): any {
    return this.apiService.getRandomDish();
  }
}
