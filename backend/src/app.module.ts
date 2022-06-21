import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { CustDishModule } from './modules/cust-dish/cust-dish.module';
import { FavDishModule } from './modules/fav-dish/fav-dish.module';
import { RandomDishModule } from './modules/random-dish/random-dish.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`,
    ),
    CustDishModule,
    FavDishModule,
    RandomDishModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
