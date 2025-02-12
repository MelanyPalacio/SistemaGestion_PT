import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Administrator } from '../administrators/administrator.entity';
import { UserProject } from '../user_project/user_project.entity';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  creationDate: Date;

  @ManyToOne(() => Administrator, administrator => administrator.projects, { nullable: false })
  administrator: Administrator;

  @OneToMany(() => UserProject, userProject => userProject.project)
  userProjects: UserProject[];
}
