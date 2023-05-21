import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";


interface ApplicationCreationAttrs {
    userId: number;
    ready:boolean;
    title:string;
    description:string;
    status:string;

}

@Table({tableName:'applications'})
export class Application extends Model<Application,ApplicationCreationAttrs>{
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true, primaryKey:true})
    id: number;

    @ForeignKey(()=>User)
    @Column({type:DataType.INTEGER})
    userId: number;

    @Column({type:DataType.BOOLEAN,allowNull:false})
    ready: boolean;

    @Column({type:DataType.STRING,allowNull:false})
    title: string;

    @Column({type:DataType.STRING,allowNull:false})
    description: string;

    @Column({type:DataType.STRING,allowNull:true})
    status: string;
}