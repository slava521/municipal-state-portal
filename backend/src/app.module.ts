import {Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import {UsersModule} from './users/users.module';
import {RolesModule} from './roles/roles.module';
import {ConfigModule} from "@nestjs/config";
import {AuthModule} from "./auth/auth.module";
import {PostsModule} from "./posts/posts.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from "path";
import {PersonalDataModule} from './personal-data/personal-data.module';
import { ApplicationsModule } from './applications/applications.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_POST),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [],
            autoLoadModels: true,
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'static'),
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        PersonalDataModule,
        ApplicationsModule,
    ],
})
export class AppModule {}
