import { Controller, Post, Body } from '@nestjs/common';
import { FocusService } from './focus.service';

@Controller()
export class FocusController {
  constructor(private readonly FocusService: FocusService) { }
  private readonly secretKey = 'your_secret_key'; // Replace this with your own secret key

  @Post('focus/new')
  async createData(@Body() data: any) {
    if (data.id === 0) {
      this.FocusService.createData(data.data);
    } else {
      this.FocusService.updateData(data.id, data.data);
    }

    return this.FocusService.findAll(data.limit);
  }

  @Post('focus/all')
  async findAll(@Body() data: any) {
    return this.FocusService.findAll(data.limit);
  }

  @Post('focus/remove')
  async remove(@Body() data: any) {
    return this.FocusService.remove(data.id);
  }

}