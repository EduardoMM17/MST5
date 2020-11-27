import { Injectable } from '@nestjs/common';

@Injectable()
export class StringService {
    public sayHelloBack(message: string): string {
        if(message === "Hello"){
            return "Hello back!";
        }
        return "You are not saying hello!";
    }
}