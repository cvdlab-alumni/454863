var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50])
//wing.selection0 = {}
//wing.section0.controls

var p0 = [[10,0,0], [0,3,0], [0,-1,0], [5,0,0], [10,0,0]]

var p1 = p0.map(function (p) {return [p[0], p[1], p[2]+10]})
var p2 = p0.map(function (p) {return [p[0], p[1], p[2]+20]})
var p3 = p0.map(function (p) {return [p[0], p[1], p[2]+30]})



var c0 = BEZIER(S0)(p0)
var c1 = BEZIER(S0)(p1)
var c2 = BEZIER(S0)(p2)
var c3 = BEZIER(S0)(p3)

var curves = STRUCT(CONS(AA(MAP)([c0,c1,c2,c3]))(domain1))

var wing = BEZIER(S1)([c0,c1,c2,c3])

var surf = MAP(wing)(domain2)
DRAW(surf)


//Tappo sx
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50])
var wingEndp0 = [[10,0,0], [0,3,0], [0,-1,0], [5,0,0], [10,0,0]]


var wingEndc0 = BEZIER(S0)(wingEndp0)


var s12 = BEZIER(S1)([wingEndc0,[2.8,1,1],[5,1,1]]) //usiamo le immagini delle curve
var surface12 = MAP(s12)(domain2)

var wingpos = T([2])([30])(surface12)

DRAW(wingpos)



//tappo dx
var wingEndp1 = [[10,0,0], [0,3,0], [0,-1,0], [5,0,0], [10,0,0]]


var wingEndc1 = BEZIER(S0)(wingEndp1)


var s12 = BEZIER(S1)([wingEndc1,[2.8,1,-1],[5,1,-1]]) //usiamo le immagini delle curve
var surface12 = MAP(s12)(domain2)

var hstab = T([2])([0])(surface12)

DRAW(hstab)



//Verticale



var domain = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50])

var vstabP = [[13,0,0],[3,12,0],[3,12,0], [3,12,0], [5,-1,0],[5,-1,0],[5,-1,0],[13,0,0]];
var vstabc1 = BEZIER(S0)(vstabP);
//var vstab1curve = MAP(vstabc1)(domain);
//DRAW (vstab1curve );
//DRAW(COLOR([0,1,1])(POLYLINE(vstabP)));


var vstabP2 = vstabP.map(function (p) {return [p[0], p[1], p[2]+0.2]})
var vstabc2 = BEZIER(S0)(vstabP2);
//var vstab2curve = MAP(vstabc2)(domain);
//DRAW (vstab2curve);



var vstabsurf2d = BEZIER(S1)([vstabc1, vstabc2])

var vstabSurf = MAP(vstabsurf2d)(domain2)
//DRAW(vstabSurf)

//[2.8,1,-1],[5,1,-1]

var vstabEndc1 = BEZIER(S0)(vstabP)


var vstabss1 = BEZIER(S1)([vstabEndc1,[4,0,0],[12,0,0]]) //usiamo le immagini delle curve
var surface1 = MAP(vstabss1)(domain2)

var vstab1 = T([2])([0])( surface1)

//DRAW(vstab)


var vstabEndc2 = BEZIER(S0)(vstabP)


var vstabss2 = BEZIER(S1)([vstabEndc2,[4,0,0],[12,0,0]]) //usiamo le immagini delle curve
var surface2 = MAP(vstabss2)(domain2)

var vstab2 = T([2])([0])(surface2)

//DRAW(vstab2)


verticalstabilizer = STRUCT([vstab1, vstab2, vstabSurf])

verticalPos = ROTATE([0,2])([PI])(verticalstabilizer)

verticalPos2 = T([0,1,2])([16,1,16])(verticalPos)

DRAW(verticalPos2)

