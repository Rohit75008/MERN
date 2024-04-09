function fetchAPI(){
const url ='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=L7P2WSVSWYGDHTUJTPPAYAB22'
fetch(url)
.then((res)=>res.json())
.then(renderUI);

}

fetchAPI();
const root=document.getElementById("root");

function renderUI(data){
    // const days= data.days;
    // console.log(data);
    const row = document.createElement("tr");

    const cell1 = document.createElement("th");
    cell1.innerText='Date'
    row.appendChild(cell1);

    const cell2=document.createElement("th")
    cell2.innerText= 'Maximum Temperature';
    row.appendChild(cell2);

    const cell3=document.createElement("th")
    cell3.innerText= 'Minimum Temperature';
    row.appendChild(cell3);
    
    root.appendChild(row);

    const childrow=document.createElement("tr")

    // const childrow = document.createElement("tr");
    const c1 = document.createElement("th");
    c1.innerText='Date'
    row.appendChild(c1);

    const c2=document.createElement("th")
    c2.innerText= 'Maximum Temperature';
    row.appendChild(c2);
   

    const c3=document.createElement("th")
    c.innerText= 'Minimum Temperature';
    row.appendChild(c3);

    root.appendChild(childrow);
}