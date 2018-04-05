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
        domString += `<p> ${planetsArray[i].name} </p>`;
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
        eTarget[i].addEventListener("click", showstuff);
    }
}
    
const showstuff = (e) => {
    console.log("i clicked that");
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
