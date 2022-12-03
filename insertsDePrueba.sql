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
VALUES  ('J.K Rowling'),
        ('George R.R Martin'),
        ('Dolores Redondo');

--TEMA
INSERT INTO tema (nombre, url_imagen)
VALUES
        ('Fantasia', 'https://cdn.pixabay.com/photo/2016/04/04/20/34/treehouse-1308108_960_720.jpg'),
        ('Ciencia ficcion', 'https://cdn.pixabay.com/photo/2018/03/13/15/57/steampunk-3222894_960_720.jpg'),
        ('Suspenso', 'https://cdn.pixabay.com/photo/2019/09/22/16/50/tunnel-4496526_960_720.jpg'),
        ('Thriller', ' https://cdn.pixabay.com/photo/2014/07/24/21/35/mortality-401222_960_720.jpg'),
        ('Ficcion', 'https://cdn.pixabay.com/photo/2016/09/18/08/45/science-fiction-1677542_960_720.jpg');

--EDITORIAL
INSERT INTO editorial (nombre)
VALUES  ('Salamandra Infantil y Juvenil'),
        ('Salamandra'),
        ('Vintage Espanol'),
        ('Ediciones Destino');

--LIBRO
INSERT INTO libro (isbn, url_imagen, titulo, fecha_edicion, 
                    precio, stock, descripcion, id_editorial, id_idioma)
VALUES  ('8418174072', 'https://m.media-amazon.com/images/I/91NW7CBaVwL.jpg', 'Harry Potter y la piedra filosofal', '12/10/2020',  6500.00,  6,  'Sumérgete en esta magnífica edición especial de Harry Potter y la piedra filosofal, obra del prestigioso estudio MinaLima, responsable del diseño gráfico de las películas de la saga «Harry Potter» y de Animales fantásticos. <br/> En esta edición especial de Harry Potter y la piedra filosofal, el texto completo e íntegro de la obra original de J.K. Rowling va acompañado por hermosas ilustraciones a todo color en casi todas las páginas, un diseño excelente y varias sorpresas interactivas de ingeniería en papel, obra del célebre estudio MinaLima. Una nueva forma de descubrir la carta de admisión de Harry a Hogwarts, la entrada mágica al callejón Diagon, el suntuoso festín en el Gran Salón de Hogwarts...', 1, 1),
 ( '8478885196','https://m.media-amazon.com/images/I/81k9yx9N5+L.jpg','Harry Potter y el prisionero de Azkaban (Harry Potter 3)','20/02/2000',5399.00,3, 'Por la cicatriz que lleva en la frente, sabemos que Harry Potter no es un niño como los demás, sino el héroe que venció a lord Voldemort, el más temible y maligno mago de todos los tiempos y culpable de la muerte de los padres de Harry. Desde entonces, Harry no tiene más remedio que vivir con sus pesados tíos y su insoportable primo Dudley, todos ellos muggles, o sea, personas no magas, que desprecian a su sobrino debido a sus poderes.',2, 1),
 ( '1644736136','https://m.media-amazon.com/images/I/91RFD8825LL.jpg','Juego de Tronos Canción de Hielo y Fuego','21/07/2022',8150.00,2,'En el legendario mundo de los Siete Reinos, lord Stark y su familia se encuentran en el centro de un conflicto que desatará todas las pasiones y la más mortal de las batallas... Juego de tronos es el primer volumen de Canción de hielo y fuego, la monumental saga de fantasía épica del escritor George R. R. Martin que ha vendido más de 20 millones de ejemplares en todo el mundo.De la saga que inspiró la filmación de la aclamada serie televisiva de HBO: Game of Thrones.En el legendario mundo de los Siete Reinos, donde el verano puede durar décadas y el invierno toda una vida, y donde rastros de una magia inmemorial surgen en los rincones más sombríos, la tierra del norte, Invernalia, está resguardada por un colosal muro de hielo que detiene a fuerzas oscuras y sobrenaturales. En este majestuoso escenario, lord Stark y su familia se encuentran en el centro de un conflicto que desatará todas las pasiones: la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder, la lujuria y el incesto, todo ello para ganar la más mortal de las batallas: el trono de hierro, una poderosa trampa que atrapará a los personajes... y al lector.',3,1),
 ( '8423362477','https://m.media-amazon.com/images/I/71NtjKt82VL.jpg','Esperando al diluvio: 1591 (Áncora & Delfín)','01/11/2022',2599.00,6,'Entre los años 1968 y 1969, el asesino al que la prensa bautizaría como John Biblia mató a tres mujeres en Glasgow. Nunca fue identificado y el caso todavía sigue abierto hoy en día. En esta novela, a principios de los años ochenta, el investigador de policía escocés Noah Scott Sherrington logra llegar hasta John Biblia, pero un fallo en su corazón en el último momento le impide arrestarlo. A pesar de su frágil estado de salud, y contra los consejos médicos y la negativa de sus superiores para que continúe con la persecución del asesino en serie, Noah sigue una corazonada que lo llevará hasta el Bilbao de 1983. Justo unos días antes de que un verdadero diluvio arrase la ciudad.',4,1);


INSERT INTO public.usuario(
	nombre, correo, contrasenia)
	VALUES ('Gonzalo Errandonea', 'gonzalo118@gmail.com', '1234');
    
INSERT INTO public.usuario(
	nombre, correo, contrasenia, admin)
	VALUES ('Gonzalo Romero', 'gonzaloRomero@hotmail.com', '1234', true);

--ESCRITO_POR
INSERT INTO escrito_por(isbn, id_autor)
VALUES 
        ('8418174072', 1),
        ('8478885196', 1),
        ('1644736136', 2),
        ('8423362477', 3);

--ASIGNAR_TEMA
INSERT INTO public.asignar_tema(isbn, id_tema)
VALUES
        ('8418174072', 2),
        ('8478885196', 2),
        ('1644736136', 1),
        ('1644736136', 5),
        ('8423362477', 4),
        ('8423362477', 3);

--DIRECCION ENTREGA
INSERT INTO direccion_entrega (direccion, "infoAdicional", dni, id_usuario, cp)
VALUES ('Escarguache 84', 'segundo piso', 42464430, 1, 2820);