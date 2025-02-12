import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrator } from './administrator.entity';

@Injectable()
export class AdministratorService {
  constructor(
    @InjectRepository(Administrator)
    private administratorRepository: Repository<Administrator>,
  ) {}

  async findAll(): Promise<Administrator[]> {
    return this.administratorRepository.find({ relations: ['users', 'projects'] });
  }

  async findOne(id: number): Promise<Administrator> {
    const admin = await this.administratorRepository.findOne({ where: { id }, relations: ['users', 'projects'] });
    if (!admin) {
      throw new Error(`Administrator with id ${id} not found`);
    }
    return admin;
  }

  async create(administrator: Partial<Administrator>): Promise<Administrator> {
    const newAdmin = this.administratorRepository.create(administrator);
    return this.administratorRepository.save(newAdmin);
  }

  async update(id: number, administrator: Partial<Administrator>): Promise<Administrator> {
    await this.administratorRepository.update(id, administrator);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.administratorRepository.delete(id);
  }
}
