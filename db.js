import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const db = await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
});

await db.migrate()

// 1. CALL THE query using a promise

db
    .all(`select * from greetings`)
    .then(result => {
        console.log(result)
    })

// 2. CALL THE query using await

// const result = await db.all(`select * from greetings`);

// console.log(result);

// const countResult = await db.get(`select count(*) as count from greetings`);
// console.log(countResult.count)

// await cannot be used inside a function need async
// 3. Create a function that returns all the greetings from the db
export async function getGreetings() {
    const result = await db.all(`select * from greetings`);
    return result;
}

        //3.1 METHOD 1
// const result = await getGreetings();

//  console.log(result);

        //3.2 METHOD 2

// getGreetings().then(result => console.log(result))

// CREATE A FUNCTION THAT ADDS A NEW GREETING
export async function addGreeting(language, greeting, id) {
    //sql statement type - INSERT
    // 
    const sql = `insert into greetings (language, greeting, id) values (?, ?, ?)`

   await db.run(sql, [language, greeting, id]);
}

// CREATE A FUNCTION THAT deletes A SPECIFIC GREETING
export async function deleteGreeting(id){
    const sql = `delete from greetings where id = ?`
   await db.run(sql, [id]);
}

// DELETE GREETING BY LANGUAGE

export async function deleteGreetingByLanguage(language) {
    const sql = `delete from greetings where language = ?`
    await db.run(sql, [language]);
}

//CREATE A FUNCTION THAT UPDATES A GIVEN GREETING

export async function updateGreeting(language, greeting, id) {
    const sql = `update greetings set language  = ?, greeting = ? where id = ?`;
    await db.run(sql, [language, greeting, id])
}


const result1 = await getGreetings();
console.log(result1); 

console.log('===============================')
//await addGreeting('Sepedi', 'Thobela');
//await addGreeting('Spanish', 'Hola');
//await addGreeting('Sepedi', 'Thobela');
// await addGreeting('SeTswana', 'Dumela');
// await addGreeting('Japanese', 'Konnichiwa');
// await addGreeting('Afrikaans', 'Hallo');
// await addGreeting('Xhosa', 'Molo');
// await addGreeting('Hebrew', 'Shalom');
// await addGreeting('Mandarin', 'Ni hao');
// await addGreeting('Swahili', 'Habari');
// await addGreeting('Yoruba', 'Bawo ni');
// await addGreeting('Bengali', 'Nomoshkar');
// await addGreeting('Fijian', 'Bula');
//await addGreeting('Sign Language', '')


//await deleteGreeting(5);
// await deleteGreeting(17);
// await deleteGreeting(18);
// await deleteGreeting(19);
//await deleteGreetingByLanguage('SeTswana');
//await updateGreeting('Sepedi', 'Thobela', 5);
//await updateGreeting('SeTswana', 'Dumela', 5)
//await addGreeting('SeTswana', 'Dumela', 5)







console.log('===============================')

const result2 = await getGreetings()
console.log(result2);
