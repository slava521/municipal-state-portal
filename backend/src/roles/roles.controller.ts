import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import {RolesService} from "./roles.service";

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
}
