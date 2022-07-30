const object1 = { 
    name:"bob",
    type:"human",
    age: 15,
    hobby:"boxing"
}
// 1
const object_copy0 = Object.assign({},object1)
//2
const object_copy1 = JSON.parse(JSON.stringify(object1));
//3
const object_copy2 = {};
for(let key in object1){
    object_copy2[key] = object1[key]
}
//4 
const object_copy3 = {...object1}


console.log(object_copy0);
console.log(object_copy1);
console.log(object_copy2);
console.log(object_copy3);