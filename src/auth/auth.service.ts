import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { scrypt } from 'crypto';
import { promisify } from 'util';

import { UsersService } from '../users/users.service';
import { UserSigninDto } from '../users/dto/user-signin.dto';
import { UserDto } from '../users/dto/user.dto';
import { AuthResponseDto } from './dto/auth-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async auth(userSigninDto: UserSigninDto): Promise<AuthResponseDto> {
    const { login, password } = userSigninDto;
    const user = await this.usersService.findOne(login);
    if (!user) return;

    const hashBuffer = (await promisify(scrypt)(
      password,
      user.salt,
      32,
    )) as Buffer;

    if (hashBuffer.toString('hex') === user.password)
      return this.generateToken(user);
    return {};
  }

  async generateToken(user: UserDto): Promise<AuthResponseDto> {
    const payload = { login: user.login, sub: user._id.toString() };
    const access_token = await this.jwtService.signAsync(payload, {
      expiresIn: '1h',
    });

    return { data: { access_token } };
  }

  async verifyToken(token: string): Promise<boolean> {
    try {
      await this.jwtService.verifyAsync(token);
    } catch (error) {
      return false;
    }
    return true;
  }
}
