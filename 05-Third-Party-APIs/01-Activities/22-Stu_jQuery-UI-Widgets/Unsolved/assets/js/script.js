const formEl = $('#skills-form');
const nameInputEl = $('#skill-name');
const dateInputEl = $('#datepicker');
const skillsListEl = $('#skills-list');

const printSkills = function (name, date) {
    const listEl = $('<li>');
    const listDetail = name.concat(' on ', date);
    listEl.addClass('list-group-item').text(listDetail);
    listEl.appendTo(skillsListEl);
};

const handleFormSubmit = function (event) {
    event.preventDefault();

    const nameInput = nameInputEl.val();
    const dateInput = dateInputEl.val();

    if (!nameInput || !dateInput) {
        return;
    }

    printSkills(nameInput, dateInput);

    nameInputEl.val('');
    dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// Add Autocomplete widget here
//
$(() => {
    const availableTags = ['JavaScript', 'Node.JS', 'Bootstrap', 'React', 'CSS', 'Fiddle'];
    $('#skill-name').autocomplete({
        source: availableTags,
    });
});
// Add Datepicker widget here
//
$(() => {
    $(() => {
        $('#datepicker').datepicker();
    });
});
