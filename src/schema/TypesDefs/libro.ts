import {GraphQLObjectType, 
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLFloat} from 'graphql';

import { TAutor } from './autor';
import { TEditorial } from './editorial';
import { TIdioma } from './idioma';
import { TOpinion } from './opinion';
import { TPuntuacion } from './puntuacion';
import { Ttema } from './tema';

export const TLibro: GraphQLObjectType = new GraphQLObjectType({
name: 'libro',
fields: {
    isbn: {type: GraphQLID},
    url_imagen: {type: GraphQLString},
    titulo: {type: GraphQLString},
    fecha_edicion: {type: GraphQLString},
    precio: {type: GraphQLFloat},
    stock: {type: GraphQLInt},
    descripcion: {type: GraphQLString},
    fecha_ingreso: {type: GraphQLString},
    descuento: {type: GraphQLInt},
    idioma: {type: TIdioma},
    editorial: {type: TEditorial},
    autor: {type: new GraphQLList(TAutor)},
    tema: {type: new GraphQLList(Ttema)},
    opinion: {type: new GraphQLList(TOpinion)},
    puntuacion: {type: new GraphQLList(TPuntuacion)}
}
});