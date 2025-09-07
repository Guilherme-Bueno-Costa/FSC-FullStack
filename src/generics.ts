const returnValue = <T>(value: T): T => value;

const message = returnValue<string>("Helo World");
const count = returnValue<number>(10);

const getFirstValueFromArray = <T>(array: T[]) => {
    return array[0];
};

const firstValueFromStringArray = getFirstValueFromArray<string>([
    "1",
    "2",
    "3",
]);

const qualquerCoisa = async (): Promise<number> => {
    return 23;
};
