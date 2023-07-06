import { Injectable } from '@nestjs/common';
import {CreateApplicationDto} from "./dto/create-application.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Application} from "./applications.model";
import {Request} from "express";
import {User} from "../users/users.model";
interface Req extends Request{
    user:User
}

@Injectable()
export class ApplicationsService {
    constructor(@InjectModel(Application) private applicationRepository: typeof Application) {
    }
    async createApplication(dto: CreateApplicationDto) {
        const application = await this.applicationRepository.create(dto)
        return application
    }

    async responseToApplication(dto:CreateApplicationDto,id){
        const application = await this.applicationRepository.update(dto,{where:{id}})
        return application
    }

    async getAllPendingApplications(){
        const applications = await this.applicationRepository.findAll({where:{ready:false}})
        return applications
    }

    async getProcessedApplications(req:Req){
        const user = req.user
        const applications = await this.applicationRepository.findAll({where:{ready:true,userId:user.id}})
        return applications
    }
    async deleteViewedApplication(id){
        await this.applicationRepository.destroy({where: {id}})
    }
}
