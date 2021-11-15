require('colors');

const showMenu = () => {
    return new Promise(resolve => {

        console.clear();

        console.log('=========================='.green);
        console.log('Select option'.green);
        console.log(`==========================\n`.green);
    
        console.log(`${'1.'.green} Create task`);
        console.log(`${'2.'.green} List tasks`);
        console.log(`${'3.'.green} List complete tasks`);
        console.log(`${'4.'.green} List pending tasks`);
        console.log(`${'5.'.green} Task complete`);
        console.log(`${'6.'.green} Delete task`);
        console.log(`${'0.'.green} Exit`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Selection option: ', (opt) => {
            readline.close();
            resolve(opt);
        });

    });
}

const pause = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPress ${'ENTER'.green} to continue: \n`, (opt) => {
            readline.close();
            resolve(opt);
        });
    });
};

module.exports = {
    showMenu,
    pause
};