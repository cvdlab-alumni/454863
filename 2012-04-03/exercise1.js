//Punti per il contorno della pianta

var p1 = [[1,2], [0,2], [0,0]]
var p2 = [[0,0], [39,0], [39,4]]
var p3 = [[39,4], [52,4], [52,6]]
var p4 = [[52,6], [51,6], [51,5]]

var p5 = [[1,1], [1,22], [9,22]]
var p6 = [[9,22], [9,17], [39,17]]
var p7 = [[39,17], [39,16]]
var p8 = [[39,16], [47,16], [47,5]]

var poly1 = POLYLINE(p1)
var poly2 = POLYLINE(p2)
var poly3 = POLYLINE(p3)
var poly4 = POLYLINE(p4)
var poly5 = POLYLINE(p5)
var poly6 = POLYLINE(p6)
var poly7 = POLYLINE(p7)
var poly8 = POLYLINE(p8)


//Funzioni per disegnare la griglia fatta di riquadri 1x1


/*Funzione principale per disegnare la griglia.
IN: p1x: ascissa del punto da cui cominciare a disegnare la griglia
	p2x: ascissa del punto in cui si finisce di disegnare la griglia
	fromy: ordinata di partenza da cui disegnare la griglia
	toy: ordinata di arrivo*/

drawGrid = function(p1x, p2x, fromy, toy) {
	for (var i = fromy; i<toy+1; i++) {
	var p = [[p1x, i], [p2x, i]]

	var grid = POLYLINE(p)

	DRAW(grid)
	drawVerticalGrid(fromy, toy, p1x, p2x) //Funzione richiamata per disegnare l'asse verticale
}
}

//Funzione per disegnare le linee verticali della griglia

drawVerticalGrid = function(p1y, p2y, fromx, tox) {
	for (var i = fromx; i<tox+1; i++) {
	var p = [[i, p1y], [i, p2y]]

	var grid = POLYLINE(p)

	DRAW(grid)
}
}

//Disegno della griglia diviso per zone:

drawGrid(21, 31, 0, 17);

drawGrid(32, 39, 12,17);

drawGrid(32, 39, 0, 9);

drawGrid(31, 32, 14, 17);

drawGrid(31, 32, 0, 7);

drawGrid(32, 39, 0, 9);

drawGrid(32, 39, 12, 17);

drawGrid(33, 39, 9, 12);

drawGrid(39, 47, 4, 16);

drawGrid(1, 9, 10, 22)

drawGrid(9, 21, 10, 17)

drawGrid(0, 39, 0, 1);

drawGrid(47, 52, 4, 5);



// Contorno del riquadro d'acqua presente sul lato sinistro/frontale della struttura

var pool = [[1,1], [1,10], [21,10]]
var pool2 = [[21,10], [21,1], [1,1]]


var polypool = POLYLINE(pool)
var polypool2 = POLYLINE(pool2)





//Contorno del riquadro d'acqua presente sul lato destro/retro della struttura e dei muri 
//presenti sul lato sinistro e destro, disegnati in nero

var ext1 = [[41.2, 5], [51, 5], [51, 16]]
var ext2 = [[51,16], [37.7, 16]]

var extpoly1 = POLYLINE(ext1)
var extpoly2 = POLYLINE(ext2)

var extPool1 = [[1,22], [1,1], [7.8, 1]]
var extPool2 = [[1,22], [9,22], [9,17]]

var extPoolpoly1 = POLYLINE(extPool1);
var extPoolpoly2 = POLYLINE(extPool2);

var extStruct = STRUCT([extpoly1, extpoly2, extPoolpoly1, extPoolpoly2])

var extFrame = COLOR([0.5,0.5,0.5])(extStruct)


//Muro interno

var internalPiece1 = [[32, 7.5], [32, 13.7], [31,13.7]]
var internalPiece2 = [[31,13.7], [31, 7.5]]

var internalPiecePoly1 = POLYLINE(internalPiece1);
var internalPiecePoly2 = POLYLINE(internalPiece2);

var internalStruct = STRUCT([internalPiecePoly1, internalPiecePoly2])
var internalFrame = COLOR([0.5,0.5,0.5])(internalStruct);



//Muri interni, disegnati in nero

var w1 = [[6.5,15], [26.5, 15]]
var wall1 = POLYLINE(w1);

var w2 = [[25, 7.5], [34, 7.5]]
var wall2 = POLYLINE(w2)

var w3 = [[30, 13.7], [40, 13.7]]
var wall3 = POLYLINE(w3);

var w4 = [[37.2, 11.5], [42.5, 11.5]]
var wall4 = POLYLINE(w4)

var w5 = [[44.7, 6.9], [44.7, 14.1]]
var wall5 = POLYLINE(w5)

//Muri parte alta a sinistra
var w6 = [[5, 20.7], [9, 20.7]]
var wall6 = POLYLINE(w6)

var w7 = [[7,22], [7,21]]
var wall7 = POLYLINE(w7)

var wallStruct = STRUCT ([wall1,wall2, wall3, wall4, wall5, wall6, wall7])

var wallFrame = COLOR([0.5, 0.5, 0.5])(wallStruct)






var plan = STRUCT([poly1,poly2,poly3, poly4, poly5, poly6, poly7, poly8, polypool, polypool2, extFrame, internalFrame, wallFrame])



DRAW(plan)