import {Body, Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('posts')
export class PostsController {
    constructor(private postsService:PostsService) {
    }
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto:CreatePostDto,
               @UploadedFile() image){
        return this.postsService.create(dto,image)
    }

    @Get()
    getPosts(){
        return this.postsService.getAll()
    }
}
