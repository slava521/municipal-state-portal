import {Module} from '@nestjs/common';
import {PersonalDataController} from './personal-data.controller';
import {PersonalDataService} from './personal-data.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {PersonalData} from "./personal-data.model";

@Module({
    controllers: [PersonalDataController],
    providers: [PersonalDataService],
    imports: [
        SequelizeModule.forFeature([User, PersonalData]),
    ],
    exports: [
        PersonalDataService
    ]
})
export class PersonalDataModule {
}
