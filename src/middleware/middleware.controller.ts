import { Controller, Post, Body } from '@nestjs/common';
import { MiddleareService } from './middleware.service';

@Controller()
export class MiddlewareController {
  constructor(private readonly MiddleareService: MiddleareService) {}

  @Post('checkauth')
  async checkAuthy(@Body() data: any) {
    return this.MiddleareService.checkToken(data.token);
  }
}