import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StringService } from './string.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [StringService],
})
export class AppModule {}
