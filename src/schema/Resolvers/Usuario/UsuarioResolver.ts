
import { Resolver, Query, Args, Mutation, Arg } from "type-graphql";
import { ArgsAgregarDireccion, ArgsAgregarProducto, ArgsInsertFav, ArgsLogin, ArgsSingUp } from "./argsDefs";

import { SendUsuario } from "../../../SendTypes/SendUsuario";

import { selectLoginType } from "../../Queries/Usuario/login";
import { SignUp } from "../../Mutations/Usuario/SignUp";

import { InsertFav } from "../../Mutations/Usuario/insertFav";
import { RealizarCompra } from "../../Mutations/Usuario/realizarCompra";
import { SendMercadoPago } from "../../../SendTypes/SendMercadoPago";
import { RemoveFav } from "../../Mutations/Usuario/removeFav";

import { QuitarProducto } from "../../Mutations/Usuario/quitarProducto";
import { EliminarProducto } from "../../Mutations/Usuario/eliminarProducto";
import { AgregarDireccion } from "../../Mutations/Usuario/agregarDireccion";
import { AgregarProducto } from "../../Mutations/Usuario/agregarProductos";

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

    @Mutation(() => SendUsuario)
    async agregarProducto(@Args() {cantidad, isbn, tokenUser}: ArgsAgregarProducto)
    {
        return await AgregarProducto(cantidad, isbn, tokenUser);
    }

    @Mutation(() => SendUsuario)
    async quitarProducto(@Args() {cantidad, isbn, tokenUser}: ArgsAgregarProducto)
    {
        return await QuitarProducto(cantidad, isbn, tokenUser);
    }

    @Mutation(() => SendUsuario)
    async eliminarProducto(@Args() {isbn, tokenUser}: ArgsInsertFav)
    {
        return await EliminarProducto(isbn, tokenUser);
    }

    @Mutation(() => SendUsuario)
    async agregarDireccion(@Args() {tokenUser, nombre,direccion, infoAdicional, dni, telefono, ciudad}: ArgsAgregarDireccion)
    {
        return await AgregarDireccion(tokenUser, 
                                        nombre,
                                        direccion,
                                        infoAdicional,
                                        dni,
                                        telefono,
                                        ciudad);
    }

    @Mutation(() => SendMercadoPago)
    async realizarCompra(@Arg('tokenUser') tokenUser: string)
    {
        return await RealizarCompra(tokenUser);
    }
}