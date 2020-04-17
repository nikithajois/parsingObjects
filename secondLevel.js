var source = {
    post: { description: "hi nikki", operationId: "xxx" }, //Nesting - 2nd level object
    get: { description: " hi smushy", operationId: "yyy" },
    put: { description: " hi", operationId: "zzz" },
  };

//Deep Copying - allocates memory to the nested objects 
//Clone source to source2 
let source2=JSON.parse(JSON.stringify(source));
console.log("Initial source 2 " + JSON.stringify(source2));
let mockKey="Mock";

for(y in source2)
{
    source2[y]["operationId"] = source2[y]["operationId"] + mockKey;
}
console.log("Final source 2 " + JSON.stringify(source2));

console.log("Source 1 " + JSON.stringify(source));
// for(x in source)
// {
//     console.log(x);
//     console.log("value of key " + x +" is " + JSON.stringify(source[x]));
//     console.log(source[x]["description"]);
//     console.log(source[x]["operationId"]);
// 
// }
// console.log(source2);
