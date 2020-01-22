## Async For Each Polyfill

#### How to Use

Put below line at top of the file where you want to use this polyfill

```
require("async-for-each-polyfill");
```

```
let arr = [1,2,3,4,5,6]
arr.asyncForEach((item)=>{
    // Your Asyncronous Code with async await
})
```
