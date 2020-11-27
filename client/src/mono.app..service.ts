
import { Injectable } from '@nestjs/common';
import { Client, ClientTCP, Transport } from '@nestjs/microservices';

@Injectable()
export class MonoAppService {

    @Client({ transport: Transport.TCP,  options: { host: '127.0.0.1', port: 8877 } })
    private readonly newClient: ClientTCP;

    async callSayHello(text: string){
        console.log("::callSayHello::", JSON.stringify(text));
        return this.newClient.send<Object, Object>({ subject: 'callSayHello', type: 'get' }, { text });
    }
}