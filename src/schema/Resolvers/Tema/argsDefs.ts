import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ArgsInsertTema
{
    @Field()
    tema: string;
    
    @Field()
    url_imagen: string;
}