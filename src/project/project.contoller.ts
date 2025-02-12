import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.entity';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Project> {
    return this.projectService.findOne(id);
  }

  @Post()
  async create(@Body() project: Partial<Project>): Promise<Project> {
    return this.projectService.create(project);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() project: Partial<Project>): Promise<Project> {
    return this.projectService.update(id, project);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.projectService.remove(id);
  }
}
