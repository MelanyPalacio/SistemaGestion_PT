import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProject } from './user_project.entity';
import { User } from '../user/user.entity';
import { Project } from '../project/project.entity';

@Injectable()
export class UserProjectService {
  constructor(
    @InjectRepository(UserProject)
    private userProjectRepository: Repository<UserProject>,
  ) {}

  async findAll(): Promise<UserProject[]> {
    return this.userProjectRepository.find({ relations: ['user', 'project'] });
  }

  async findOne(id: number): Promise<UserProject> {
    const userProject = await this.userProjectRepository.findOne({ where: { id }, relations: ['user', 'project'] });
    if (!userProject) {
      throw new Error(`UserProject with id ${id} not found`);
    }
    return userProject;
  }

  async create(userId: number, projectId: number): Promise<UserProject> {
    const userProject = this.userProjectRepository.create({
      user: { id: userId } as User,
      project: { id: projectId } as Project,
    });
    return this.userProjectRepository.save(userProject);
  }

  async update(id: number, userId: number, projectId: number): Promise<UserProject> {
    await this.userProjectRepository.update(id, {
      user: { id: userId } as User,
      project: { id: projectId } as Project,
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userProjectRepository.delete(id);
  }
}
