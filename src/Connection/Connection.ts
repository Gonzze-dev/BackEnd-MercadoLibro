import { DataSource } from "typeorm";
import { Autor } from "../Entities/Autor";
import { Ciudad } from "../Entities/Ciudad";
import { Cupon } from "../Entities/Cupon";
import { Direccion } from "../Entities/Direccion";
import { Direccion_entrega } from "../Entities/Direccion_entrega";
import { Editorial } from "../Entities/Editorial";
import { Idioma } from "../Entities/Idioma";
import { Libro } from "../Entities/Libro";
import { Linea_carrito } from "../Entities/Linea_carrito";
import { Opinion } from "../Entities/Opinion";
import { Orden } from "../Entities/Orden";
import { Orden_detalle } from "../Entities/Orden_detalle";
import { Pais } from "../Entities/Pais";
import { Provincia } from "../Entities/Provincia";
import { Puntuacion } from "../Entities/Puntuacion";
import { Tema } from "../Entities/Tema";

//Entities
import { Usuario } from "../Entities/Usuario";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "test",
    entities: [Pais, 
               Provincia,
               Ciudad,
               Idioma,
               Autor,
               Tema,
               Editorial,
               Opinion,
               Puntuacion,
               Direccion,
               Direccion_entrega,
               Cupon,
               Orden,
               Orden_detalle,
               Linea_carrito,
               Libro,
               Usuario],
    synchronize: true,
    logging: true,
});