// 4 -
function sum(a, b) {
    // 4 - a
    if (arguments.length < 2) {
        throw new Error("Function requires exactly two inputs.");
    }

    // 4 - b
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both inputs must be numbers.");
    }

    // 4 -
    return a + b;
}
