const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};
const intialplanetBuilder = (data) => {
    let domString="";
    for (let i = 0; i < data.planets.length; i++) {
        domString += `<div class="cards">`;
        domString += `<p>${data.planets[i].name}</p>`;
        domString +=`<img class="image" src="${data.planets[i].imageUrl}">`;
        domString +=`</div>`;      
        printToDom(domString,"main")
    }
};
function httpI (e) {
    const http = new XMLHttpRequest();
        http.onreadystatechange = function() { 
            if (http.readyState == 4 && http.status == 200){
                const data = JSON.parse(http.responseText);
                console.log(data);
                intialplanetBuilder(data);
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
