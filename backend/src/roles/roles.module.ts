import {Module} from '@nestjs/common';
import {RolesController} from './roles.controller';
import {RolesService} from './roles.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";
import {JwtService} from "@nestjs/jwt/dist";

@Module({
    controllers: [RolesController],
    providers: [RolesService,JwtService],
    imports: [
        SequelizeModule.forFeature([Role, User, UserRoles]),
    ],
    exports: [
        RolesService
    ]
})
export class RolesModule {
}
