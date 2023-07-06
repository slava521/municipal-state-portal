export class CreateApplicationDto{
    readonly userId: number;
    readonly ready:boolean;
    readonly title:string;
    readonly description:string;
    readonly status:string;
}