// Primitives: Number, Strings, booleans
// More complex types: Arrays, objects
// Function types, Parameters

//Primitives 

let age: number;

age = 12;

let usernames: string;

usernames = "Niclas";

let isInstructor: boolean;

isInstructor = false;


//More complex types

let hoppies: string[];

hoppies = ['Sports', 'Cooking']

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Niclas',
    age: 27
};

//person = {
//    isemployee: true;
//};

let poeple: Person[];

// Type inference

let course: string | number = 'React - The complete guide';

course = 12345;

//Functions & types

function add1(a:number, b:number) {
    return a + b;
}

function printout(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3, 4, 5];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a','b','c','d','e'],'f');

// updatedArray[0].split('');

class Student{
    // firstname: string;
    // lastname: string;
    // age: number;
    // private courses: string[];

    constructor(
        public first: string, 
        public last: string, 
        public age: number, 
        private courses: string[]
    ){}

    enrol(coursename:string){
        this.courses.push(coursename);
    }

    listCourses(){
        return this.courses.slice();
    }
}
const student = new Student('Niclas', 'Schæffer',27,['Angular']);
student.enrol('React');
//student.listCourses(); => Angular, React
// student.courses => Angular, React

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let niclas: Human;

niclas = {
    firstName: 'Niclas',
    age: 27,
    greet(){
        console.log('Hello');
    },
};

class Instructor implements Human {
    firstName!: string;
    age!: number;
    greet(){
        console.log('Hello');
    }
};