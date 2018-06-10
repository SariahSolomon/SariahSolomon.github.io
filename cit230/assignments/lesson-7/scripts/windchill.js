var t = parseFloat(document.getElementById("t").innerHTML);
var s = parseFloat(document.getElementById("s").innerHTML);
var c = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
var chill = Math.round(c);
document.getElementById("output").innerHTML = chill;
