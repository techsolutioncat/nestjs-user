import { Module } from '@nestjs/common';
import { MiddlewareModule } from './middleware/middleware.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FocusModule } from './focus/focus.module';

@Module({
  imports: [MiddlewareModule, UserModule, FocusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
