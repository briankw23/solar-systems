const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};
const intialplanetBuilder = (data) => {
    let domString="";
    for (let i = 0; i < data.planets.length; i++) {
        domString += `<div class="cards">`;
        domString += `<p data-set="${data.planets[i].name}">${data.planets[i].name}</p>`;
        domString +=`<img class="image" src="${data.planets[i].imageUrl}">`;
        domString +=`</div>`;      
        printToDom(domString,"main")
        planetClick();
    }
};

const planetClick = (e) => {
    const eTarget = document.getElementsByClassName("cards");
    console.log(eTarget);
    for (let i = 0; i < eTarget.length; i++) {
        eTarget[i].addEventListener("click", http2);
    }
};
const planetCardBuilder = (data, target) => {
    console.log(data);
    console.log(target);
    for (let i = 0; i < data.planets.length; i++) {
        if(target === data.planets[i].name){
            let domString2="";
            domString2 += `<div class"large">`;
            domString2 += `<h2 class="text head line">${data.planets[i].name}</h2>`;
            domString2 += `<button class="line" type="button" id="allPlanets">X</button>`;
            domString2 +=`<div id="im">`
            domString2 += `<img class="image2" src="${data.planets[i].imageUrl}">`;
            domString2 +=`</div>`
            domString2 += `<p class="text">${data.planets[i].description}</p>`;
            domString2 += `<p class="text">${data.planets[i].isGasey}</p>`;
            domString2 += `<p class="text">${data.planets[i].numberofmoons}</p>`;
            domString2 += `<p class="text">${data.planets[i].nameoflargestmoon}</p>`;
            domString2 += `</div>`;
            printToDom(domString2,"main");
            showPlanets();
        }
    }
}
const showPlanets = (e) => {
    const button = document.getElementById("allPlanets");
        button.addEventListener("click", http3);
};
function http3 (e) {
    const http = new XMLHttpRequest();
        http.onreadystatechange = function() { 
            if (http.readyState == 4 && http.status == 200){
                const data = JSON.parse(http.responseText);
                console.log("http3:", data);
                let searchInput = document.getElementById('input');
                planetSearchBuilder(data, searchInput.value);
                console.log(e);
            }  
            else {
                console.log("status", http.status);
            }
        }
    http.open("GET", "planets.json");
    http.send();
    console.log(http);
};
const searchBarTarget = (e) => {
    const search = document.getElementById('input');
    search.addEventListener("keypress",http3);

};

const planetSearchBuilder = (data, target) => {
console.log(target);
let domString3="";

for (let i = 0; i < data.planets.length; i++) {
    if(target.toLowerCase() === data.planets[i].name.toLowerCase()){
    domString3 += `<div class="cards">`;
    domString3 += `<p data-set="${data.planets[i].name}">${data.planets[i].name}</p>`;
    domString3 +=`<img class="image" src="${data.planets[i].imageUrl}">`;
    domString3 +=`</div>`;      
    printToDom(domString3,"main");
    }
    }
};
function http2 (e) {
    const http = new XMLHttpRequest();
        http.onreadystatechange = function() { 
            if (http.readyState == 4 && http.status == 200){
                const data = JSON.parse(http.responseText);
                console.log("http2:", data);
                const clickedTarget = e.target.parentNode.childNodes[0].dataset.set;
                planetCardBuilder(data,clickedTarget);
            }  
            else {
                console.log("status", http.status);
            }
        }
    http.open("GET", "planets.json");
    http.send();
    console.log(http);
};
function httpI () {
    const http = new XMLHttpRequest();
        http.onreadystatechange = function() { 
            if (http.readyState == 4 && http.status == 200){
                const data = JSON.parse(http.responseText);
                console.log(data);
                intialplanetBuilder(data);
                planetClick();
            }  
            else {
                console.log("status", http.status);
            }
        }
    http.open("GET", "planets.json");
    http.send();
    console.log(http);
};
const startApplication = () => {    
    httpI();
    planetClick();
    searchBarTarget();
};
startApplication();
