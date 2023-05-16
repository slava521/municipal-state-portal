import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";

interface PersonalDataCreationAttrs {
    gender: string;
    birthday: string;
    phoneNumber:string;
    address: string;
    passport: string;
    SNILS: string;
    userId:number

}

@Table({tableName:'personal-data'})
export class PersonalData extends Model<PersonalData,PersonalDataCreationAttrs>{
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true, primaryKey:true})
    id: number;

    @Column({type:DataType.STRING,allowNull:true})
    gender: string;

    @Column({type:DataType.STRING,allowNull:true})
    birthday: string;

    @Column({type:DataType.STRING,allowNull:true})
    phoneNumber:string

    @Column({type:DataType.STRING,allowNull:true})
    address: string;

    @Column({type:DataType.STRING,allowNull:true})
    passport: string;

    @Column({type:DataType.STRING,allowNull:true})
    SNILS: string;

    @ForeignKey(()=>User)
    @Column({type:DataType.INTEGER})
    userId:number

    @BelongsTo(()=>User)
    author:User
}