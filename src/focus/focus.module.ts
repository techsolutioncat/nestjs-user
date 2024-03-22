import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../config/database.config';
import { Focus } from './focus.entity';
import { FocusController } from './focus.controller';
import { FocusService } from './focus.service';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), TypeOrmModule.forFeature([Focus])],
  controllers: [FocusController],
  providers: [FocusService],
})
export class FocusModule {}