// --- Password Generator Function --- //

const passGenerator = (length, rule, characters) => {
    const charactsLower = 'abcdefghijklmnopqrstuvwxyz';
    const charactsUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactsUpperLS = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // for Lectura Simple without Upper o and i.
    const num = '01234567890123456789';
    const symb = '!@#$%^&*()!@#$%^&*()'; 
    let finalCharacts = '';
    let finalPass = '';

    if (characters.includes('charactsLower')){
        finalCharacts = finalCharacts.concat(charactsLower);
    }

    if (characters.includes('charactsUpper')){
        if (rule === 'lectura simple'){
            finalCharacts = finalCharacts.concat(charactsUpperLS);
        } else {
            finalCharacts = finalCharacts.concat(charactsUpper);
        }
    }

    if (characters.includes('num')){
        finalCharacts = finalCharacts.concat(num);
    }

    if (characters.includes('symb')){
        finalCharacts = finalCharacts.concat(symb);
    }

    for(let i = 0; i < length; i++){
        const random = Math.floor(Math.random()*finalCharacts.length);
        let elem = finalCharacts.slice(random, random+1);
        finalPass = finalPass.concat(elem);
    }

    return finalPass;
    
}


// --- TEST --- //
// const rta = passGenerator(12, 'lectura simple', [ 'charactsUpper', 'num', 'symb']);
// console.log(rta);

// const rta2 = passGenerator(9,'solo letras' , ['charactsLower', 'charactsUpper']);
// console.log(rta2);

// const rta3 = passGenerator(9, ['charactsLower',  'num', 'symb']);
// console.log(rta3);

// const rta4 = passGenerator(6, [ 'charactsUpper', 'num']);
// console.log(rta4);
