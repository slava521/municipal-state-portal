import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import {Post} from "./posts.model";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {FilesModule} from "../files/files.module";

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports:[
    SequelizeModule.forFeature([User,Post]),
      FilesModule
  ]
})
export class PostsModule {}
