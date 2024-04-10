// console.log('Start')
// setTimeout(()=>{console.log('Timeout...')},5000)
// console.log('End')


// console.log('Start')
// setTimeout(()=>{console.log('Timeout...')},5000)
// console.log('Intermediate')
// console.log('End')



// setTimeout(()=>{console.log('Timeout 1...')},5000)
// console.log('Start')
// setTimeout(()=>{console.log('Timeout 2...')},5000)
// console.log('Intermediate')
// console.log('End')



// setTimeout(()=>{
//     console.log('Timeout 1...')
// },9000)
// console.log('Start')
// setTimeout(()=>{
//     console.log('Timeout 2...')
// },5000)
// console.log('Intermediate')
// console.log('End')


//// promises.............

// function createOrder(x,fn){
//     console.log(x);
//     // fn('like123')
//     setTimeout(()=>{fn('like123')},5000)

//     setTimeout(()=>{fn('like123')},6000)
// }

// function makepayment(orderId){
//     console.log(orderId);
// }

// createOrder('soap',makepayment);



//.....write promises.....




// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{resolve("Rohit.....");},2000);});

//     console.log(p);

//     p.then((res)=>{
//      console.log(res);  
//      })




//  const pr = new Promise((resolve, reject)=>{
    
//     setTimeout(()=>{reject("This item is out of stock...");},5000);});
    
//     console.log(pr);
    
//         pr.then((res)=>{
//          console.log(res);  
//          }).catch((err)=>{
//             console.log(err)
//          })



// const pr = new Promise((resolve, reject)=>{
//     if(true){
//    setTimeout(()=>{resolve();},1000);
//     }
//     else{
//         reject();
//     }
// });

// console.log(pr);


// setTimeout(()=>{console.log('First timeout...')},1000)

// const pr = new Promise((resolve, reject)=>{
    
//     setTimeout(()=>{reject("This item is out of stock...");},1000);
// });
    
//     // console.log(pr);
    
//         pr.then((res)=>{
//          console.log(res);  
//          }).catch((err)=>{
//             console.log(err)
//          })




// const pr = new Promise((resolve, reject)=>{
    
//     setTimeout(()=>{reject("This item is out of stock...");},0);
// });
//    setTimeout(()=>{console.log('First timeout...')},
//    0)
    
//     // console.log(pr);
    
//         pr.then((res)=>{
//          console.log(res);  
//          }).catch((err)=>{
//             console.log(err)
//          })



// setTimeout(function abc(){
//     console.log('I am Rohit');
// },0);

// const pr = new Promise((res,rej)=>{
//     setTimeout(()=>{res('done')},0);
// })

// pr.then(function b(res){
//     console.log("promeise complete:",res);
// });

// setTimeout(function xyz(){
//     console.log('i am shivam')
// },0)





