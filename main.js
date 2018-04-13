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
            domString2 += `<h2>${data.planets[i].name}</h2>`;
            domString2 += `<img class="image2" src="${data.planets[i].imageUrl}">`;
            domString2 += `<p class="text">${data.planets[i].description}</p>`;
            domString2 += `<p class="text">${data.planets[i].isGasey}</p>`;
            domString2 += `<p class="text">${data.planets[i].numberofmoons}</p>`;
            domString2 += `<p class="text">${data.planets[i].nameoflargestmoon}</p>`;
            domString2 += `<button></button>`;
            domString2 += `</div>`;
            printToDom(domString2,"main");
        }
        
        
    }
}
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
};
startApplication();
