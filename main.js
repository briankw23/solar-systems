
console.log("start of JS", Date.now());

const printToDom = (domString, divId) => {
    document.getElementById("main").innerHTML = domString;
    };
    
    function Xhrload(){
    const data = JSON.parse(this.responseText);
    console.log("data", data);
    domString(data.planets);
    };

    const domString = (planetsArray) =>{
        let domString="";
        for (let i = 0; i < planetsArray.length; i++) {
            domString += `<div class="cards">`;
            domString += `<div> ${planetsArray[i].name} </div>`;
            domString += `</div>`;
        }
        printToDom(domString,"main")
    };

    function Xhrfail(){
        console.log("fail");
    }
    const startApplication = () => {
        let myRequest = new XMLHttpRequest();
        myRequest.addEventListener("load", Xhrload);
        myRequest.addEventListener("error", Xhrfail);
        myRequest.open("GET", "planets.json");
        myRequest.send();
        console.log("myrequest", myRequest);
    };
    console.log("start of JS", Date.now());
    startApplication();