import { Module } from '@nestjs/common';
import { ApplesunService } from './applesun.service';
import { ApplesunController } from './applesun.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Applesun } from 'src/domain/applesun.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Applesun])],
  controllers: [ApplesunController],
  providers: [ApplesunService]
})
export class ApplesunModule {}
