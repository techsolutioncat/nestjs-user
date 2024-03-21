import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  private readonly secretKey = 'your_secret_key'; // Replace this with your own secret key

  @Post()
  async createUser(@Body() userData: any) {
    const token = jwt.sign(userData.email, this.secretKey);
    userData.accessToken = token;
    userData.refreshToken = token;
    return this.userService.createUser(userData);
  }

  @Get(':email')
  async getByEmail(@Param('email') email: string) {
    return this.userService.getByEmail(email);
  }
}