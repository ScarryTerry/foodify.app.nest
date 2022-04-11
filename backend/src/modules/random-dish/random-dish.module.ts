import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApiController } from 'src/controllers/api/api.controller';
import { ApiService } from 'src/services/api/api.service';

@Module({
  imports: [HttpModule],
  providers: [ApiService],
  controllers: [ApiController]
})
export class RandomDishModule { }
