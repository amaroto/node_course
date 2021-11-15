console.log('ini');

setTimeout( () => {
    console.log('Timeout first');
}, 3000);

setTimeout( () => {
    console.log('Timeout second');
}, 0);

setTimeout( () => {
    console.log('Timeout third');
}, 0);

console.log('end')