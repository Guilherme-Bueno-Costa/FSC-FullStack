// Tipos básicos
const id: number = 10;
const course: string = "Full Stack Club";
const isPublished: boolean = false;
let id2: any; //anula a tipagem do typescript

// Arrays (listas)
const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["a", "b", "c"];
const boolenas: boolean[] = [true, false];
const anyValues: any[] = [1, "a", true];

// Tuples (tuplas)
const person: [number, string, boolean] = [1, "Shadow", false];
const employees: [number, string, boolean][] = [
    [1, "Shadow", false],
    [2, "Light", true],
];

// Union (forma, não tipagem)
const uid: number | string = 5;

// Enums
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

const direction1 = Direction.Left;
console.log(direction1); // => 2 pois o left está na posição 2 do objeto, mas pode assinalar valores  os itens do objeto

// Type Assertion
const cid: any = 1;
const customerId = cid as string;

const customerIds = ["1", "2", "3"];
let uuid = "123";

// Functions
const sum = (sum1: number, sum2: number): number => {
    return sum1 + sum2;
};

sum(2, 6);

// Void
const printMessage = (message: string) => {
    console.log(message); // Quando uma função não retorna nada ela é classificada como type void. Podemos aplicar o :void para garantir que ela nao retorne nada se esse for o objetivo
};
