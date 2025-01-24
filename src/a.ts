
const greet = (firstName : string) : void =>  {
  console.log(`hello ${firstName}`);
}

let firstName: string = "Utkarsh";
greet(firstName);


const sum = (a : number , b : number) : number => {
  return a + b;
}

const val: number = sum(5 , 10);
console.log(val);


const isEven = (x : number) : boolean => {
  if(x % 2 === 0) return true;
  else return false;
}

const ans : boolean = isEven(3);
console.log(ans);


const callback = () : void => {
  console.log("hello");
}

// function returning another function with a delay of 1s

const runFunc = (callback : () => void) : void => {
  setTimeout(() => {
    callback();
  } , 1000);
}

runFunc(callback);

interface User {
  firstName : string,
  lastName : string ,
  email : string ,
  age : number
}

const user: User = {
  firstName : "Utkarsh",
  lastName : "Awasthi",
  email : "utkarsh100@gmail.com",
  age : 22
}

const isLegal = (user : User) : boolean => {
  if(user.age < 18) return false;
  else return true;
}

const isLegalAns:boolean = isLegal(user);
console.log("from isLegal" , isLegalAns);


// interface Person {
//   name : string,
//   age : number ,
//   greet (phrase : string) : void,
// }

// class Employee implements Person {
//   name : string;
//   age : number;

//   constructor(n : string , a : number){
//     this.name = n;
//     this.age = a;
//   }

//   greet(phrase : string){
//     console.log(`${phrase} ${this.name}`);
//   }
// }


// A variable that can be either a number or a string
let value: number | string;

value = 42; // Valid
value = "Hello, world!"; // Valid
//value = true; // Error: Type 'boolean' is not assignable to type 'number | string'

function print(value: string | number) {
  console.log(value);
}

print(123); // Valid
print("Hello"); // Valid
//print(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'


// A type with both `Person` and `Employee` properties
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

// Intersection of `Person` and `Employee` - a type that has all properties of both
type PersonEmployee = Person & Employee;

const employee: PersonEmployee = {
  name: "Utkarsh",
  age: 22,
  employeeId: 1234,
  department: "Engineering"
};

/* We can also intersect types when working with functions, allowing a function to accept arguments that conform to multiple types.
*/

interface A {
  a: string;
}

interface B {
  b: number;
}

const func = (param: A & B) => {
  console.log(param.a, param.b);
};

func({ a: "Hello", b: 42 }); // Valid
