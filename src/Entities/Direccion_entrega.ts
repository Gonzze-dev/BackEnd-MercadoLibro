import {ObjectType } from "type-graphql";
import { Entity } from "typeorm";

import { Direccion } from "./Direccion";


@ObjectType()
@Entity()
export class Direccion_entrega extends Direccion
{

}
