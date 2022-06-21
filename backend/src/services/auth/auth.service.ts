import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UserDto, CreateUserDto } from 'src/dto/user-dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateUserDto): Promise<any> {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registration(userDto: CreateUserDto): Promise<any> {
    const existingUser = await this.userService.getUserByEmail(userDto.email);
    if (existingUser) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(userDto.password, 10);
    const user: UserDto = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  private async generateToken(user: UserDto) {
    const payload = { email: user.email, date: user.createdDate };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);

    if (!user) {
      throw new NotFoundException({ message: 'User not found' });
    }

    const comparedPassword = await bcrypt.compare(
      userDto.password,
      user.password,
    );

    if (comparedPassword) {
      return user;
    }

    throw new UnauthorizedException({ message: 'Incorrect credentials' });
  }
}
