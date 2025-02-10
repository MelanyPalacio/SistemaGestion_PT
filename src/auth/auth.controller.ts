import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() userDto: { email: string; password: string }) {
    return this.authService.validateUser(userDto.email, userDto.password).then(user => {
      return this.authService.login(user);
    });
  }
}
