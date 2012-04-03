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

var pool = [[1,1], [1,10], [21,10]]
var pool2 = [[21,10], [21,1], [1,1]]


var polypool = POLYLINE(pool)
var polypool2 = POLYLINE(pool2)


var ext1 = [[41.2, 5], [51, 5], [51, 16]]
var ext2 = [[51,16], [37.7, 16]]

var extpoly1 = POLYLINE(ext1)
var extpoly2 = POLYLINE(ext2)

var extPool1 = [[7.8, 1], [1,1], [1,22]]
var extPool2 = [[1,22], [9,22], [9,17]]

var extPoolpoly1 = POLYLINE(extPool1);
var extPoolpoly2 = POLYLINE(extPool2);

var extStruct = STRUCT([extpoly1, extpoly2, extPoolpoly1, extPoolpoly2])

var extFrame = COLOR([0.5,0.5,0.5])(extStruct)




var internalPiece1 = [[32, 7.5], [32, 13.7], [31,13.7]]
var internalPiece2 = [[31,13.7], [31, 7.5]]

var internalPiecePoly1 = POLYLINE(internalPiece1);
var internalPiecePoly2 = POLYLINE(internalPiece2);

var internalStruct = STRUCT([internalPiecePoly1, internalPiecePoly2])
var internalFrame = COLOR([0.5,0.5,0.5])(internalStruct);





var w1 = [[6.5,15], [26.5, 15]]
var wall1 = POLYLINE(w1);

var w2 = [[25, 7.5], [34, 7.5]]
var wall2 = POLYLINE(w2)

var wallStruct = STRUCT ([wall1,wall2])

var wallFrame = COLOR([0.5, 0.5, 0.5])(wallStruct)






var map = STRUCT([poly1,poly2,poly3, poly4, poly5, poly6, poly7, poly8, polypool, polypool2, extFrame, internalFrame, wallFrame])




drawGrid = function(p1x, p2x, fromy, toy) {
	for (var i = fromy; i<toy+1; i++) {
	var p = [[p1x, i], [p2x, i]]

	var grid = POLYLINE(p)

	DRAW(grid)
	drawVerticalGrid(fromy, toy, p1x, p2x)
}
}

drawVerticalGrid = function(p1y, p2y, fromx, tox) {
	for (var i = fromx; i<tox+1; i++) {
	var p = [[i, p1y], [i, p2y]]

	var grid = POLYLINE(p)

	DRAW(grid)
}
}
drawGrid(21, 31, 0, 17);
//drawVerticalGrid(0, 17, 21, 39)

drawGrid(32, 39, 12,17);

drawGrid(32, 39, 0, 9);

drawGrid(31, 32, 14, 17);

drawGrid(31, 32, 0, 7);

drawGrid(32, 39, 0, 9);

drawGrid(32, 39, 12, 17);

drawGrid(33, 39, 9, 12);

drawGrid(39, 47, 4, 16);
//drawVerticalGrid(4, 16, 39, 47);

drawGrid(1, 9, 10, 22)
//drawVerticalGrid(10, 22, 1, 9);

drawGrid(9, 21, 10, 17)
//drawVerticalGrid(10,17,9,21);

drawGrid(0, 39, 0, 1);
//drawVerticalGrid(0, 1, 0,39);

drawGrid(47, 52, 4, 5);





DRAW(map)




/*
for (var i = 17; i<22; i++) {
	var p = [[1, i], [9, i]]

	var grid = POLYLINE(p)

	DRAW(grid)
};


for (var i = 10; i > 17; i++) {
	var p = [[1, i]], [39,i]

	var grid = POLYLINE(p)

	DRAW(grid)
};*/