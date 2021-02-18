import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'first_name'})
    firsName: string;

    @Column({name:'last_name'})
    lastName: string;

    @Column()
    email: string;    


}
