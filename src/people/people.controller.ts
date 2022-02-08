import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common'; 
import { PeopleDto } from './interfaces/people.dto';

@Controller('people')
export class PeopleController {
    @Get()
    getPeoples() {
        return 'we get all peoples';
    }
}
