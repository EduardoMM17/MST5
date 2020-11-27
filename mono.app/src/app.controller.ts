import { Controller, Logger,  } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { StringService } from './string.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(
    private stringService: StringService
  ) {}

  @MessagePattern({ subject: 'callSayHello', type: 'get'})
  async callSayHello({ text }){
    this.logger.log('callSayHello tcp' + text.toString());
    return this.stringService.sayHelloBack(text);
  }
}
