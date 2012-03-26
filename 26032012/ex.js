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

var domain([[0,20*PI]])([40])

var sin = function(p) {
	var u = p[0];
	return [u, Math.sin(u)]
}

var s = MAP(sin)(domain)