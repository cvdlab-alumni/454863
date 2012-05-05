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
var sezSeatCur = MAP(sezSeat1)(domain);
DRAW(COLOR([0,1,1])(sezSeatCur))

var seatp2 = sezMcp6.map(function (p) {return [p[0], p[1], p[2]]})
var sezSeat2 = BEZIER(S0)(seatp2);
var sezSeatCur2 = MAP(sezSeat2)(domain);
DRAW(COLOR([0,1,1])(sezSeatCur2))









var domain = INTERVALS(1)(50);
var seatip3 = [[0,0,27],[6,0,27],[6,0,27],[6.5,4,27],[8.5,11.5,27],[8.5,11.5,27],[5.5,11.5,27],[5.5,11.5,27], [5,3,27],[0,3,27]]
var seatp3 = seatip3.map(function (p) {return [p[0]*1.1, p[1]*1.1, p[2]*1.1+5]})
var sezSeat3 = BEZIER(S0)(seatp3);
var sezSeatCur3 = MAP(sezSeat3)(domain);
DRAW(sezSeatCur3)

var seatp4 = seatp3.map(function (p) {return [p[0]*-1, p[1], p[2]]})
var sezSeat4 = BEZIER(S0)(seatp4);
var sezSeatCur4 = MAP(sezSeat4)(domain);
DRAW(sezSeatCur4)


var seatp5 = seatp3.map(function (p) {return [p[0], p[1], p[2]+5]})
var sezSeat5 = BEZIER(S0)(seatp5);
var sezSeatCur5 = MAP(sezSeat5)(domain);
DRAW(sezSeatCur5)
DRAW(COLOR([0,1,1])(POLYLINE(seatp5)));

var seatp6 = seatp4.map(function (p) {return [p[0], p[1], p[2]+5]})
var sezSeat6 = BEZIER(S0)(seatp6);
var sezSeatCur6 = MAP(sezSeat6)(domain);
DRAW(sezSeatCur6)
DRAW(COLOR([0,1,1])(POLYLINE(seatp6)));






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




var domain2 = DOMAIN([[0,1],[0,1]])([20,40]);
var seat3d1 = BEZIER(S1)([sezSeat3, sezSeat5,bSezSeat1]);
var seat3d2 = BEZIER(S1)([sezSeat4, sezSeat6, bSezSeat2]);

var seatSurf1 = MAP(seat3d1)(domain2);
var seatSurf2 = MAP(seat3d2)(domain2)

DRAW(seatSurf1)
DRAW(seatSurf2)

//CODA


var coda1p = bSeatp1.map(function (p) {return [p[0]*0.7, p[1]*0.7, p[2]+25]})
var coda1c1 = BEZIER(S0)(coda1p);
var coda1Curv = MAP(coda1c1)(domain);

var coda2p = coda1p.map(function (p) {return [p[0]*-1, p[1], p[2]]})
var coda2c2 = BEZIER(S0)(coda2p);
var coda2Curv = MAP(coda2c2)(domain);




var coda3p = coda1p.map(function (p) {return [p[0]*0.3, p[1]*0.3+3, p[2]+25]})
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















//

var seatp1 = sezMcp3.map(function (p) {return [p[0], p[1], p[2]+27]})
var sezSeat1 = BEZIER(S0)(seatp1);
var sezSeatCur = MAP(sezSeat1)(domain);
DRAW(sezSeatCur)

var seatp2 = sezMcp4.map(function (p) {return [p[0], p[1], p[2]+27]})
var sezSeat2 = BEZIER(S0)(seatp2);
var sezSeatCur2 = MAP(sezSeat2)(domain);
DRAW(sezSeatCur)


var domain = INTERVALS(1)(50);
var seatip3 = [[0,0,27],[6,0,27],[6,0,27],[6.5,4,27],[8.5,11.5,27],[8.5,11.5,27],[5.5,11.5,27],[5.5,11.5,27], [5,3,27],[0,3,27]]
var seatp3 = seatip3.map(function (p) {return [p[0]*1.1, p[1]*1.1, p[2]*1.1+5]})
var sezSeat3 = BEZIER(S0)(seatp3);
var sezSeatCur3 = MAP(sezSeat3)(domain);
DRAW(sezSeatCur3)

var seatp4 = seatp3.map(function (p) {return [p[0]*-1, p[1], p[2]]})
var sezSeat4 = BEZIER(S0)(seatp4);
var sezSeatCur4 = MAP(sezSeat4)(domain);
DRAW(sezSeatCur4)


var seatp5 = seatp3.map(function (p) {return [p[0], p[1], p[2]+5]})
var sezSeat5 = BEZIER(S0)(seatp5);
var sezSeatCur5 = MAP(sezSeat5)(domain);
DRAW(sezSeatCur5)
DRAW(COLOR([0,1,1])(POLYLINE(seatp5)));

var seatp6 = seatp4.map(function (p) {return [p[0], p[1], p[2]+5]})
var sezSeat6 = BEZIER(S0)(seatp6);
var sezSeatCur6 = MAP(sezSeat6)(domain);
DRAW(sezSeatCur6)
DRAW(COLOR([0,1,1])(POLYLINE(seatp6)));



var domain2 = DOMAIN([[0,1],[0,1]])([20,40]);
var seat3d1 = BEZIER(S1)([sezSeat1, sezSeat3]);
var seat3d2 = BEZIER(S1)([sezSeat2, sezSeat4]);

var seatSurf1 = MAP(seat3d1)(domain2);
var seatSurf2 = MAP(seat3d2)(domain2)

var finalSeat = STRUCT([seatSurf1, seatSurf2])

var finalSeatPos = T([2])([-8])(finalSeat)

DRAW(finalSeatPos)

var fusion1 = BEZIER(S1)([sezMc5, sezSeat1])
var fusion2 = BEZIER(S1)([sezMc6, sezSeat2])

var fusionmap1 = MAP(fusion1)(domain2)
var fusionmap2 = MAP(fusion2)(domain2)

DRAW(fusionmap1)
DRAW(fusionmap2)

var domain2 = DOMAIN([[0,1],[0,1]])([20,40]);
var muso2d = BEZIER(S1)([f1c1, f2c2]);

var fuselage_surf1 = MAP(muso2d)(domain2);

DRAW(fuselage_surf1)






var fuselage_s2 = BEZIER(S1)([fuselage_c2, fuselage_c4, fuselage_c6]);
var fuselage_surf1 = MAP(fuselage_s1)(fuselage_domain2);
var fuselage_surf2 = MAP(fuselage_s2)(fuselage_domain2);
DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_surf1));
DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_surf2));























/////////////////////////////////



var f1cp = [[0,0,0],[-1,0.2,0],[-1,1.5,0],[0,1.5,0]];
var f1c1 = BEZIER(S0)(f1cp);
var f1curve = MAP(f1c1)(domain);
DRAW (f1curve);

var f2cp = [[0,0,0],[1,0.2,0],[1,1.5,0],[0,1.5,0]]
var f2c2 = BEZIER(S0)(f2cp);
var f2curve = MAP(f2c2)(domain)
DRAW(f2curve)





var fuselage_controls2 = [[4,2.5,0],[4,2.5,1],[4,5,5],[4,7.5,1],[4,7.5,0]];
var fuselage_c2 = BEZIER(S0)(fuselage_controls2);
var fuselage_curve2 = MAP (fuselage_c2) (fuselage_domain);
DRAW (fuselage_curve2);





//MUSO
//PARTE SINISTRA
var cp1 = [[80,12,20],[10,12,20],[35,15,20],[50,40,20],[8,40,20],[-1,45,20],[-1,50,20],[20,50,20], [80,50,20]]

var c1 = BEZIER(S0)(cp1)
var model1 = MAP(c1)(domain)
//DRAW(COLOR([1,0,0])(POLYLINE(cp1)));
//DRAW(model1)



//PARTE DESTRA

var cp2 = [[80,12,-20],[10,12,-20],[35,15,-20],[50,40,-20],[8,40,-20],[-1,45,-20],[-1,50,-20],[20,50,-20], [80,50,-20]]

var c2 = BEZIER(S0)(cp2)

var model2 = MAP(c2)(domain)

//DRAW(model2)


var domain2 = DOMAIN([[0,1],[0,1]])([30,40])



var fuseSx=BEZIER(S1)([c1,c2])
var surfaceSx = MAP(fuseSx)(domain2)

//DRAW(surfaceSx);


//LATERALI
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([8,20,20])
var pro = BEZIER(S2)([fuseSx])
var dr = MAP(pro)(domain3)
DRAW(dr)

//[[80,12,0],[10,12,0],[35,15,0],[50,40,0],[8,40,0],[-1,45,0],[-1,50,0],[20,50,0], [80,50,0]]
var fusExt1 = BEZIER(S0)(cpFusExt)


var surfExt1 = BEZIER(S1)([fusExt1]) //usiamo le immagini delle curve
var surfaceExt1 = MAP(surfExt1)(domain2)

var surfExt1Pos = T([1,2])([60,40])(surfaceExt1)

DRAW(surfExt1Pos)


,[0,0,0],[0,0,0]






//CENTRALE

var centerP = [[15,30,10],[15,]]




DRAW(COLOR([1,0,0])(model));

//PROVA SUP

var domain2 = DOMAIN([[0,1],[0,1]])([30,100])

var lc1 = [[0,25,10],[10,22,10],[15,12,10],[30,10,5],[150,22,3],[150,30,3],[145,30,5],[144,25,5],[90,30,5],[85,25,6],[80,25,6],[75,30,7],[60,30,7],[55,25,8],[50,25,10],[45,30,10],[0,25,10]];
//[[0,25,0],[10,22,0],[15,12,0],[30,10,0],[150,22,0],[150,30,0],[145,30,0],[144,25,0],[90,30,0],[85,25,0],[80,25,0],[75,30,0],[60,30,0],[55,25,0],[50,25,0],[45,30,0],[0,25,0]];

var fuse = BEZIER(S0)(lc1)

var fuse12=BEZIER(S1)([fuse,[10,0,0],[0,0,0]])
var surface12 = MAP(fuse12)(domain2)

DRAW(surface12);

// poligono dei punti di cntrollo
//DRAW(COLOR([0,0,0])(POLYLINE(controlpoints)));

var controlpoints2 = [[0,25,-10],[10,22,-10],[15,12,-10],[30,10,-5],[150,22,-3],[150,30,-3],[145,30,-5],[144,25,-5],[90,30,-5],[85,25,1-6],[80,25,-6],[75,30,-7],[60,30,-7],[55,25,-8],[50,25,-10],[45,30,-10],[0,25,-10]];
var nubs2 = NUBS(S0)(2)([0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,15,15])(controlpoints2)
var model2 = MAP(nubs2)(domain)

DRAW(COLOR([1,0,0])(model2));

var domain2 = DOMAIN([[0,1],[0,1]])([30,50]) 
var s12 = BEZIER(S1)([nubs,nubs2);
var surf = MAP(s12)(domain2)
DRAW(surf)


//Laterali

var domain2 = DOMAIN([[0,1],[0,1]])([30,50])

var lc1 = [[0,25,0],[10,22,0],[15,12,0],[30,10,0],[150,22,0],[150,30,0],[145,30,0],[144,25,0],[90,30,0],[85,25,0],[80,25,0],[75,30,0],[60,30,0],[55,25,0],[50,25,0],[45,30,0],[0,25,0]];

var fuse = BEZIER(S0)(lc1)

var fuse12=BEZIER(S1)([fuse,[0,0,0],[0,0,0]])
var surface12 = MAP(fuse12)(domain2)

DRAW(surface12);