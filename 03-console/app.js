// import { argv } from 'yargs';

const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true
})
.check( (argv, options) => {
    if ( isNaN(argv.b)) {
        throw 'La base tiene que ser un numero';
    }
    return true;
})
.argv;

console.log(argv.b);