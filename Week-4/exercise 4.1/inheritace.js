class Person{
    constructor(name){
        this.name =name;
    }

 printName(){
     
        return this.name;

    }
}

class Teacher extends Person{
    constructor(name,subject){
        super(name);
        this.subject = subject;
    }

    teach(subject){
        console.log(`${this.name} is teaching ${subject}` );
    }

}
const teacher = new Teacher("ram","science");
teacher.teach("science");