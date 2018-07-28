var requestURL = 'scripts/prices.json';
var request= new XMLHttpRequest();
var nimbus2000 = document.getElementById('nimbus2000');
document.getElemenById('nimbus2001');
document.getElementById('firebolt');
request.open('GET', requestURL);
request.responseType='json';
request.send();
request.onload = function() {}
var nimbus0 = request.response