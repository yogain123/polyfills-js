let p1 = new Promise((resolve, reject) => {
    resolve(1);
});

let p2 = new Promise((resolve, reject) => {
    resolve(2);
});

let p3 = new Promise((resolve, reject) => {
    reject(3);
});


//Promise.allSettled polyfill
Promise.allSettledPolyFill = async function(promiseArr) {
    let resarr = [];
    let counter = 0;
    for (const item of promiseArr) {
        try {
            resarr.push( {status:"fulfilled", value:await item});
            counter++;   
        } catch (error) { 
            resarr.push({status:"rejected", value:error}) 
        }
    }
    return Promise.resolve(resarr)
}

Promise.allSettledPolyFill([p1,p2,p3]).then((res) => {
    console.log(res);
})

/*
[ { status: 'fulfilled', value: 1 }, 
  { status: 'fulfilled', value: 2 }, 
  { status: 'rejected', value: 3 } ] 
*/
