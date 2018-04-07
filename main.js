const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};
const addEventTarget = () => {
    const eTarget = document.getElementsByClassName("cards");
    for (let i = 0; i < eTarget.length; i++) {
        eTarget[i].addEventListener("mouseenter", domPlanetPic);
        eTarget[i].addEventListener("mouseout", domPlanetName);
    }
}
const domPlanetName = (e) => {
    e.target.childNodes[1].classList.add('hide');
    e.target.childNodes[0].classList.remove('hide');
};
const domPlanetPic = (e) => {
    e.target.childNodes[0].classList.add('hide');
    e.target.childNodes[1].classList.remove('hide');
};

function httpI () {
    const http = new XMLHttpRequest();
        http.onreadystatechange = function() { 
            if (http.readyState == 4 && http.status == 200){
                const data = JSON.parse(http.responseText);
                let domString="";
                for (let i = 0; i < data.planets.length; i++) {        
                    domString += `<div class="cards" data-planetname="${data.planets[i].name}">`;
                    domString += `<p class="show"> ${data.planets[i].name} </p>`;
                    domString += `<img class="hide img" src="${data.planets[i].imageUrl}">`;
                    domString += `<p class="hide">${data.planets[i].description}</p>`;
                    domString += `<p class="hide">${data.planets[i].isGasey}</p>`;
                    domString += `<p class="hide">${data.planets[i].numberofmoons}</p>`;
                    domString += `<p class="hide">${data.planets[i].nameoflargestmoon}</p>`;
                    domString += `</div>`;}
                    printToDom(domString,"main")
                    addEventTarget();
// add more events here
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
};

startApplication();
httpI();