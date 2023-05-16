import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {PersonalData} from "./personal-data.model";
import {CreatePersonalDataDto} from "./dto/create-personal-data.dto";

@Injectable()
export class PersonalDataService {
    constructor(@InjectModel(PersonalData) private personalDataRepository: typeof PersonalData) {
    }
    async createData(id:number){
        const nullData = {
            gender:'',
            birthday:'',
            phoneNumber:'',
            address:'',
            passport:'',
            SNILS:'',
            userId:id
        }
        const data = await this.personalDataRepository.create(nullData)
        return data
    }

    async getData(id:number){
        const data = await this.personalDataRepository.findOne({where:{userId:id}})
        return data
    }

    async addData(dto:CreatePersonalDataDto) {
        const data = await this.personalDataRepository.update(dto,{where:{userId:dto.userId}})
        return data

    }
}
