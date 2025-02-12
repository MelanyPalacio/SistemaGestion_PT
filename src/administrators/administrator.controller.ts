import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { Administrator } from './administrator.entity';

@Controller('administrators')
export class AdministratorController {
  constructor(private readonly administratorService: AdministratorService) {}

  @Get()
  async findAll(): Promise<Administrator[]> {
    return this.administratorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Administrator> {
    return this.administratorService.findOne(id);
  }

  @Post()
  async create(@Body() administrator: Partial<Administrator>): Promise<Administrator> {
    return this.administratorService.create(administrator);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() administrator: Partial<Administrator>,
  ): Promise<Administrator> {
    return this.administratorService.update(id, administrator);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.administratorService.remove(id);
  }
}
