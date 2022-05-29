import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustDishModule } from './modules/cust-dish/cust-dish.module';
import { FavDishModule } from './modules/fav-dish/fav-dish.module';
import { RandomDishModule } from './modules/random-dish/random-dish.module';
import { RandomDishController } from './controllers/random-dish/random-dish.controller';
import { RandomDishService } from './services/random-dish/random-dish.service';
import { UserController } from './controllers/user/user.controller';
import { UserModule } from './modules/user/user.module';
import { UserService } from './services/user/user.service';

@Module({
  controllers: [AppController, RandomDishController, UserController],
  providers: [AppService, RandomDishService, UserService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.1v8ml.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`),
    CustDishModule,
    FavDishModule,
    RandomDishModule,
    UserModule
  ],
})
export class AppModule { }
