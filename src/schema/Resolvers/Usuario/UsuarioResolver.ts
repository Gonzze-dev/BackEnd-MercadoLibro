
import { Resolver, Query, Args, Mutation, Arg } from "type-graphql";
import { SendUsuario } from "../../../SendTypes/SendUsuario";

import { selectLoginType } from "../../Queries/Usuario/login";
import { SignUp } from "../../Mutations/Usuario/SignUp";

import { ArgsInsertFav, ArgsLogin, ArgsSingUp } from "./argsDefs";
import { InsertFav } from "../../Mutations/Usuario/insertFav";
import { RealizarCompra } from "../../Mutations/Usuario/realizarCompra";
import { SendMercadoPago } from "../../../SendTypes/SendMercadoPago";
import { RemoveFav } from "../../Mutations/Usuario/removeFav";

@Resolver()
export class UsuarioResolver
{
    @Query(() => SendUsuario)
    async login(@Args() args: ArgsLogin)
    {
        return await selectLoginType(args);
    }

    @Mutation(() => SendUsuario)
    async singUp(@Args() {nombre, correo, contrasenia}: ArgsSingUp)
    {
        return await SignUp(nombre, correo, contrasenia);
    }
    
    @Mutation(() => SendUsuario)
    async insertFav(@Args() {isbn, tokenUser}: ArgsInsertFav)
    {
        return await InsertFav(isbn, tokenUser);
    }

    @Mutation(() => SendUsuario)
    async removeFav(@Args() {isbn, tokenUser}: ArgsInsertFav)
    {
        return await RemoveFav(isbn, tokenUser);
    }

    @Mutation(() => SendMercadoPago)
    async realizarCompra(@Arg('tokenUser') tokenUser: string)
    {
        return await RealizarCompra(tokenUser);
    }
}