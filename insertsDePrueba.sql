--PAIS
INSERT INTO pais (nombre)
VALUES  ('Argentina'),
        ('Chile'),
        ('Uruguay'),
        ('Colombia'),
        ('Paraguay'),
        ('Brasil'),
        ('Bolivia'),
        ('Bahamas'),
        ('Costa Rica'),
        ('Cuba'),
        ('Republica Dominica'),
        ('Ecuador'),
        ('El Salvador'),
        ('Granada'),
        ('Mexico');

--PROVINCIA
INSERT INTO provincia (nombre, id_pais)
VALUES  ('Entre Rios', 1),
        ('Buenos Aires', 1),
        ('Puente Alto', 2),
        ('Maipú', 2),
        ('Santiago', 2),
        ('Cordoba', 1),
        ('Rosario', 1),
        ('Salta', 1),
        ('Santa Fe', 1),
        ('Cuba', 1),
        ('Montevideo', 3),
        ('Salto', 3),
        ('Tacuarembó', 3),
        ('Flores', 3),
        ('Florida', 3);

--CIUDAD
INSERT INTO ciudad (cp, nombre, id_provincia)
VALUES  (2820, 'Gualeguaychuu', 1),
        (3260, 'Concepcion del Uruguay', 1),
        (3100, 'Parana', 1),
        (3174, 'Rosario del Tala', 1),
        (2840, 'Gualeguay', 1),
        (4312, 'Mar del plata', 3),
        (1233, 'Bahia blanca', 3),
        (1234, 'Tigre', 3),
        (3105, 'Diamante', 3),
        (3280, 'Colon', 1),
        (3206, 'La Paz', 1),
        (3185, 'Federacion', 1),
        (2139, 'Villaguay', 1),
        (2421, 'Nogoya', 1),
        (2881,'San salvador', 1);

--IDIOMA
INSERT INTO idioma (nombre)
VALUES  ('Español'),
        ('Ingles'),
        ('Japones'),
        ('Chino'),
        ('Portugues'),
        ('Frances'),
        ('Arabe'),
        ('Hindi'),
        ('Ruso'),
        ('Urdu'),
        ('Indonesio'),
        ('Aleman'),
        ('Marati'),
        ('Turco'),
        ('Tamil');

--AUTOR
INSERT INTO autor (nombre)
VALUES  ('Gonzalo Errandonea'),
        ('Gonzalo Romero'),
        ('Alexis Brunetti'),
        ('Gabriel Ramos'),
        ('Tomas Alaluf'),
        ('Mauro Mendoza'),
        ('Pablo Pecsio'),
        ('Esteban Schab'),
        ('Ernesto Ledesma'),
        ('Walter Bel'),
        ('Emiliano Montenegro'),
        ('Marcos Mendoza'),
        ('Juan Mendoza'),
        ('Olga Lopez'),
        ('Vanesa Lopez');

--TEMA
INSERT INTO tema (nombre, url_imagen)
VALUES  ('Drama', 'https://imgs.search.brave.com/D8VOEj_PQgTq9aopCN_jDUoIRUQ4RzcuRYhZNXsHARQ/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/TkF5bk40NDA2T2s2/d2xFTV9HN1JBSGFF/SyZwaWQ9QXBp'),
        ('Terror', 'https://imgs.search.brave.com/HQAtf1U9jTFs2v6m9hpLnRcPazdchdVXs_gLvjcLdM0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZXZlbnRvc3pvbWJp/ZXMuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE1LzA3LzEt/b3RoZXItem9tYmll/LWhhbmRzLWhvcnJv/ci13YWxscGFwZXIu/anBn'),
        ('Accion', 'https://imgs.search.brave.com/AA-w1vTvRi3qBKLuRR_qKrm6DML1z3kR-KtWJqNbZRA/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/QWhPZjRmRENCMjVU/Qnl0NDRTbEhRSGFF/SyZwaWQ9QXBp'),
        ('Comedia', 'https://imgs.search.brave.com/qPZaYJhZ0MqEALHdyO7gN1lff51_yLu_wMNHnzZ-YVI/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Y/ZXUxVWdrbVJTOHhV/bWJncWZLZU93SGFF/OCZwaWQ9QXBp'),
        ('Aventura', 'https://imgs.search.brave.com/G8IrN0ZCSRtH1ib-I8pVzH8wAYcp0lVJuucGXFbteQ0/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC41S1pZN09w/R1R1VnFfWC0wQnox/bURRSGFFSyZwaWQ9/QXBp'),
        ('Fantasia', 'https://imgs.search.brave.com/2sxTLVV-BtZsVMXff11F9lnNQxU2JTF1MS3sPLPbjVc/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/TnRBY181STJNbm9u/WXVoeW1QYWZRSGFF/SyZwaWQ9QXBp'),
        ('Ciencia ficcion', 'https://imgs.search.brave.com/Dmpsn40FF3muo9F1BWtK10vUHgHJO6DAzxjQefx7bz0/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC4xOWN3UEw2/aUQ4cFgySHJULXVj/cWRRSGFFbyZwaWQ9/QXBp'),
        ('Manga', 'https://imgs.search.brave.com/IdN88ywfDgH6wkqi_A1LmKyMXBV1ipUDWoccEWVP7Vo/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5va09CWE1G/eF9JMkxzOG0zYzc3/djVBSGFFSyZwaWQ9/QXBp'),
        ('Infantil', 'https://imgs.search.brave.com/KzCVX2yKEYryp8Et173Ajg093eVJVMUnMQY4vY98DEs/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/UW4tQWc0dHB1b0p3/VEktTGh1UUZBSGFF/byZwaWQ9QXBp'),
        ('Poesia', 'https://imgs.search.brave.com/u4zW1UECLyMMHqM1irHC13z0yU1OvWX_okf7DuacenE/rs:fit:905:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/c1Y0aHJ5THY2bjRp/ZlFnbjBNMU13SGFE/NCZwaWQ9QXBp'),
        ('Teatro', 'https://imgs.search.brave.com/hBUJo1UUX2kLjrHlO06hnKyDCbkEifIF8LGj_oD7K6g/rs:fit:761:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/YnJRWkJueGdBWnh6/TVkzRXFLUHNBSGFF/biZwaWQ9QXBp'),
        ('Cocina', 'https://imgs.search.brave.com/vBpKm8YNSYGPXzO_OkJq_61YdD6NGqOHLY72RSRi11k/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/Z25fM2JERzRGeW9E/RXdpV3pDbU9nSGFF/byZwaWQ9QXBp'),
        ('Autoayuda', 'https://imgs.search.brave.com/fapNBDVm9t8urdwwxlfQyEsWaNySJEaOKWIdaKQjqmk/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/b1RDUTlTRVJRNnlL/RDJhaTZsQjBBSGFF/OCZwaWQ9QXBp'),
        ('Salud', 'https://imgs.search.brave.com/loAD7eBp_9m0Y3hnm5O4qViTVFu6cKCtb2ubijeuNTU/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/b2pYMlJKS2xJb2Qy/ZEtFRmloTFNnSGFF/NyZwaWQ9QXBp'),
        ('Economia', 'https://imgs.search.brave.com/YBcOLjCKffiGHx6JZXBEndDA5NIwoQo2a1AuW6XSZlU/rs:fit:480:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/TGZ4OU9uSTZuZU1M/b1hDV241ckVRSGFI/VSZwaWQ9QXBp');

--EDITORIAL
INSERT INTO editorial (nombre)
VALUES  ('Acantilado'),
        ('Aguilar'),
        ('Akal'),
        ('Alba'),
        ('Alfaguara'),
        ('Alianza'),
        ('Almadía'),
        ('Anagrama'),
        ('Critica'),
        ('Debolsillo'),
        ('Alpha Decay'),
        ('Ariel'),
        ('Atalanta'),
        ('Gallo Nero'),
        ('Impedimenta');

INSERT INTO public.usuario(
	nombre, correo, contrasenia)
	VALUES ('Gonzalo Errandonea', 'gonzalo118@gmail.com', '1234');
    
INSERT INTO public.usuario(
	nombre, correo, contrasenia, admin)
	VALUES ('Gonzalo Romero', 'gonzaloRomero@hotmail.com', '1234', true);

INSERT INTO libro (isbn, url_imagen, titulo, fecha_edicion, 
                    precio, stock, descripcion, id_editorial, id_idioma)
VALUES  ('123-234-513', 'https://http2.mlimages.com/123-234-513', 'Harry Potter y la piedra filosofal', '02/03/1998', 100.00, 10, 'descripcion de Harry Potter y la piedra filosofal', 1, 1),
        ('345-345-432', 'https://http2.mlimages.com/345-345-432', 'Harry Potter y la piedra filosofal', '02/03/1998', 123.00, 10, 'descripcion de Harry Potter y la piedra filosofal',3, 2),
        ('456-546-232', 'https://http2.mlimages.com/456-546-232', 'Las Crónicas de Narnia', '01/01/1998', 634.00, 10, 'descripcion de Las Crónicas de Narnia', 2, 1),
        ('456-546-453', 'https://http2.mlimages.com/456-546-453', 'Don Quijote de La Mancha', '20/08/1999', 10354.00, 10, 'descripcion de Don Quijote de La Mancha', 6, 1),
        ('234-543-251', 'https://http2.mlimages.com/234-543-251', 'Juego De Tronos', '21/09/2000', 10032.00, 10, 'descripcion de Juego De Tronos', 4, 1),
        ('342-543-673', 'https://http2.mlimages.com/342-543-673', 'Choque De Reyes', '12/07/2001', 1233.00, 10, 'descripcion de Choque De Reyes', 7, 1),
        ('880-954-322', 'https://http2.mlimages.com/880-954-322', 'La Razon De Estar Con Tigo', '12/04/1898', 1234.135, 10, 'descripcion de La Razon De Estar Con Tigo', 2, 1),
        ('321-432-134', 'https://http2.mlimages.com/321-432-134', 'Diario Del Fin Del Mundo', '13/06/1498', 1763.00, 10, 'descripcion de Diario Del Fin Del Mundo', 1, 2),
        ('123-213-466', 'https://http2.mlimages.com/123-213-466', 'Luna De Pluton', '15/03/1868', 9500.265, 10, 'descripcion de Luna De Pluton', 1, 1),
        ('564-765-957', 'https://http2.mlimages.com/564-765-957', 'Festibal de la Blasfemia', '22/05/2002', 12310.123, 10, 'descripcion de Festibal de la Blasfemia', 7, 2),
        ('877-345-624', 'https://http2.mlimages.com/877-345-624', 'Valle de La Calma', '10/06/2002', 54654.43, 10, 'descripcion de Valle de La Calma', 15, 1),
        ('573-937-543', 'https://http2.mlimages.com/573-937-543', 'Las Mujeres de Federico', '11/07/2002', 1235.265, 10, 'descripcion de Las Mujeres de Federico', 10, 2),
        ('345-854-383', 'https://http2.mlimages.com/345-854-383', 'La Odisea de Homero', '26/02/2002', 11235.232, 10, 'descripcion de La Odisea de Homero', 14, 1),
        ('456-456-564', 'https://http2.mlimages.com/456-456-564', 'La Macha', '21/03/2000', 45645.222, 10, 'descripcion de La Macha', 13, 3),
        ('456-543-453', 'https://http2.mlimages.com/456-543-453', 'The lliad', '30/04/1998', 123123.25, 10, 'descripcion de The lliad', 9, 5);

--ASIGNAR_TEMA
INSERT INTO public.asignar_tema(isbn, id_tema)
	VALUES ('456-546-232', 1),
		   ('456-546-232', 2),
		   ('123-213-466', 10);

--FAVORITOS
INSERT INTO favorito (id_usuario, isbn)
VALUES (1, '456-546-232'),
        (1,'123-213-466');

--DIRECCION ENTREGA
INSERT INTO direccion_entrega (calle, numero, piso_departamento, dni, id_usuario, cp)
VALUES ('Escarguache', 4122, null, 42464430, 1,2820);

--ORDEN
INSERT INTO public.orden(
	 total, codigo_cupon, id_usuario, id_direccion_entrega)
	VALUES (2132, null, 1, 1);

--ORDEN DETALLE
INSERT INTO public.orden_detalle(
	precio, cantidad, id_orden, isbn)
	VALUES (10, 2, 1, '456-546-232'),
            (10, 2, 1, '345-854-383');

--CARRITO
INSERT INTO public.linea_carrito(
	cantidad, "libroIsbn", id_usuario)
	VALUES (10, '123-234-513', 1),
                (3, '234-543-251', 1),
                (1, '123-213-466', 1);

--PUNTUACION
INSERT INTO public.puntuacion(
	usuario_libro, puntuacion, id_usuario, isbn)
	VALUES ('1-123-234-513', 3, 1, '123-234-513');

--OPINION
INSERT INTO public.opinion(
	usuario_libro, comentario, id_usuario, isbn)
	VALUES ('1-123-234-513', 'No me gusto nada, igual nunca lo lei', 1, '123-234-513');