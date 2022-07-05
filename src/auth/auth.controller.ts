import { Body, Controller, Post } from '@nestjs/common';

import { UserSigninDto } from '../users/dto/user-signin.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async signin(@Body() userSigninDto: UserSigninDto): Promise<AuthResponseDto> {
    return this.authService.auth(userSigninDto);
  }
}
