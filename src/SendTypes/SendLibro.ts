import { Field, Int, ObjectType } from "type-graphql";
import { Libro } from "../Entities/Libro";

@ObjectType()
export class SendLibro
{
    @Field()
    message: string = "";

    @Field()
    success:boolean = false;

    @Field(type => Int)
    status: number = 0

    @Field(type => Int)
    page: number = 0

    @Field(type => Int)
    totalPage: number = 0

    @Field(type => [Libro], {nullable: true})
    libro: Libro[] = []
}