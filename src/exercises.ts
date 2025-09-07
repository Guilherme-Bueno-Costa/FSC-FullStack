// Exercicios de type e interfaces
// 1. Crie os seguintes Types:
// - UserType, que contenha as propriedades id (number) e name (string)
// - BookType, que contenhas as propriedades id (number), name (string) e authorId (number)
// - AuthorType, que expanda o UserType e adicione a propriedade books (BookType[]) à ele
// Crie uma variável para cada um deles, e logue-as no console.

type UserType = {
    id: number;
    name: string;
};

type BookType = {
    id: number;
    name: string;
    authorId: number;
};

type AuthorType = UserType & {
    books: BookType[];
};

const user: UserType = {
    id: 37,
    name: "Anonymous",
};

console.log(user);

const bookGoT: BookType = {
    id: 28,
    name: "Game of Thrones",
    authorId: 77,
};

console.log(bookGoT);

const authorGoT: AuthorType = {
    id: 18,
    name: "Joe",
    books: [
        {
            id: 13,
            name: "A mentira",
            authorId: 8567,
        },
    ],
};

// 2. Crie uma lista de usuários (utilizando o UserType criado no exercício anterior) e logue-a no console.

const users: UserType[] = [
    {
        id: 3,
        name: "John",
    },
    {
        id: 87,
        name: "Londrin",
    },
];

console.log(users);

// 3. Crie uma interface chamada "MathFunc", que represente uma função que receba x (number) e y (number) e que retorne um number.
// Implemente a interface criada em duas funções.
interface MathFunc {
    (x: number, y: number): number;
}

const multiply: MathFunc = (x, y) => {
    return x * y;
};

const divider: MathFunc = (x, y) => {
    return x / y;
};

// 4. Crie as seguintes Interfaces:
// - ProductInterface, que contenhas as propriedades id (number), name (string) e price (number)
// - OrderInterface, que contenha as propriedades id (number) e products (ProductInterface[])
// Crie uma variável para cada uma deles, e logue-as no console.

interface ProductInterface {
    id: number;
    name: string;
    price: number;
}

interface OrderInterface {
    id: number;
    products: ProductInterface[];
}

const product: ProductInterface = {
    id: 18,
    name: "Bolo de chocolate",
    price: 87.54,
};

const order: OrderInterface = {
    id: 67,
    products: [
        {
            id: 7,
            name: "banana",
            price: 41,
        },
        {
            id: 19,
            name: "Cacau em pó",
            price: 62,
        },
    ],
};

console.log(product);
console.log(order);

// Exercicios classes

interface ProductInterface2 {
    readonly id: number;
    name: string;
    price: number;
    getFormattedPrice(): string;
}

class Product2 implements ProductInterface2 {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getFormattedPrice(): string {
        return `O preço do produto ${this.name} é: R$${this.price}`;
    }
}

class Tshirt extends Product2 implements ProductInterface2 {
    private size: string;
    private color: string;

    constructor(
        size: string,
        color: string,
        id: number,
        name: string,
        price: number
    ) {
        super(id, name, price);
        this.size = size;
        this.color = color;
    }

    getFormattedPrice(): string {
        return `O preço da ${this.name} é: R$${this.price}`;
    }
}

const tshirt = new Tshirt("M", "Gray", 52, "Camiseta North Face", 857.25);
console.log(tshirt);

export {};
