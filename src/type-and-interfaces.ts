// Type (pode unir dois types ou interfaces juntos para definir um novo type)
type UserType = {
    id: number;
    name: string;
    email: string;
    age?: number;
};

const user: UserType = {
    //se colocar [] na frente do UserType, cria uma lista desses tipos
    id: 23,
    name: "Guilherme",
    email: "guilherme@email.com",
    age: 31,
};

// Interface (diferença, faz o que o type faz mas também faz funções)
interface UserInterface {
    id: number;
    name: string;
    email: string;
    age?: number;
}

interface MathFunc {
    (x: number, y: number): number;
}

const sum: MathFunc = (x: number, y: number) => {
    return x + y;
};

// Interface com métodos
interface UserInterface2 {
    id: number;
    name: string;
    register(): string;
}

const user3: UserInterface2 = {
    id: 1,
    name: "Guilherme",
    register() {
        return "Registrado com sucesso!";
    },
};

// Interface com unios
interface AuthorInterface {
    books: string[]; //lista de strings
}

const author: AuthorInterface & UserInterface = {
    // E
    id: 3,
    email: "alguem@email.com",
    name: "Alguem",
    books: ["As chaves do reino", "Harry potter", "Código Limpo"],
};

const author2: AuthorInterface | UserInterface = {
    // Ou
    books: ["Mago Aprendiz"],
    id: 258,
    name: "AlguemAoQuadrado",
    email: "alguemaoquadrado@email.com",
};

export {};
