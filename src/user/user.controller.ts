import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  private readonly secretKey = 'your_secret_key'; // Replace this with your own secret key

  @Post('users')
  async createUser(@Body() userData: any) {
    const token = jwt.sign(userData.email, this.secretKey);
    userData.accessToken = token;
    userData.refreshToken = token;
    return this.userService.createUser(userData);
  }

  @Post('users/get')
  async getOneByEmail(@Body() userData: any) {
    return this.userService.getOneByEmail(userData.email);
  }

  @Post('users/login')
  async loginUser(@Body() userData: any) {
    return this.userService.getLoginData(userData);
  }
}