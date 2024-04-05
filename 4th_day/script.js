// let a= new String("Rohit");
// let b="Rohit;"
// if(a==b)
// {
//     console.log("Yes");
// }
// else{
//     console.log("no");
// }

// const obj={
//     name:'Rohit',
//     lastName :'Kumar',

// }
// const obj={
//     'name'='Rohit',
//     'lastName' ='Kumar',

// }

// console.log(obj);
// document.write(obj);


// const obj={
//     "name":'Rohit',
//     "lastName" :'Kumar',

// }
// const str=JSON.stringify(obj);
// document.write(str);

// cannot reasign const object
// const obj={
//         "name":'Rohit',
//         "lastName" :'Kumar',
    
// }
// obj.age=20;

// obj = {
//     "name":'Rohit',
//     "lastName" :'Kumar', 
// }
// console.log(obj);

// const obj = {
//          "name":'Rohit',
//          "lastName" :'Kumar', 
//      }
//       obj.name=20;
//      console.log(obj);

// const arr=[1,2,3,4,];
// arr=[6,7,8,9];
// console.log(arr);


// const arr=[1,2,3,4,];
// arr[10]=50;
// arr.push(10);
// console.log(arr);

// const arr=[1,2,3,4,];

// arr[2]=6 
// console.log(typeof(arr));
// console.log(arr);


// const obj = {
//               "name":'Rohit',
//             "lastName" :'Kumar', 
//          }
// const arr=[1,2,3,4,]; 
// console.log(Array.isArray(obj));
// console.log(Array.isArray(arr));
// console.log(typeof(NULL));
// console.log(Array.isArray(arr));

// function checkifobject(x)
// {
//   if(Array.isArray(x)){
//     console.log("not object");
//   }
//   else if(typeof(x)=="object"){
//     console.log(" object");
//   }  
//   else
//   {
//     console.log("Not object,This is value");
//   }  
// }
// checkifobject(5);

// function checkifobject(x)
// {
//   if(Array.isArray(x)){
//     console.log("not object");
//   }
//   else if(typeof(x)=="object"){
//     console.log(" object");
//   }  
//   else
//   {
//     console.log("Not object,This is value");
//   }  
// }
//  checkifobject([]);
//  const arr=['name',2,true];
//  const obj={
//  'name':"Rohit",age:20,1:'else'
//  }     
// for(let i=0;i<4;i++)
// {
//     console.log(i);
// }
// for(let i=0;i<4;i++)
// {
//     console.log(arr[i]);
// }
// for(let i=0;i<4;i++)
// {
//     console.log(i);
// }
// console.log(obj);

// for(let i of arr)
// {
//      console.log(i);
// }
// for(let i of obj)
// {
//      console.log(i);
// }
// for(let i in arr)
// {
//      console.log(i);
// }
// for(let i in obj)
// {
//      console.log(i);
// }

// console.log(window)
// console.log(innerHeight);
// console.log(innerWidth);

// window.console.log(window)
// window.console.log(window.innerHeight);
// window.console.log(window.innerWidth);

// console.dir(window.document);
// console.dir(window)
// console.log(window.document)

// const res
// =
// document.getElementsByTagName('h2');
// console.log(res);
 
// const res
// =
// document.getElementById('ht1');
// console.log(res);

// const res=document.querySelectorAll('div>ht2');
// console.log(res);

// const res=document.getElementById("ht1");
// res.innerText="Hello, Rohit"
// res['innerText']="Hello, Rohit"
//

// const res=document.getElementsByTagName("div");
// res[0].innerHTML="<h4>Hello, Rohit</h4>"
// res[0].innerText="<h4>Hello, Rohit</h4>"
// res[0].tagName="h1"
// console.log(res);


// const ne =document.createElement("h3");
// ne.innerText="Dynamic Text";
// console.log(ne);
// document.body.appendChild(ne);

// const ne =document.createElement("h3");
// ne.innerText="Dynamic Text";
// console.log(ne);
// const firstdiv = document.getElementsByTagName("div")
// firstdiv[0].appendChild(ne);


// const ne =document.createElement("h3");
// ne.innerText="Dynamic Text";
// const firstdiv = document.getElementsById("div")
// firstdiv[0].appendChild(ne);


// const ne =document.createElement("p");
// ne.innerText="Dynamic Text";
// const firstdiv = document.getElementsByTagName("p")
// firstdiv[0].appendChild(ne)
// firstdiv[0].removeChild(ne)


// const res = 
// document.querySelector('div');
// console.log();res
// div.innerHTML = "<p>helllo</p>";
// div[0].innerHTML = "<p>helllo</p>";
// res.remove();
// const c=
// document.querySelector('p');
// document.querySelector('p:nth-of-type(2');
// res.removeChild(c);

// function getinfo(){
    // console.log("Btn clicked");
    // const d = document.querySelector("div")
    // const el= document.createElement('p');
    // el.innerText = "My name is Rohit";
    // d.prepend(el);
    // d.prepend("My name is Rohit")
// }


// function getinfo(e){

//     console.log(e);
//     // const d = document.querySelector("div")
//     // d.prepend("My name is Rohit")

// }

//  function getinfo(e){
    //  console.log(e);
//     // e.target.class='abc';
//     // e.target.setAttribute('style','color:red');
//     // e.target.setAttribute('style','background-color:green');

    //  e.target.style.backgroundColor='green';
    //  e.target.style.color='red';
     
// }


////Higher order function

// function sum(a,b){
//     return a+b;
// }

// function print(x){
//     console.log('    ****',x,'****    ');
// }
// const ans = sum(3,4);
// print(ans);



// function sum(a,b, fun){
//     const ans= a+b;
//     fun(ans);

// }

// function print(x){
//     console.log('    ****',x,'****    ');
// }
// sum(3,4, print);



