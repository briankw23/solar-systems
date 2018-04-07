const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};


// function xhrload () {
//     const data = JSON.parse(this.responseText);
//     console.log("data", data);
//     domString(data.planets);
//     addEventTarget();
// };
// function domPlanetPicData () { 
//     const data = JSON.parse(this.responseText);
//     console.log("data 2", data);
//     const domPlanetPic = (e) => {
//         console.log(e);
//     };
// };

// function domPlanetCardData () {
//     const data = JSON.parse(this.responseText);
//     console.log("data 3", data);
//     const domPlanetCard = (e) => {
//         console.log(e);
//     };
// };

// const domString = (planetsArray) =>{
//     let domString="";
//     for (let i = 0; i < planetsArray.length; i++) {
//         domString += `<div class="cards" >`;
//         domString += `<p id="p-name"> ${planetsArray[i].name} </p>`;
//         domString += `<img id="i-name"src="${planetsArray[i].imageUrl}">`;
//         domString += `</div>`;
//     }
//     printToDom(domString,"main")
// };

// function xhrfail(){
//         console.log("fail");
//     }
const addEventTarget = () => {
    const eTarget = document.getElementsByClassName("cards");
    for (let i = 0; i < eTarget.length; i++) {
        eTarget[i].addEventListener("mouseenter", domPlanetCard);
        eTarget[i].addEventListener("mouseout", domPlanetPic);
    }
}

const domPlanetCard = (e) => {

};

const domPlanetPic = (e) => {

};

// const startApplication = () => {    
//     let myRequest = new XMLHttpRequest();
//     myRequest.addEventListener("load", xhrload);
//     myRequest.addEventListener("load", domPlanetCardData);
//     myRequest.addEventListener("load", domPlanetPicData);
//     myRequest.addEventListener("error", xhrfail);
//     myRequest.open("GET", "planets.json");
//     myRequest.send();
//     console.log("myrequest", myRequest);
// };
// startApplication();


function httpI () {
    const http = new XMLHttpRequest();
        http.onreadystatechange = function() { 
            if (http.readyState == 4 && http.status == 200){
                const data = JSON.parse(http.responseText);
                let domString="";
                for (let i = 0; i < data.planets.length; i++) {        
                    domString += `<div class="cards" >`;
                    domString += `<p id="p-name"> ${data.planets[i].name} </p>`;
                    domString += `<img id="i-name"src="${data.planets[i].imageUrl}">`;
                    domString += `</div>`;}
                    printToDom(domString,"main")
                    addEventTarget();


            }  
            else {
                console.log("status", http.status);
            }
        }
    http.open("GET", "planets.json");
    http.send();
    console.log(http);
};



httpI();