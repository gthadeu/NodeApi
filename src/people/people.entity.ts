
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class People {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({length: 50})
   name: string;

   @Column()
   birthdate: Date;

   @Column({length: 11, nullable: false})
   cpf: string;

   @Column({length: 9, nullable: false})
   rg: string;

   @Column()
   telefone: string;

   @Column()
   email: string;

}