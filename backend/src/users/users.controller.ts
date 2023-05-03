import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService) {}

    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.userService.createUser(userDto);
    }

    @Get()
    getAll(){
        return this.userService.getAllUsers();
    }

    @Post('/role')
    addRole(@Body() dto:AddRoleDto){
        return this.userService.addRole(dto);
    }

    @Post('/ban')
    ban(@Body() dto:BanUserDto){
        return this.userService.ban(dto);
    }
}
