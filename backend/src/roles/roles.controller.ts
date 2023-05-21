import {Body, Controller, Get, Param, Post, Req, UseGuards} from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import {RolesService} from "./roles.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Request} from "express";
import {User} from "../users/users.model";
interface Req extends Request{
    user:User
}

@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}

    @Post()
    create(@Body() roleDto: CreateRoleDto){
        return this.rolesService.createRole(roleDto)
    }

    @Get('/:value')
    getByValue(@Param('value') value:string){
        return this.rolesService.getRoleByValue(value)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getUserRoles(@Req() req:Req){
        return this.rolesService.getUserRoles(req)
    }
}
