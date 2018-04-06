const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
    };
    
function xhrload() {
    const data = JSON.parse(this.responseText);
    console.log("data", data);
    domString(data.planets);
    addEventTarget();
};

const domString = (planetsArray) =>{
    let domString="";
    for (let i = 0; i < planetsArray.length; i++) {
        domString += `<div class="cards" >`;
        domString += `<p id="p-name"> ${planetsArray[i].name} </p>`;
        domString += `<img id="i-name"src="${planetsArray[i].imageUrl}">`;
        domString += `</div>`;
    }
    printToDom(domString,"main")
};

function xhrfail(){
        console.log("fail");
    }
const addEventTarget = () => {
    const eTarget = document.getElementsByClassName("cards");
    for (let i = 0; i < eTarget.length; i++) {
        eTarget[i].addEventListener("mouseenter", showplanetpic);
        eTarget[i].addEventListener("mouseout", showplanetname);
    }
}
const showplanetpic = (e) => {
    console.log(e);
    const hoverplanet = e.target.childNodes[0].textContent; 
    console.log(hoverplanet);
    const imgA = document.createElement("img");
    let imgB = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7lu1ahBRp1tSOKA_Tp0zrufoCOMuWR7C5v7r9S7394JCXXGrv_Q'>";
    const enterplanet = e.target.childNodes[0].innerHTML = imgB;
};

const showplanetname = (e) => {
    const hoverplanet = e.target.childNodes[0].textContent; 
    console.log(hoverplanet, "mouse out mf");
}

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", xhrload);
    myRequest.addEventListener("error", xhrfail);
    myRequest.open("GET", "planets.json");
    myRequest.send();
    console.log("myrequest", myRequest);
};

startApplication();
