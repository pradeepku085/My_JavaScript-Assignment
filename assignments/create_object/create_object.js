function CreateObject(arr) {
    // Write your code here
    let obj = {};
    for(let i=0; i<arr.length; i=i+2){
    let k =arr[i];
    let v = arr[i+1];
    obj[k]= v;
    }
    return obj;
}

module.exports = CreateObject;