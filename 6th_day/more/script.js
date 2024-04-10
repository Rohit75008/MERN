// console.log('hello');


// const arr = [10,23,45,55];

// const ans=arr.map((a)=>{
//     console.log(a);
//     return a*2;
//     // return a*a;
// })


// const ans1=arr.map(a=>a*a)

// console.log(ans);
// console.log(ans1);




// const arr = [10,23,45,55];

// const arr1 = [10.11,22.34,45.65];


// const ans2=arr1.map(a=>parseInt(a));

// // console.log(ans);
// console.log(ans2);


// const arr = [10,22,34];
// arr.push(99);
// console.log(arr);


// const ar=arr.push(99);
//  console.log(ar)




// const arr = [10,22,34];
// const ans=arr.filter((a)=>{
//     if(a>20)return true;
// else return false;
// })
// console.log(arr);
// console.log(ans);


// const arr =[
//     'Delhi',
//     'Mumbai',
//     'hennai',
//     'Kolkata',
//     'Pune',
//     'India',
//     'Russia',
//     'USA',
//     'Iraq'

// ]
// const ans = arr.filter((s)=>{
//     if(s.includes('i')|| s.includes('I')){ 
//         return true;
//     }
//     else false;
    
// }) ;
// console.log(ans);



// const arr =[
//     'Delhi,India',
//     'Mumbai,India',
//     'chennai,India',
//     'Kolkata,India',
//     'Pune,India',
//     'Shanghai,China',
//     'Beijing, China',
//     'Washington,USA',
//     'Texas,USA',
//     'Iraq'
    

// ]
// const ans = arr.filter((s)=>{
//     const ns= s.toLowerCase();
//     // if(s.includes('india')|| s.includes('India')){ 
//         if(ns.includes('india')){ 
//         return true;
//     }
//     else false;
    
// }) ;
// console.log(ans);




// const arr =[
//     'Delhi,InDia',
//     'Mumbai,india',
//     'chennai,IndiA',
//     'Kolkata,INDIA',
//     'Pune,India',
//     'Shanghai,China',
//     'Beijing, China',
//     'Washington,USA',
//     'Texas,USA',
//     'Iraq'
    
// ]
// const ans = arr.filter((s)=>s.toLowerCase().includes('india'));

// const ans1=ans.map((a)=>a.toUpperCase)
    
// console.log(ans1);





const arr=[10,22,34,50];
const ans = arr.reduce((a,b,c,d)=>{
     console.log(a,b,c,d);
     return a+b;
});
console.log(ans);