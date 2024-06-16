const fs = require('fs');

function printUsersData() {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const users = JSON.parse(data);

        users.forEach(user => {
            console.log(`Name: ${user.name}`);
            console.log(`Age: ${user.age}`);
            console.log(`Address:`);
            console.log(`  Street: ${user.address.street}`);
            console.log(`  City: ${user.address.city}`);
            console.log(`  State: ${user.address.state}`);
            console.log(`  Zipcode: ${user.address.zipcode}`);
            console.log('----------------------------');
        });
    });
}

printUsersData();
