// Use Moment.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
const gradDate = moment('24/12/2022', 'DD-MM-YYYY').format('MMM Do, YYYY');
$('#1a').text(gradDate);

// TODO: 2. What day of the week will 1/1/2022 be?
const weekDay = moment('1/1/2022', 'M-D-YYYY').format('dddd');
$('#2a').text(weekDay);

// TODO: 3. Out of 365, what day of the year is today?
const now = moment();
$('#3a').text(now.format('DDD'));

// TODO: 4. What is the current time in the format: hours:minutes:seconds
const time = moment();
$('#4a').text(time.format('HH:mm:ss'));

// TODO: 5. What is the current Unix timestamp?
const unix = moment().unix();
$('#5a').text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
const unixFormat = moment.unix(1318781876);
$('#6a').text(unixFormat);
