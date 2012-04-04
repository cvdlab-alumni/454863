//Basement, si suppone un altezza da terra di 1 metro

var b1 = SIMPLEX_GRID([
	[1],
	[2],
	[1]
	])

//Parte intorno la vasca frontale
var b2 = SIMPLEX_GRID([
	[-1, 20],
	[1, -9, 7],
	[1]
	]);

//Struttura sotto la vasca frontale, si suppone che la profondità sia di 50 cm
var b3 = SIMPLEX_GRID([
	[-1, 20],
	[-1, 9],
	[0.5]
	])

//Struttura in alto a sinistra
var b4 = SIMPLEX_GRID([
	[-1,8],
	[-17, 5],
	[1]
	]);

//Struttura centrale 1
var b5 = SIMPLEX_GRID([
	[-21, 15],
	[17],
	[1]
	]);

//Struttura centrale 2
var b6 = SIMPLEX_GRID([
	[-36, 3],
	[-4, 13],
	[1]
	])



//Struttura in basso a destra
var b7 = SIMPLEX_GRID([
	[-39, 12],
	[-4,1],
	[1]
	]);

//Angolo in basso a destra
var b8 = SIMPLEX_GRID([
	[-51, 1],
	[-4, 2],
	[1]
	]);

//Struttura a destra
var b9 = SIMPLEX_GRID([
	[-39, 8],
	[-4, 12],
	[1]
	]);

//Vasca di destra
var b10 = SIMPLEX_GRID([
	[-47, 4],
	[-5, 11],
	[0.5]
	])


//Struttura sotto i gradini
var b11 = SIMPLEX_GRID([
	[-36, 3],
	[1],
	[1]
	]);

//Gradino 1
var s1 = SIMPLEX_GRID([
	[-36, 3],
	[-1, 3],
	[0.5]
	]);

//Gradino 2
var s2 = SIMPLEX_GRID([
	[-36, 2],
	[-1, 3],
	[-0.5, 0.25]
	]);

//Gradino 3
var s3 = SIMPLEX_GRID([
	[-36, 1],
	[-1, 3],
	[-0.75, 0.25]
	])

var steps = STRUCT([s1, s2, s3]);

var basement = STRUCT([b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, steps])



//Muri di sinstra

var wall1 = SIMPLEX_GRID([
	[-1, 7.5],
	[-0.8, 0.4],
	[-1, 3]
	]);


var wall2 = SIMPLEX_GRID([
	[-1, 0.4],
	[-1, 9],
	[-0.5, 3.5]
	]);


var wall3 = SIMPLEX_GRID([
	[-1, 0.4],
	[-10, 12],
	[-1, 3]
	]);


var wall4 = SIMPLEX_GRID([
	[-1, 8],
	[-21.6, 0.4],
	[-1, 3]
	]);

var wall5 = SIMPLEX_GRID([
	[-8.6, 0.4],
	[-17, 5],
	[-1, 3]
	]);


var sxWalls = STRUCT([wall1, wall2, wall3, wall4, wall5])


//Muri di destra

var wall6 = SIMPLEX_GRID([
	[-37.7, 9.3],
	[-15.6, 0.4],
	[-1, 3]
	]);

var wall7 = SIMPLEX_GRID([
	[-47, 4],
	[-15.6, 0.4],
	[-0.5, 3.5]
	]);

var wall8 = SIMPLEX_GRID([
	[-50.6, 0.4],
	[-5, 11],
	[-0.5, 3.5]
	]);

var wall9  = SIMPLEX_GRID([
	[-47, 4],
	[-4.6, 0.4],
	[-0.5, 3.5]
	]);

var wall10 = SIMPLEX_GRID([
	[-41.1, 5.9],
	[-4.6, 0.4],
	[-1, 3]
	]);

var dxWalls = STRUCT([wall6, wall7, wall8, wall9, wall10])


//Muro fronte piscina

var poolWall = SIMPLEX_GRID([
	[-6.1, 20.4],
	[-15.6, 0.4],
	[-1, 3]
	]);



//Mura interne dependance
var wD1 = SIMPLEX_GRID([
	[-5, 0.5, -1, 2.5],
	[-20.6, 0.2],
	[-1, 3]
	])

var wD2 = SIMPLEX_GRID([
	[-6.8, 0.2],
	[-21.4, 0.6],
	[-1, 3]
	])

var wD3 = SIMPLEX_GRID([
	[-4.8, 0.2],
	[-17, 1, -1, 3],
	[-1, 3]
	])

var wD4 = SIMPLEX_GRID([
	[-1, 6, -1, 1],
	[-16.8, 0.2],
	[-1, 3]
	])


var wallsD = STRUCT([wD1, wD2, wD3, wD4])



//Mura interne struttura principale

var wallP1 = SIMPLEX_GRID([
	[-25, 9],
	[-7.3, 0.2],
	[-1, 3]
	]);

var wallP2 = SIMPLEX_GRID([
	[-30, 10],
	[-13.6, 0.2],
	[-1, 3]
	]);

var wallP3 = SIMPLEX_GRID([
	[-37.1, 5],
	[-11.3, 0.2],
	[-1, 3]
	])
	

var centralWall = SIMPLEX_GRID([
	[-31, 1],
	[-7.5, 6.1],
	[-1, 2]
	])



var wallsP = STRUCT([wallP1, wallP2, wallP3, centralWall])



//Creazione intelaiatura muro di vetro
var grid1 = SIMPLEX_GRID([
	[0.3, -3.6, 0.3],
	[0.2],
	[3]
	]);

var grid2 = SIMPLEX_GRID([
	[-0.3, 3.6],
	[0.1],
	[0.1, -2.8, 0.1]
	]);

var wind = STRUCT([grid1, grid2])


//Creazione vetrata 1

var t1 = T([0])([4])

var glassWall1Struct = STRUCT([wind,t1, wind, t1, wind])


var glassWall1 = T([0,1,2])([29, 4.6, 1])(glassWall1Struct)


//Creazione intelaiatura vetrata 2

var gridB1 = SIMPLEX_GRID([
	[0.1],
	[0.1, -0.8, 0.1],
	[3]
	]);

var gridB2 = SIMPLEX_GRID([
	[0.1],
	[1],
	[0.1, -2.8, 0.1]
	]);


var wind2 = STRUCT([gridB1, gridB2])

//Creazione vetrata 2

var t2 = T([1])([1])

var glassWall2Struct = STRUCT([wind2, t2, wind2, t2, wind2, t2, wind2, t2, wind2, t2, wind2, t2, wind2, t2, wind2])


var glassWall2 = T([0,1,2])([44.2, 6, 1])(glassWall2Struct)


//Insieme per tutti i muri del pavilion

var walls = STRUCT([sxWalls, dxWalls, poolWall, wallsD, wallsP, glassWall1, glassWall2])



//Creazione tetto dependance

var roofD = SIMPLEX_GRID([
	[10],
	[-13, 9],
	[-4, 1]
	])


//Creazione tetto edificio principale

var roofP = SIMPLEX_GRID([
	[-24, 23],
	[-4, 13],
	[-4, 1]
	])

var roofs = STRUCT([roofD, roofP])



//Creazione panca

//Sostegni panca

var c = SIMPLEX_GRID([
	[0.5],
	[0.5],
	[0.3]
	])

var t3 = T([0])([1.5])

var cseries = STRUCT([c, t3, c, t3, c, t3, c, t3, c, t3, c, t3, c, t3, c, t3, c])

var sostegni = T([0,1,2])([7.3, 14.2, 1])(cseries)


//panca

var lastraPanca = SIMPLEX_GRID([
	[-6.5, 14],
	[-14, 0.9],
	[-1.3, 0.4]
	])

var panca = STRUCT([sostegni, lastraPanca])


//Creazione colonne

var column = SIMPLEX_GRID([
	[-26, 0.1, -6.1, 0.1, -6.9, 0.1, -6.1, 0.1],
	[-6.8, 0.1, -6.8, 0.1],
	[-1, 3]
	])



//Unione struttura intera

var pavilion = STRUCT([basement, walls, roofs, panca, column])


DRAW(pavilion)