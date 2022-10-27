const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
    // TODO: Add a comment describing the purpose of this variable.
    // Sets the count to 0 and creates a variable that is available to the whole of the clickHandler function
    let count = 0;

    // TODO: Add a comment describing what is happening.
    // This is a closure function which allows the updated value to be returned
    return function () {
        // TODO: Add a comment describing how this variable is being scoped.
        // This variable is scoped to the closure statement and is increased by one
        count++;
        // TODO: Add a comment describing how we are using the 'count' variable.
        // Use a template literal to display the 'count' variable onto the button element.
        this.textContent = `Clicks: ${count}`;
    };
};

// TODO: Add a comment describing the purpose of this loop.
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clickHandler());
}
