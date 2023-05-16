import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'

interface File{
    fieldname:string;
    originalname:string;
    encoding:string;
    mimetype:string;
    buffer: Buffer;
    size: number

}

@Injectable()
export class FilesService {
    async createFile(file:File):Promise<string>{
        try {
            console.log(typeof(file),file)
            const prevFileName=file.originalname.split('.')
            const type = prevFileName[prevFileName.length-1]
            let fileName = uuid.v4()+'.'+type
            const filePath = path.resolve(__dirname,'..','..','static')
            if (!fs.existsSync(filePath)){
                fs.mkdirSync(filePath,{recursive:true})
            }
            while (fs.existsSync(path.join(filePath,fileName))){
                fileName = uuid.v4()+'.'+type
            }
            fs.writeFileSync(path.join(filePath,fileName),file.buffer)
            return fileName
        }catch (e) {
            throw new HttpException('Произошла ошибка при записи файла',HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

}
