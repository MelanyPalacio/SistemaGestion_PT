import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Administrator } from '../administrators/administrator.entity';
import { UserProject } from '../user_project/user_project.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ['administrator', 'user'] })
  role: 'administrator' | 'user';

  @ManyToOne(() => Administrator, administrator => administrator.users, { nullable: true })
  administrator: Administrator;

  @OneToMany(() => UserProject, userProject => userProject.user)
  userProjects: UserProject[];
}