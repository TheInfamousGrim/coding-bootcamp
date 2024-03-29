// TODO: Refactor the class to a factory function.
// class Lesson {
//     constructor() {
//         this.title = 'Module 17 - Computer Science';
//         this.description = 'CS for JS';
//     }

//     information() {
//         console.log(this.title, this.description);
//     }
// }

// csForJS functions
const getInformation = (state) => ({
    // Log the title and description
    information: () => console.log(state.title, state.description),
});

// create a factory function
const Lesson = () => {
    const state = {
        title: 'Module 17 - Computer Science',
        description: 'CS for JS',
    };

    return { ...getInformation(state) };
};

const csForJS = Lesson();
csForJS.information();
