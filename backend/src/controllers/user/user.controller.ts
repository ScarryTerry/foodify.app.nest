import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserDto } from 'src/dto/user-dto';
import { User } from 'src/schemas/user-schema';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userServise: UserService
  ) { }

  @Post('add')
  @HttpCode(HttpStatus.CREATED)
  addCustomDish(@Body() userDto: UserDto): Promise<User | HttpStatus> {
    return this.userServise.createUser(userDto);
  }
}
