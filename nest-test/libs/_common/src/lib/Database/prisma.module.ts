import { Global, Module } from '@nestjs/common';
import { repositories } from './prisma.model';

@Global()
@Module({
  providers: [...repositories],
  exports: [...repositories],
})
export class DataBaseModule {}
