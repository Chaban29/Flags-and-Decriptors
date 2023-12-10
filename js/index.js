"use strict";

// const user = {
//   name: "Roman",
//   age: 22,
//   country: "Ukraine",
// };

console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperties(user, {
  name: {
    writable: false, // Заборона змінювати
    enumerable: false, // Заборона перераховувати в циклах
    configurable: false, // Заборона видаляти
  },
  age: {
    writable: false, // Заборона змінювати
    enumerable: false, // Заборона перераховувати в циклах
    configurable: false, // Заборона видаляти
  },
});

console.log(user);

for (let key in user) {
  console.log(user[key]);
}

const user = {
  name: "Roman",
  toString() {
    return this.name;
  },
};

const userNamePropetry = Object.getOwnPropertyDescriptor(user, "name");
// console.log(userNamePropetry);
// console.log(JSON.stringify(userNamePropetry, null, 2));

Object.defineProperty(user, "name", {
  writable: false,
});
Object.defineProperty(user, "toString", {
  writable: false,
  enumerable: false,
});

console.log(user);

user.name = "Bogdan";

console.log(user);

for (let key in user) {
  console.log(user[key]);
}

console.log(Object.keys(user));

const person = {
  name: "Roman",
};

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: true,
  configurable: false,
});
const personConfig = Object.getOwnPropertyDescriptor(person, "name");
console.log(JSON.stringify(personConfig, null, 2));

const user = {};
let setUserNameAndFlags = Object.defineProperty(user, "name", {
  value: "Roman",
});
// console.log(setUserNameAndFlags);
console.log(Object.getOwnPropertyDescriptor(user, "name"));

let user = {
  name: "Roman",
};

Object.defineProperty(user, "name", {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));

console.log(user);
user.name = 'Bogdan';
// console.log(user);

const user = {};

Object.defineProperty(user, "name", {
  value: "Roman",
  writable: false,
  enumerable: false,
  configurable: true,
});

user.name = "Ivan";
(user.age = 22),
  (user.toString = function () {
    return `User name is ${this.name}, user Age is ${this.age}`;
  });

console.log(user);
console.log(Object.getOwnPropertyDescriptor(user, "age"));
console.log(user.toString());

Object.defineProperty(user, "toString", {
  enumerable: false,
});
Object.defineProperty(user, "age", {
  enumerable: false,
});

for (let key in user) {
  console.log(user[key]);
}

console.log(Object.keys(user));

let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(+Math.PI.toFixed(2));

console.log(descriptor);

let stopChangeUserName = Object.defineProperty(user, "name", {
  writable: false,
});
user.name = 'Bogdan';
console.log(stopChangeUserName);

const user = {};

const createUserObject = Object.defineProperties(user, {
  name: { value: "Roman", writable: false, configurable: false },
  surname: { value: "Chaban", writable: true, enumerable: false },
});

user.age = 22;
user["country"] = "The still and Power: = Ukraine";
Object.preventExtensions(user);
user.address = {
  street: "Bogdana Khmelnytskogo",
  house: "7 A",
};
console.log(Object.getOwnPropertyDescriptors(user));
console.log(Object.isSealed(user));

const user = {
  name: "Roman",
};

Object.defineProperty(user, "name", {
  writable: false,
  enumerable: true,
  configurable: true,
});

// for (let key in user) {
//   console.log(user[key]);
// }

user["last name"] = "Chaban";
user.name = "Bogdan";

Object.defineProperty(user, "last name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

Object.defineProperty(user, "age", {
  value: 22,
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptor(user, "last name"));

console.log(user);
console.log(Object.getOwnPropertyDescriptor(user, "age"));

const user = {
  name: "Roman",
  toString: function () {
    return this.name;
  },
};

Object.defineProperty(user, "toString", {
  enumerable: false,
});

for (let key in user) {
  console.log(key);
}

console.log(Object.keys(user));

// let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(JSON.stringify(descriptor, null, 2));

let user = {
  name: "Roman",
  ["last name"]: "Chaban",
};

Object.defineProperty(user, "name", {
  writable: true,
});

console.log("Before > " + user.name);
user.name = "Bogdan";
console.log("After > " + user.name);

const person = {
  name: "Roman",
};

const personJSONProperties = Object.getOwnPropertyDescriptor(person, "name");
// console.log(JSON.stringify(personJSONProperties, null, 2));

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: true,
  configurable: false,
});

person.name = "Bogdan";
delete person.name;
console.log(person);

const user = {};

const createUserProperty = Object.defineProperty(user, "name", {
  value: "Roman",
  writable: true,
  enumerable: false,
  configurable: false,
});

console.log(user);
("use strict");

const user = {
  name: "Roman",
};

const userRenameProperty = Object.defineProperty(user, "name", {
  writable: false,
  enumerable: false,
});

user.name = 'John';
user["last name"] = " Chaban";
(user.age = 22), console.log(user);

const objectToArray = JSON.parse(JSON.stringify(user));
console.log(objectToArray);

for (let key in user) {
  console.log(user[key]);
}

const user = {
  name: "Roman",
  toString: function () {
    return `Hello, ${this.name}`;
  },
};

console.log(user.toString());
Object.defineProperty(user, "toString", {
  enumerable: false,
});

let person = {
  name: "Roman",
  ["last name"]: "Chaban",
  age: 22,
  address: {
    street: "Bogdana Khmelnhytskogo",
    house: 7,
  },
  country: "Ukraine",
  personInfromation: function () {
    return `Hello, my name is ${this.name} ${this["last name"]},
i live in ${this.country}, i have a ${this.age} years old`;
  },
};
Object.preventExtensions(person);
Object.seal(person);

person["email adress"] = "roman.chaban1001@gmail.com";
delete person.address;
// console.log(person);

const user = {
  name: "Roman",
  age: 22,
};

Object.defineProperty(user, "name", {
  writable: false, // Заборонаяє змінювати
  enumerable: false, // Забороняє показувати ключ-значення в циклі for(var in obj);
  configurable: true, // Забороняє видаляти
});

user.name = "Bogdan";
// console.log(user);
// for (let key in user) {
//   console.log(user[key]);
// }

delete user.name;

console.log(user);

Object.defineProperties(user, {
  name: {
    writable: false,
    enumerable: true,
    configurable: false,
  },
  age: {
    writable: true,
    enumerable: false,
    configurable: true,
  },
});

console.log(Object.getOwnPropertyDescriptors(user));

const user = {
  ["last name"]: "Chaban",
};

// const descriptor = Object.getOwnPropertyDescriptor(user, ["last name"]);

console.log(JSON.stringify(descriptor, null, 2));

Object.defineProperty(user, ["last name"], {
  writable: false,
  configurable: false,
  enumerable: false,
});

const descriptorTwo = Object.getOwnPropertyDescriptor(user, ["last name"]);

console.log(descriptorTwo);

const user = {
  name: "Roman",
  ["last name"]: "Chaban",
};

Object.defineProperty(user, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

for (let key in user) {
  console.log(key);
}

const user = {
  name: "Roman",
  toString: function () {
    return this.name;
  },
};

for (let key in user) {
  console.log(key);
}

const user = {
  name: "Roman",
  surname: "Chaban",
};

Object.defineProperties(user, {
  name: {
    writable: false,
    enumerable: true,
    configurable: false,
  },
  surname: {
    writable: true,
    enumerable: true,
    configurable: false,
  },
});

console.log(Object.getOwnPropertyDescriptors(user));
let userClone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
console.log(user);
console.log(userClone);

let user = {
  name: "Roman",
  ["last name"]: "Chaban",
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "name", {
  writable: false,
  enumerable: false,
  cofigurable: false,
});

delete user.name;

console.log(user);

const person = {
  name: "Roman",
  ["last name"]: "Chaban",
  age: 22,
};

// console.log('name' in person);

const user = {
  name: "Roman",
  ["surname"]: "Chaban",
  get fullName() {
    return `${this.name} ${this["surname"]}`;
  },
  set fullName(value) {
    [this.name, this["surname"]] = value.split(" ");
  },
};

user.fullName = 'Ivan Petrenko';

// console.log(user.name);
// console.log(user['surname']);

const userFullName = user.fullName;
console.log(userFullName);

let user = {
  name: "Roman",
  surname: "Chaban",
  // get fullName() {
  //   return `${this.name} ${this.surname}`;
  // },
  // set fullName(value) {
  //   [this.name, this.surname] = value.split(' ');
  // },
};

Object.defineProperty(user, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

user.fullName = "Ivan Petrenko";

alert(user.fullName);

for (let key in user) {
  console.log(key);
}

let user = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      alert("Your name is really small, but does not a 4 symbols");
      return;
    }
    this._name = value;
  },
};

user.name = "Roman";
alert(user.name);

user.name = "";

function User(name, age) {
  this.name = name;
  this.age = age;
}

let john = new User('Roman', 25);

console.log(john);

let user = {};

Object.defineProperty(user, "name", {
  value: "Roman",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(user, "name", {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));

user.name = "Bogdan";

user.toString = function () {
  return this.name;
};

Object.defineProperty(user, "toString", {
  enumerable: true,
});

// console.log(user.toString());

for (let key in user) {
  console.log(key);
}

const user = {};

Object.defineProperties(user, {
  name: {
    value: "Roman",
    writable: false,
    enumerable: true,
    configurable: false,
  },
  surname: {
    value: "Chaban",
    writable: false,
    enumerable: true,
    configurable: false,
  },
});

for (let key in user) {
  console.log(key);
}

// let userClone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

console.log(userClone);

const user = {
  name: "Roman",
  age: 22,
};
// Object.preventExtensions(user);
user["country"] = "Ukraine";
console.log(user);

let user = {
  name: "Roman",
  surname: "Chaban",
  // get fullName() {
  //   return `${this.name} ${this.surname}`;
  // },
  // set fullName(value) {
  //   [this.name, this.surname] = value.split(" ");
  // },
};

Object.defineProperty(user, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set (value) {
    [this.name, this.surname] = value.split(' ');
  }
});

user.fullName = "Ivan Petrenko";

console.log(user);

function CreateUser(name, surname, birthday) {
  this.name = name;
  this.surname = surname;
  this.birthday = birthday;
}
let user = new CreateUser("Roman", "Chaban");
console.log(user);

const user = {
  name: "Roman",
  age: 22,
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));

console.log(user);

for (let key in user) {
  console.log(user[key]);
}

Object.defineProperties(user, {
  name: {
    writable: false,
    enumerable: false,
    configurable: false,
  },
  age: {
    writeable: false,
    enumerable: false,
    configurable: true,
  },
});

Object.seal(user);

user.country = 'Ukraine';
delete user.age;
console.log(user);