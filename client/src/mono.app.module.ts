import { Module } from '@nestjs/common';
import { MonoAppService } from './mono.app..service';

@Module({ providers: [MonoAppService], exports: [MonoAppService] })
export class MonoAppModule {}