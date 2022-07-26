// myMap() FUNCTION DEFINITION
function myMap(inputArray,callBackFunction){
    let mapOutputArray = [];
    for(i=0;i<inputArray.length;i++){
        mapOutputArray.push(callBackFunction(inputArray[i]));
    }
    return mapOutputArray;
}
// TEST myMap() FUNCTION 
const array1 = [4, 9, 16, 25];
const mapArray = myMap(array1,Math.sqrt)
console.log("map() output: "+mapArray);


// myFilter() FUNCTION DEFINITION
function myFilter(inputArray,callBackFunction){
    let filterOutputArray = [];
    for(i=0;i<inputArray.length;i++){
        if(callBackFunction(inputArray[i]))
        filterOutputArray.push(inputArray[i]);
    }
    return filterOutputArray;
}
// TEST myFilter() FUNCTION 
function checkAdult(age) {
    return age >= 18;
}
const ages = [32, 33, 16, 40];
const result = myFilter(ages,checkAdult);
console.log("filter() output: "+result);


// myReduce() FUNCTION DEFINITION
function myReduce(inputArray,callBackFunction){
    let reduceOutput=0;
    for(i=0;i<inputArray.length;i++){
        reduceOutput = callBackFunction(reduceOutput, inputArray[i]);
    }
    return reduceOutput;
}
// TEST myReduce() FUNCTION 
const array2 = [15.5, 2.3, 1.1, 4.7];
const reduceResult = myReduce(array2,getSum)
function getSum(total, item) {
    return total + Math.round(item);
}
console.log("reduce() output: "+reduceResult);


// myForEach() FUNCTION DEFINITION
function myForEach(inputArray,callBackFunction){
    for(i=0;i<inputArray.length;i++){
        callBackFunction(inputArray[i]);
    }
}
// TEST myForEach() FUNCTION
let sum = 0;
const numbers = [65, 44, 12, 4];
myForEach(numbers,myFunction)
function myFunction(item) {
  sum += item;
}
console.log("forEach() output: "+sum);