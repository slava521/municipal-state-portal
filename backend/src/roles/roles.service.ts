import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import {CreateRoleDto} from "./dto/create-role.dto";

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private userRepository: typeof Role) {}
    async createRole (dto:CreateRoleDto){
        const role = await this.userRepository.create(dto)
        return role
    }
    async getRoleByValue(value:string){
        const role = await this.userRepository.findOne({where:{value}})
        return role
    }
}
