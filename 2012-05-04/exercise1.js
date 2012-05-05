var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50])
//wing.selection0 = {}
//wing.section0.controls

var p0 = [[15,0,0], [0,5,0], [0,-2,0], [5,0,0], [15,0,0]]

var p1 = p0.map(function (p) {return [p[0], p[1], p[2]+10]})
var p2 = p0.map(function (p) {return [p[0], p[1]+1, p[2]+20]})
var p3 = p0.map(function (p) {return [p[0], p[1]+2, p[2]+30]})
var p4 = p0.map(function (p) {return [p[0], p[1]+3, p[2]+40]})
var p5 = p0.map(function (p) {return [p[0]*0.6+5, p[1]*0.6+4, p[2]*0.6+50]})



var c0 = BEZIER(S0)(p0)
var c1 = BEZIER(S0)(p1)
var c2 = BEZIER(S0)(p2)
var c3 = BEZIER(S0)(p3)
var c4 = BEZIER(S0)(p4)
var c5 = BEZIER(S0)(p5)



var curves = STRUCT(CONS(AA(MAP)([c0,c1,c2,c3,c4,c5]))(domain1))

var wing = BEZIER(S1)([c0,c1,c2,c3,c4,c5])

var surf = MAP(wing)(domain2)
DRAW(surf)


//CHIUSURA ALA

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50])
var wingEndp0 = [[15*0.6,0,0], [0,5*0.6,0], [0,-2*0.6,0], [5*0.6,0,0], [15*0.6,0,0]]


var wingEndc0 = BEZIER(S0)(wingEndp0)


var s12 = BEZIER(S1)([wingEndc0,[2.8,1,1],[5,1,1]]) //usiamo le immagini delle curve
var surface12 = MAP(s12)(domain2)

var wingpos = T([0,1,2])([5,4,50])(surface12)

DRAW(wingpos)