import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/dto/user-dto';
import { User, UserDocument } from 'src/schemas/user-schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private UserModel: Model<UserDocument>
  ) { }

  async createUser(dto: UserDto) {
    try {
      const existingUser = await this.UserModel.findOne(dto);

      if (existingUser === null) {
        const newUser = new this.UserModel(dto);
        return newUser.save();
      }

      throw new HttpException("Recipe already exist", HttpStatus.CONFLICT);
    } catch (e) {
      console.error(e);
    }
  }

  // async getAllUsers() {
  //   try {
  //     return this.UserModel.find().exec();
  //   } catch (e) {
  //     console.error(e);
  //     throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
  //   }
  // }
}
