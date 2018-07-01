var section = document.querySelector('section');
document.getElementById('Springfield');
document.getElementById('Greenville');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var weather = request.response;

    findstats(weather);
}

function findstats(jsonObj) {
    var towns = jsonObj['towns'];
    for (var i = 0; i < towns.length; i++) {
        if (i==2){
            continue;
            }
        var myArticle = document.createElement('article');
        var townname = document.createElement('h3');
        var motto = document.createElement('p');
        var year = document.createElement('p');
        var population = document.createElement('p');
        var rainfall = document.createElement('p');

        townname.textContent = towns[i].name;
        motto.textContent = 'Motto: ' + towns[i].motto;
        year.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        rainfall.textContent = 'Yearly Rainfall: ' + towns[i].averageRainfall+ ' in';

        myArticle.appendChild(townname);
        myArticle.appendChild(motto);
        myArticle.appendChild(year);
        myArticle.appendChild(population);
        myArticle.appendChild(rainfall);
        section.appendChild(myArticle);
    }
}
