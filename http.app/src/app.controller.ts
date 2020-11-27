import { Controller, Post, Body, Logger } from '@nestjs/common';
import { StringService } from './string.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(
    private stringService: StringService,
  ) {}

  @Post('sayHello-lerna')
  async sayHelloLerna(@Body('message') message: string) {
    this.logger.log('Saying hello ' + message.toString());
    return this.stringService.sayHelloLerna(message);
  }

}
