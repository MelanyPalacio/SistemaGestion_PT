import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Project } from '../project/project.entity';

@Entity('users_projects')
export class UserProject {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.userProjects)
  user: User;

  @ManyToOne(() => Project, project => project.userProjects)
  project: Project;
}
