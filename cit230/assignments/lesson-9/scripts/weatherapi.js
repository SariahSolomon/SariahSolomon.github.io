//connect to api
let weatherRequest=new XMLHttpRequest();
let apiURL= 'https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=6a7b5f167f0105ee34177e1fd20daa1d';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload=function(){
    let weatherData=JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    let imagesrc='http://openweathermap.org/img/w/' +weatherData.weather[0].icon+'.png';
    document.getElementById('weather-image').src=imagesrc;
    document.getElementById('speed').innerHTML=weatherData.wind.speed;
}