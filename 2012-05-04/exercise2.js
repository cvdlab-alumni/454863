var domain = INTERVALS(1)(50);
//MUSO


var f1cp = [[0,8,0],[-2,8.4,0],[-2,11,0],[0,11,0]];
var f1c1 = BEZIER(S0)(f1cp);
//var f1curve = MAP(f1c1)(domain);
//DRAW (f1curve);

//var f2curve = ROTATE([0,2])([PI])(f1curve)

var f2cp = [[0,8,0],[2,8.4,0],[2,11,0],[0,11,0]]
var f2c2 = BEZIER(S0)(f2cp);
//var f2curve = MAP(f2c2)(domain)
//DRAW(f2curve)*/


//sezionePuntaMuso1 = STRUCT([f1curve,f2curve])

//DRAW(sezionePuntaMuso1)

var f3cp = f1cp.map(function (p) {return [p[0], p[1], p[2]+1]})
var f3c3 = BEZIER(S0)(f3cp);
//var f3curve = MAP(f3c3)(domain)
//DRAW(f3curve)

var f4cp = f2cp.map(function (p) {return [p[0], p[1], p[2]+1]})
var f4c4 = BEZIER(S0)(f4cp);
//var f4curve = MAP(f4c4)(domain)
//DRAW(f4curve)



var domain = INTERVALS(1)(50);

var sezMcp1 = [[0,0,0],[6,0,0],[6,0,0],[6.5,4,0],[8.5,11.5,0],[8.5,11.5,0],[0,12.5,0]]
var sezMc1 = BEZIER(S0)(sezMcp1);
//var sezMcurve1 = MAP(sezMc1)(domain);
//DRAW (sezMcurve1);
//DRAW(COLOR([0,1,1])(POLYLINE(sezMcp1)));

var sezMcp2 = [[0,0,0],[-6,0,0],[-6,0,0],[-6.5,4,0],[-8.5,11.5,0],[-8.5,11.5,0],[0,12.5,0]]
var sezMc2 = BEZIER(S0)(sezMcp2);
//var sezMcurve2 = MAP(sezMc2)(domain);
//DRAW(sezMcurve2)


var sezMcp3 = sezMcp1.map(function (p) {return [p[0], p[1], p[2]+12]})
var sezMc3 = BEZIER(S0)(sezMcp3);
//var sezMcurve3 = MAP(sezMc3)(domain);
//DRAW(sezMcurve3)

var sezMcp4 = sezMcp2.map(function (p) {return [p[0], p[1], p[2]+12]})
var sezMc4 = BEZIER(S0)(sezMcp4);
//var sezMcurve4 = MAP(sezMc4)(domain);
//DRAW(sezMcurve4)


var sezMcp5 = sezMcp3.map(function (p) {return [p[0], p[1], p[2]+15]})
var sezMc5 = BEZIER(S0)(sezMcp5);
//var sezMcurve5 = MAP(sezMc5)(domain);
//DRAW(sezMcurve5)

var sezMcp6 = sezMcp4.map(function (p) {return [p[0], p[1], p[2]+15]})
var sezMc6 = BEZIER(S0)(sezMcp6);
//var sezMcurve6 = MAP(sezMc6)(domain);
//DRAW(sezMcurve6)


var domain2 = DOMAIN([[0,1],[0,1]])([20,40]);
var punta1 = BEZIER(S1)([f1c1, f3c3, sezMc1, sezMc3, sezMc5]);
var punta2 = BEZIER(S1)([f2c2, f4c4, sezMc2, sezMc4, sezMc6]);

var puntaSurf1 = MAP(punta1)(domain2);
var puntaSurf2 = MAP(punta2)(domain2)
DRAW(puntaSurf1)
DRAW(puntaSurf2)



//SEDILE


var domain = INTERVALS(1)(50);


var seatp1 = sezMcp5.map(function (p) {return [p[0], p[1], p[2]]})
var sezSeat1 = BEZIER(S0)(seatp1);
//var sezSeatCur = MAP(sezSeat1)(domain);
//DRAW(COLOR([0,1,1])(sezSeatCur))

var seatp2 = sezMcp6.map(function (p) {return [p[0], p[1], p[2]]})
var sezSeat2 = BEZIER(S0)(seatp2);
//var sezSeatCur2 = MAP(sezSeat2)(domain);
//DRAW(COLOR([0,1,1])(sezSeatCur2))









var domain = INTERVALS(1)(50);
var seatip3 = [[0,0,27],[6,0,27],[6,0,27],[6.5,4,27],[8.5,11.5,27],[8.5,11.5,27],[5.5,11.5,27],[5.5,11.5,27], [5,3,27],[0,3,27]]
var seatp3 = seatip3.map(function (p) {return [p[0]*1.1, p[1]*1.1, p[2]*1.1+5]})
var sezSeat3 = BEZIER(S0)(seatp3);
//var sezSeatCur3 = MAP(sezSeat3)(domain);
//DRAW(sezSeatCur3)

var seatp4 = seatp3.map(function (p) {return [p[0]*-1, p[1], p[2]]})
var sezSeat4 = BEZIER(S0)(seatp4);
var sezSeatCur4 = MAP(sezSeat4)(domain);
//DRAW(sezSeatCur4)


var seatp5 = seatp3.map(function (p) {return [p[0], p[1], p[2]+5]})
var sezSeat5 = BEZIER(S0)(seatp5);
//var sezSeatCur5 = MAP(sezSeat5)(domain);
//DRAW(sezSeatCur5)
//DRAW(COLOR([0,1,1])(POLYLINE(seatp5)));

var seatp6 = seatp4.map(function (p) {return [p[0], p[1], p[2]+5]})
var sezSeat6 = BEZIER(S0)(seatp6);
//var sezSeatCur6 = MAP(sezSeat6)(domain);
//DRAW(sezSeatCur6)
//DRAW(COLOR([0,1,1])(POLYLINE(seatp6)));






var puntaSeat1 = BEZIER(S1)([sezSeat1,sezSeat3])
var puntaSeat2 = BEZIER(S1)([sezSeat2,sezSeat4]) 

var puntaSeatSurf1 = MAP(puntaSeat1)(domain2)
var puntaSeatSurf2 = MAP(puntaSeat2)(domain2)

DRAW(puntaSeatSurf1)
DRAW(puntaSeatSurf2)




var bSeatp1 = seatp1.map(function (p) {return [p[0], p[1], p[2]+15]})
var bSezSeat1 = BEZIER(S0)(bSeatp1);
//var bSezSeatCur1 = MAP(bSezSeat1)(domain);
//DRAW(COLOR([1,0,0])(bSezSeatCur1))

var bSeatp2 = bSeatp1.map(function (p) {return [p[0]*-1, p[1], p[2]]})
var bSezSeat2 = BEZIER(S0)(bSeatp2);
//var bSezSeatCur2 = MAP(bSezSeat2)(domain);
//DRAW(COLOR([1,0,0])(bSezSeatCur2))



/*
var domain2 = DOMAIN([[0,1],[0,1]])([20,40]);
var seat3d1 = BEZIER(S1)([sezSeat3, sezSeat5,bSezSeat1]);
var seat3d2 = BEZIER(S1)([sezSeat4, sezSeat6, bSezSeat2]);

var seatSurf1 = MAP(seat3d1)(domain2);
var seatSurf2 = MAP(seat3d2)(domain2)

DRAW(seatSurf1)
DRAW(seatSurf2)*/

//CODA


var coda1p = bSeatp1.map(function (p) {return [p[0]*0.7, p[1]*0.7, p[2]+25]})
var coda1c1 = BEZIER(S0)(coda1p);
var coda1Curv = MAP(coda1c1)(domain);

var coda2p = coda1p.map(function (p) {return [p[0]*-1, p[1], p[2]]})
var coda2c2 = BEZIER(S0)(coda2p);
var coda2Curv = MAP(coda2c2)(domain);




var coda3p = coda1p.map(function (p) {return [p[0]*0.2, p[1]*0.2+3, p[2]+25]})
var coda3c3 = BEZIER(S0)(coda3p);
var coda3Curv = MAP(coda3c3)(domain);

var coda4p = coda3p.map(function (p) {return [p[0]*-1, p[1], p[2]]})
var coda4c4 = BEZIER(S0)(coda4p);
var coda4Curv = MAP(coda4c4)(domain);


DRAW(coda3Curv)

DRAW(coda4Curv)



var coda1d1 = BEZIER(S1)([coda1c1,coda3c3])
var coda2d2 = BEZIER(S1)([coda2c2,coda4c4]) 

var codaSurf1 = MAP(coda1d1)(domain2)
var codaSurf2 = MAP(coda2d2)(domain2)

DRAW(codaSurf1)
DRAW(codaSurf2)






var domain2 = DOMAIN([[0,1],[0,1]])([20,40]);
var seat3d1 = BEZIER(S1)([sezSeat3, sezSeat5,bSezSeat1,coda1c1]);
var seat3d2 = BEZIER(S1)([sezSeat4, sezSeat6, bSezSeat2,coda2c2]);

var seatSurf1 = MAP(seat3d1)(domain2);
var seatSurf2 = MAP(seat3d2)(domain2)

DRAW(seatSurf1)
DRAW(seatSurf2)


