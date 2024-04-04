// console.log('Hello');
// console.log('Hello Rohit');

// var message='hello rk';
// console.log(message);
// var age=19;
// console.log(age)



// function emp(){
//      for(var i=0;i<5;i++)
//      {
//         console.log('--',i);
//      } console.log(i);
//  }
//  emp();


// let message="hello";
// console.log(message);
// message="rohit";
// console.log(message);

// console.log(message);
// let message="hello";

// const message="hello ";
// // message="hii";
// console.log(message);
// message="hi";
// console.log(message);

//DATA TYPES OF JAVASCRIPT

// let age='abcd';
// age='abc';
// console.log(typeof(age))
// console.log(age)
  
// let _='abc';
// _='abbc';
// console.log(_);

// let arr=['R','o','h','i','t'];
// arr[0]='abcd'
// console.log(arr)

// let str='12';
// let age=20;
// let ans=age+(str);
// console.log(ans)

// let str='12';
// let p=parseInt(str);
// let n=Number(str);
// console.log(p,n)

// let str='12.12';
// let p=parseInt(str);
// let n=Number(str);
// console.log(p,n)

// let a='12';
// let b=12;
// if(a==b){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }
// if(a===b){
//     console.log('yes,again');
// }
// else{
//     console.log('no,again');
// }

// let a=['a','b','c','d'];
// let cpy=a;
      //console.log(a,cpy);
// if(a==cpy){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }
// if(a===cpy){
//     console.log('yes,again');
// }
// else{
//     console.log('no,again');
// }

//!=
//!==

// const str="Rohit";
// const na=`My name is:${str}`;
// //const ans=na+str
// console.log(na);

// const str="Rohit";
// const na='My name is:';
// const ans=`${na} ${str}`;
// console.log(ans);


// const str="Prajapati.";
// const na='My name is:';
// const ans=`${na} ${str}`;
// const ans2=na +' ' +str;
// console.log(ans);
// console.log(ans2);



// let a=1;
// if(a){
    //     console.log("yes");
    
    // }else{
        //     console.log("no")
        // }
        // let a=0;
        // if(a){
            //     console.log("yes");
            
            // }else{
                //     console.log("no")
                // }
                
                // function fun(x){
                //     console.log(x);
                // }
                // const r1="rohit"
                // fun(r1);
                // fun("Rohit");
                
                
                // 
                // function sum(a,b)
                // {
                //     if(a && b)
                //     {
                //     console.log(a);
                //     } 
                //     else 
                //     {
                    
                
                //    console.log(b);
 //     }
 // }
 // sum(20);
//   function sum(a=0,b=0)
//   {
//     console.log(a+b);
//   }
//   sum(0);
//   sum(2);

//   sum(2,3);

//function declaraton
// function print()
// {
// console.log('--');
// }

// //function assignment(named)
// const a = function print()
// {
// console.log('--');
// }

// //function assignment(anonymous)
// const b = function print()
// {
// console.log('--');
// }

// // Arrowfunction assignment(anonymous)
// const c =  ()=>{
// console.log('--');
// }
// print();
// a();
// b();
// c();

// let a=1;
// switch(a)
// {
//     case 1:{
//         console.log('hii 1');
//     }
// break;
//     case 2:{
//         console.log('hello 2');
//     }
// break;
//     case 3:{
//         console.log('hii 3');
//     }
// break;
// default:{
//     console.log("wrong choise");
// }
// }

// const obj=new Object();
// obj[1]='one';
// obj[2]='two';
// obj[10]='ten';
// obj['name']='Rohit';
// console.log(obj)

// const obj={};
// obj[1]='one';
// obj[2]='two';
// obj['name']='Rohit';
// console.log(obj);

// const obj={
//     1:'one',
//     'name': "Rohit ",
//     'lastname':'Kumar',
//     12:'twelve',
// };
// const fullName = obj.name +''+obj.lastname
// const fullName1 =`${obj.name}${obj.lastname}`
// console.log(fullName);
// console.log(fullName1);

const obj={
    'firstname':"Rohit",
    'lastname':"Kumar",
    'age':22,
    'Address':"Muradnagar"
};
const x=prompt('please tell the property to know');
console.log(obj(x));
// obj.firstname=prompt("Enter Name")