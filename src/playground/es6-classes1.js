class Person {
    constructor(name='Anonymous',age=0){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
        return `Hi! ${this.name}!`;
    }
    getDesciption(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major; // flipping twice to get true or false value
    }
    getDesciption(){
        let description=super.getDesciption();
        if (this.hasMajor()){
            description += ` .Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name,age,homelocation){
        super(name,age,homelocation);
        this.homelocation=homelocation;
    }
    getGreeting(){
        let greeting=super.getGreeting();
        if(this.homelocation){
            greeting+=` I'm visiting from ${this.homelocation}`;
        }
        return greeting;
    }
}

const me= new Traveler('Sugat Bajracharya',17,'sundhara');
console.log(me);
console.log(me.getGreeting());

const other= new Student();
console.log(other);
console.log(other.getGreeting());