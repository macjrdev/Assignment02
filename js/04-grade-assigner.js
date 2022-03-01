var grade = window.prompt('Enter grade between 1 and 100');

if (grade < 1 || grade > 100) {
    alert('Only numbers between 1 and 100 are ACCEPTED')
} else if (grade >= 90) {
    console.log('You received an A')
} else if (grade >= 80) {
    console.log('You received an B')
} else if (grade >= 70) {
    console.log('You received an C')
} else if (grade >= 60) {
    console.log('You received an D')
} else {
    console.log('You received an F')
};