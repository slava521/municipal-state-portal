import {Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {CreateApplicationDto} from "./dto/create-application.dto";
import {ApplicationsService} from "./applications.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Request} from "express";
import {User} from "../users/users.model";
interface Req extends Request{
    user:User
}

@Controller('applications')
export class ApplicationsController {
    constructor(private ApplicationsService:ApplicationsService) {
    }

    @Post()
    createApplication(@Body() dto:CreateApplicationDto){
        return this.ApplicationsService.createApplication(dto)
    }
    @Put('/:id')
    responseToApplication(@Body() dto:CreateApplicationDto,
                          @Param('id') id: string){
        return this.ApplicationsService.responseToApplication(dto,+id)
    }

    @Get()
    getAllPendingApplications(){
        return this.ApplicationsService.getAllPendingApplications()
    }

    @UseGuards(JwtAuthGuard)
    @Get('/user')
    getProcessedApplications(@Req() req:Req){
        return this.ApplicationsService.getProcessedApplications(req)
    }

    @Delete('/:id')
    deleteViewedApplication(@Param('id') id: string){
        this.ApplicationsService.deleteViewedApplication(+id)
    }
}
