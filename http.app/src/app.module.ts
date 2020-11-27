import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StringService } from './string.service';
import { MonoAppModule } from '@Nestjs/newClient';

@Module({
  imports: [ MonoAppModule ],
  controllers: [AppController],
  providers: [StringService],
})
export class AppModule {}
