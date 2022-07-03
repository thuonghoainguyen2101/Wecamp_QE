const TYPE_NUMBER = "number";

export function add2Number(a, b) {
    // First check if a and b exist (zero is an allowed value), then check their types are correct
    if (
        (a || a === 0) &&
        (b || b === 0) &&
        typeof a === TYPE_NUMBER &&
        typeof b === TYPE_NUMBER
    ) {
        return a + b;
    }
    // If there's anything wrong with the input data, return false
    return false;
}

export function add3Numbers(a, b, c) {
    let tempSum = add2Number(a, b);
    if (tempSum) {
        return add2Number(tempSum, c);
    }
    return false;
}
