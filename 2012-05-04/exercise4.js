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
//DRAW(surf)


//CHIUSURA ALA

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50])
var wingEndp0 = [[15*0.6,0,0], [0,5*0.6,0], [0,-2*0.6,0], [5*0.6,0,0], [15*0.6,0,0]]


var wingEndc0 = BEZIER(S0)(wingEndp0)


var s12 = BEZIER(S1)([wingEndc0,[2.8,1,1],[5,1,1]]) //usiamo le immagini delle curve
var surface12 = MAP(s12)(domain2)

var wingpos = T([0,1,2])([5,4,50])(surface12)

var wing1 = STRUCT([wingpos,surf])

//DRAW(wing1)




//ALA 2


var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50])

var w2p0 = [[15,0,0], [0,5,0], [0,-2,0], [5,0,0], [15,0,0]]

var w2p1 = w2p0.map(function (p) {return [p[0], p[1], p[2]-10]})
var w2p2 = w2p0.map(function (p) {return [p[0], p[1]+1, p[2]-20]})
var w2p3 = w2p0.map(function (p) {return [p[0], p[1]+2, p[2]-30]})
var w2p4 = w2p0.map(function (p) {return [p[0], p[1]+3, p[2]-40]})
var w2p5 = w2p0.map(function (p) {return [p[0]*0.6+5, p[1]*0.6+4, p[2]*0.6-50]})



var w2c0 = BEZIER(S0)(w2p0)
var w2c1 = BEZIER(S0)(w2p1)
var w2c2 = BEZIER(S0)(w2p2)
var w2c3 = BEZIER(S0)(w2p3)
var w2c4 = BEZIER(S0)(w2p4)
var w2c5 = BEZIER(S0)(w2p5)



var w2curves = STRUCT(CONS(AA(MAP)([w2c0,w2c1,w2c2,w2c3,w2c4,w2c5]))(domain1))

var w2wing = BEZIER(S1)([w2c0,w2c1,w2c2,w2c3,w2c4,w2c5])

var w2surf = MAP(w2wing)(domain2)
//DRAW(w2surf)


//CHIUSURA ALA



var w2wingEndp0 = [[15*0.6,0,0], [0,5*0.6,0], [0,-2*0.6,0], [5*0.6,0,0], [15*0.6,0,0]]


var w2wingEndc0 = BEZIER(S0)(w2wingEndp0)


var w2s12 = BEZIER(S1)([w2wingEndc0,[2.8,1,-1],[5,1,-1]]) //usiamo le immagini delle curve
var w2surface12 = MAP(w2s12)(domain2)

var w2wingpos = T([0,1,2])([5,4,-50])(w2surface12)

//DRAW(w2wingpos)




var allwings = STRUCT([wing1,w2surf,w2wingpos])

var allwingPos = T([1,2])([2,25])(R([0,2])(-PI/2)(allwings))

var wingFinal = S([0,1,2])([1.2,1.2,1.2])(allwingPos)

DRAW(COLOR([1,1,0])(allwingPos))








//FUSOLIERA
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
DRAW(COLOR([0.48,0.48,0.48])(puntaSurf1))
DRAW(COLOR([0.48,0.48,0.48])(puntaSurf2))



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
//var sezSeatCur4 = MAP(sezSeat4)(domain);
//DRAW(sezSeatCur4)


var seatp5 = seatp3.map(function (p) {return [p[0], p[1], p[2]+5]})
var sezSeat5 = BEZIER(S0)(seatp5);
var sezSeatCur5 = MAP(sezSeat5)(domain);
//DRAW(sezSeatCur5)
//DRAW(COLOR([0,1,1])(POLYLINE(seatp5)));

var seatp6 = seatp4.map(function (p) {return [p[0], p[1], p[2]+5]})
var sezSeat6 = BEZIER(S0)(seatp6);
var sezSeatCur6 = MAP(sezSeat6)(domain);
//DRAW(sezSeatCur6)
//DRAW(COLOR([0,1,1])(POLYLINE(seatp6)));






var puntaSeat1 = BEZIER(S1)([sezSeat1,sezSeat3])
var puntaSeat2 = BEZIER(S1)([sezSeat2,sezSeat4]) 

var puntaSeatSurf1 = MAP(puntaSeat1)(domain2)
var puntaSeatSurf2 = MAP(puntaSeat2)(domain2)

DRAW(COLOR([0.75,0.75,0.12])(puntaSeatSurf1))
DRAW(COLOR([0.75,0.75,0.12])(puntaSeatSurf2))




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


DRAW(COLOR([0.75,0.75,0.12])(coda3Curv))

DRAW(COLOR([0.75,0.75,0.12])(coda4Curv))



var coda1d1 = BEZIER(S1)([coda1c1,coda3c3])
var coda2d2 = BEZIER(S1)([coda2c2,coda4c4]) 

var codaSurf1 = MAP(coda1d1)(domain2)
var codaSurf2 = MAP(coda2d2)(domain2)

DRAW(COLOR([0.75,0.75,0.12])(codaSurf1))
DRAW(COLOR([0.75,0.75,0.12])(codaSurf2))






var domain2 = DOMAIN([[0,1],[0,1]])([20,40]);
var seat3d1 = BEZIER(S1)([sezSeat3, sezSeat5,bSezSeat1,coda1c1]);
var seat3d2 = BEZIER(S1)([sezSeat4, sezSeat6, bSezSeat2,coda2c2]);

var seatSurf1 = MAP(seat3d1)(domain2);
var seatSurf2 = MAP(seat3d2)(domain2)

DRAW(COLOR([0.75,0.75,0.12])(seatSurf1))
DRAW(COLOR([0.75,0.75,0.12])(seatSurf2))



//STABILIZZATORI

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
//DRAW(surf)


//Tappo sx
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50])
var wingEndp0 = [[10,0,0], [0,3,0], [0,-1,0], [5,0,0], [10,0,0]]


var wingEndc0 = BEZIER(S0)(wingEndp0)


var s12 = BEZIER(S1)([wingEndc0,[2.8,1,1],[5,1,1]]) //usiamo le immagini delle curve
var surface12 = MAP(s12)(domain2)

var wingpos = T([2])([30])(surface12)

//DRAW(wingpos)



//tappo dx
var wingEndp1 = [[10,0,0], [0,3,0], [0,-1,0], [5,0,0], [10,0,0]]


var wingEndc1 = BEZIER(S0)(wingEndp1)


var s12 = BEZIER(S1)([wingEndc1,[2.8,1,-1],[5,1,-1]]) //usiamo le immagini delle curve
var surface12 = MAP(s12)(domain2)

var hstab = T([2])([0])(surface12)

//DRAW(hstab)



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

//DRAW(verticalPos2)


var stabilizzatori = T([0,1,2])([15.5,5,83])( R([0,2])(-PI/2)(STRUCT([verticalPos2, surf, wingpos, hstab])))



DRAW(COLOR([0.75,0.75,0.12])(stabilizzatori))

