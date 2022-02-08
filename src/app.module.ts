import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/common/index';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeopleModule } from './people/people.module';

@Module({
  imports: [PeopleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

