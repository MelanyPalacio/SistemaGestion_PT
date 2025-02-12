import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { Project } from '../project/project.entity';

@Entity('administrators')
export class Administrator {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => User, user => user.administrator)
  users: User[];

  @OneToMany(() => Project, project => project.administrator)
  projects: Project[];
}

