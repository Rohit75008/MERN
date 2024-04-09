console.log("...APP Started...");

function callAPI() {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=b6f3370e8fa34401a688a90808460fb2")
        .then((res) =>  res.json())
        .then((data) => renderUI(data))
}

function renderUI(data) {
    const root = document.getElementById("root");
    
    const articles= data.articles;
    // console.log(articles);
    for(let i=0;i<articles.length;i++)
 { 
    const ar=articles[i];
    // console.log(ar);
    
    const div = document.createElement("div");
    // div.innerText = ar.title;
    div.setAttribute("class","news-card")
    const h3 = document.createElement("h3");
    h3.innerText=ar.title;
    div.appendChild(h3);

    const img=document.createElement("img");
    img.src = ar.urlToImage;
    div.appendChild(img);
    // const p = document.createElement("p");
    // p.innerText=ar.title;
    // div.appendChild(p);
    const a=document.createElement("a");
    a.innerText='readmoe...'
    a.target=
    a.href=ar.url
    div.appendChild(img);

    root.appendChild(div);
 }
}

callAPI()
// renderUI();
