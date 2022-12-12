
import { Field, Int, ObjectType } from "type-graphql";
import { Libro } from "../Entities/Libro";

@ObjectType()
export class SendFavoritos
{
    @Field()
    message: string = "";

    @Field()
    success:boolean = false;

    @Field(type => Int)
    status: number = 0;

    @Field(type => [Libro], {nullable: true})
    libro: Libro[];
}