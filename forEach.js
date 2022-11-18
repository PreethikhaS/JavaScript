//forEach

let nums = [42, 51, 24, 98, 65, 12];

//This forEach is a method, gives one by one value
//it will take one value and pass it to funtion, we need to accept the value and perform operation
//in the bracket we have to pass a funtion(arrow funtion)


nums.forEach((n) => {
  console.log(n*2);
});

//forEach also takes 3 parameters

nums.forEach( (n,i,nums)=>{
    console.log(n,i,nums);
});