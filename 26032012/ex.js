var d1 = DOMAIN ([[2.5]]) [4])
var d2 = DOMAIN ([[1,7], [3,5]]) ([4,3])
var d3 = DOMAIN ([[1,7], [3,5], [2,4]]) ([4,3, 2])




var domain = DOMAIN([[0,1]])([10]);

var mapping = function (p) {
	var u = p[0];
	return [u, 1]
}



var mapped = MAP(mapping)(domain)



var bisec = function (p) {
	var u = p[0];
	return [u,u]

}

var m = MAP(bisec)(domain)

DRAW (m)

---------------------------

var domain([[0,10*PI]])([40])

var sin = function(p) {
	var u = p[0];
	return [u, Math.sin(u)]
}

var s = MAP(sin)(domain)


----------------------------


var mapping = function (p) {
	var u = p[0];
	return [u, 1]
}



var drawCircle = function(r,n) {
	var d = DOMAIN([[0,10*PI]])([40])
	
}

--------------------------------------



var drawCilinder = function(r,h,n,m) {
	
	var domain = DOMAIN ([[0,2*PI], [0,h]])([n, m])
	var mapping = function(p) {
		var u = p[0];
		var v = p[1];
		return [r*COS(u), r*SIN(u), v];
	}
	var mapped = MAP(mapping)(domain)
	DRAW (mapped);


}


