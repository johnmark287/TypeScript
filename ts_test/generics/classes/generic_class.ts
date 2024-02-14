class GenericNumber<T> {
    value: T;
    add: (x: T, y: T) => T;
}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.value = 0;
myGenericNumber.add = (x, y) {
    return x + y;
};
