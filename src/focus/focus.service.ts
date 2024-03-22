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
        return this.FocusRepository.findOne({where: {id: id}});
    }

    async findAll(limit: any): Promise<Focus[]> {
        return this.FocusRepository.find({
            order: {
                id: 'DESC' // Assuming 'id' is the field you want to sort by
            },
            take: limit * 6,
        });
    }

    async remove(id: any) {
        return this.FocusRepository.delete({id});
    }
}
