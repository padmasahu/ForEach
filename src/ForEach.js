//forEach() method:
    //The forEach() method calls a function for each element in an array.

    function forEach(arr,forEachFunc){
    const forEachArr =[];
    for(let i=0;i<arr.length;i++){
        const result = forEachFunc(arr[i],i,arr);
        forEachArr.push(result);
    }
    return forEachArr;
}

let arr = [10,20,30,40];

const results = forEach(arr,num => num + 2);
console.log(results);