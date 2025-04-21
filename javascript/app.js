const player = {
    name: "nico",
    age: 28,
    fat: true,
    sayHello: function (otherPersonName) {
        console.log(`Hello ${otherPersonName}, my name is ${this.name}`);
    }
};

console.log(player.name);
console.log(player);
player.lastName = "potato";
player.age = player.age + 1;
console.log(player["age"]);
console.log(player);

// const sayHello = (name, age) => {
//     console.log(`Hello ${name}, you are ${age} years old`);
// }

player.sayHello("형탁" , player.age);