//#1 
// reference type
// [2] === [2]; //false
// {} === {}; //false

//#2 what is the value of property a for each object.
// context vs scope
const object1 = { a: 5 }; // 5
const object2 = object1; // 5
const object3 = object2; // 5
const object4 = { a: 5};  // 5
object1.a = 4; // 1, 2, 3 are now 4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
// instantiation (for a template or object)
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  };
  
};

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound () {
    return `My name is ${this.name}. Mooooo`;
  };
}


const theCow = new Mamal('Betsy', 'Cow', 'Black & White');