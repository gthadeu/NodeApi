import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './people.entity';
import { PeopleRepository } from './people.repository';

@Module({
  imports: [TypeOrmModule.forFeature([People, PeopleRepository])],
  controllers: [PeopleController]
})
export class PeopleModule {}

