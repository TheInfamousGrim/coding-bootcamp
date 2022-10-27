// TODO: Add a comment describing what the `position` parameter means for this function.
const fibonacci = (position) => {
    // TODO: Add a comment describing the purpose of this conditional statement.
    // If the position is less than two it will return the position
    if (position < 2) {
        return position;
    }

    // TODO: Add a comment describing the purpose of this return statement.
    // Else the position -1 + position -2 will be added together
    return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
console.log(fibonacci(9));

// fibonacci(9) =
// fibonacci(8) + fibonacci(7)
// fibonacci(7) + fibonacci(6) + fibonacci(6) + fibonacci(5)
// fibonacci(6) + fibonacci(5) + fibonacci(5) + fibonacci(4) + fibonacci(5) + fibonacci(4) + fibonacci(4) + fibonacci(3)

const iterativeFibonacci = (position) => {
  
}
