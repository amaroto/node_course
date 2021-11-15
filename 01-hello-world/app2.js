const welcome = ( name, callback ) => {
    setTimeout( () => {
        callback(`Welcome ${name}`);
    }, 1000)

    return 'caca';
}

const a = welcome('Alejandro', (name) => {
    console.log('callback: ' + name);
});

console.log(a);