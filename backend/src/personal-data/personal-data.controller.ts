import {Body, Controller, Get, Param, Put} from '@nestjs/common';
import {CreatePersonalDataDto} from "./dto/create-personal-data.dto";
import {PersonalDataService} from "./personal-data.service";

@Controller('personal-data')
export class PersonalDataController {
    constructor(private personalDataService:PersonalDataService) {
    }
    @Get('/:id')
    getPersonalData(@Param('id') id: string){
        return this.personalDataService.getData(+id)
    }

    @Put()
    addData(@Body() dto:CreatePersonalDataDto){
        return this.personalDataService.addData(dto)
    }

}
