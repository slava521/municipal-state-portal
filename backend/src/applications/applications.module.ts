import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Application} from "./applications.model";
import {JwtService} from "@nestjs/jwt/dist";

@Module({
  controllers: [ApplicationsController],
  providers: [ApplicationsService,JwtService],
  imports:[
    SequelizeModule.forFeature([User, Application]),
  ]
})
export class ApplicationsModule {}
