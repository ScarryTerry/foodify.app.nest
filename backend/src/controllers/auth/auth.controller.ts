import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from 'src/dto/user-dto';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() userDto: UserDto): Promise<any> {
    return this.authService.login(userDto);
  }

  @Post('/registration')
  registration(@Body() userDto: UserDto): Promise<any> {
    return this.authService.registration(userDto);
  }
}
