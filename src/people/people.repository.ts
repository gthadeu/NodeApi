import { People } from './people.entity';
import { EntityRepository, Repository } from 'typeorm';
import { PeopleDto } from './interfaces/people.dto';

@EntityRepository(People)
export class PeopleRepository extends Repository<People> {
  createPeople = async (peopleDto: PeopleDto) => {
    return await this.save(peopleDto);
  };
}