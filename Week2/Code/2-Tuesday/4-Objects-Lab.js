// 1 =>
{} // curly braces
'name': 'value'; //properties
object.method // dot notation
object['var'] // bracket notation
Object.create()
function objectConstructor(var1, var2) {
    this.var1 = var1; // object reference
    this.var2 = var2;
}

delete // deletes a property

for (let key in obj) // enumerating properties of an object
Object.keys(o) // returns an array of its own properties' names
Object.getOwnPropertyNames(o) // Returns an array containing all of its own properties' names

// 2 =>
const me = {};

me.name = "Kristyn";
me.age = 42;
me.email = "kristyn@foo.bar";

console.log(me.name);
me["age"] = 43;
console.log(me.age);
me["place of residence"] = "Milwaukee";
console.log(me["place of residence"]);

// 3 =>
const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

console.log(monster.name);
monster.type = "creature";
monster.age = 6;
console.log(monster);
monster.introduce = function() {
    console.log(this.type, this.age, this.name, this.color);
}

console.log(monster.introduce());

// 4 =>
const adventurer = {};
const ogre = {};

adventurer.name = "Casey";
adventurer.hitpoints = 9999999;
ogre.name = "Suresh";
ogre.hitpoints = 50;

adventurer.swing = function() {
    return Math.floor(Math.random() * 50);
}

ogre.swing = function() {
    return Math.floor(Math.random() * 5);
}

while (ogre.hitpoints > 0 && adventurer.hitpoints > 0) {
    adventurerAttack = adventurer.swing();
    ogre.hitpoints -= adventurerAttack;
    console.log(`Ouch! ${ogre.name} was hit for ${adventurerAttack} damage!`);
    if (ogre.hitpoints > 0) {
        ogreAttack = ogre.swing();
        adventurer.hitpoints -= ogreAttack;
        console.log(`Ouch! ${adventurer.name} was hit for ${ogreAttack} damage!`);
    }
}

console.log(ogre.hitpoints < 0 ? `${ogre.name} is no more!` : `${adventurer.name} is no more!`);
