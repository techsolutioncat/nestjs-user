import { Controller, Post, Body } from '@nestjs/common';
import { FocusService } from './focus.service';

@Controller()
export class FocusController {
  constructor(private readonly FocusService: FocusService) {}
  private readonly secretKey = 'your_secret_key'; // Replace this with your own secret key

  @Post('focus/new')
  async createData(@Body() data: any) {
    if(data.id === 0)
      return this.FocusService.createData(data.data);
    else
      return this.FocusService.updateData(data.id, data.data);
  }

  @Post('focus/all')
  async findAll(@Body() data: any) {
    return this.FocusService.findAll(data.limit);
  }
}