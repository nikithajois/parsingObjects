var person = {
    name: "nikki",
    age: 23,
    email: "n@n.com",
  };

let person2 = {};
for(x in person)
{
    //x takes the value of name, age and email in successive iteration
    console.log(person[x]);
    person2[x] = person[x];
}
person2.age=22;

console.log(person2);


