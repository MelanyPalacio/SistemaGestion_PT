import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserProjectService } from './user_project.service';
import { UserProject } from './user_project.entity';

@Controller('user-projects')
export class UserProjectController {
  constructor(private readonly userProjectService: UserProjectService) {}

  @Get()
  async findAll(): Promise<UserProject[]> {
    return this.userProjectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserProject> {
    return this.userProjectService.findOne(id);
  }

  @Post()
  async create(@Body() userProject: Partial<UserProject>): Promise<UserProject> {
    return this.userProjectService.create(userProject);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() userProject: Partial<UserProject>,
  ): Promise<UserProject> {
    return this.userProjectService.update(id, userProject);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.userProjectService.remove(id);
  }
}
