import { Injectable } from '@nestjs/common';
import { MonoAppService } from '@Nestjs/newClient';

@Injectable()
export class StringService {

    constructor (
        private readonly clientMonoAppService: MonoAppService,
    ){}

    public sayHelloLerna(text: string) {
        return this.clientMonoAppService.callSayHello(text);
    }
}