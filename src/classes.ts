interface PersonInterface {
    id: number;
    firstName: string;
    age: number;

    // Metodos
    sayHello(): string;
    sayMyName(): string;
}

interface EmployeeInterface {
    salary: number;
    sayMySalary?(): number;
}

class Person implements PersonInterface {
    // Tipagem
    id: number;
    firstName: string;
    age: number;

    // private = faz com que as propriedades sejam acessiveis apenas dentro da classe
    // protected = faz com que as propriedades sejam acessiveis apenas dentro da classe e das subclasses (extends)
    // readonly = faz com que as propriedades possam ser alteradas apenas dentro do constructor

    // Função que é executada quando instanciamos a classe
    constructor(id: number, firstName: string, age: number) {
        this.id = id;
        this.firstName = firstName;
        this.age = age;
    }

    sayMyName(): string {
        return this.firstName;
    }

    sayHello(): string {
        return "Hello";
    }
}

const person = new Person(1, "Guilherme", 31);

class Employee extends Person implements EmployeeInterface {
    salary: number;

    constructor(id: number, firstName: string, age: number, salary: number) {
        super(id, firstName, age);
        this.salary = salary;
    }
}

export {}; //trata o arquivo individualmente, esquece os outros arquivos
