require('colors');

// const {showMenu, pause} = require('./helpers/messages');
const {inquirerMenu} = require('./helpers/inquirer');

console.clear();

const main = async() => {
    console.log('Hello world');

    let opt = '';

    do {
        opt = await inquirerMenu();

        if (opt !== '0') {
            // await pause();
        }

    } while (opt !== '0');

}

main();