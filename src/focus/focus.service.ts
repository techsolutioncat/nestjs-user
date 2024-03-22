import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Focus } from './focus.entity';

@Injectable()
export class FocusService {
    constructor(
        @InjectRepository(Focus)
        private readonly FocusRepository: Repository<Focus>
    ) { }

    async createData(FocusData: Partial<Focus>): Promise<Focus> {
        const data = this.FocusRepository.create(FocusData);
        return this.FocusRepository.save(data);
    }

    async updateData(id: any, FocusData: Partial<Focus>): Promise<Focus> {
        const data = this.FocusRepository.update(id, FocusData);
        return this.FocusRepository.findOne(id);
    }
}
