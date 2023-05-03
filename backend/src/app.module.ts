import {Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import {UsersModule} from './users/users.module';
import { RolesModule } from './roles/roles.module';
import {ConfigModule} from "@nestjs/config";
import {AuthModule} from "./auth/auth.module";

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
        UsersModule,
        RolesModule,
        AuthModule,
    ],
})
export class AppModule {
}
