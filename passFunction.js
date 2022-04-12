//solo letras
// lectura simple
// todos los caracteres
// minusculas
// mayusculas
// numeros 
// simbolos

const pass = (length, rules, characters) => {
    const characts = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const num = '0123456789';
    const symb = '!@#$%^&*()'; 
    let finalPass = '';
    if(rules === 'solo letras'){
        if( characters === 'minusculas'){
            let newCharacts = characts.toLowerCase();
            for(let i = 0; i < length; i++){
                const random = Math.floor(Math.random()* newCharacts.length);
                let elem = newCharacts.slice(random, random+1);
                finalPass = finalPass.concat(elem);
            }
        return finalPass;
    } else if (characters === 'mayusculas'){
            for(let i = 0; i < length; i++){
                const random = Math.floor(Math.random()* characts.length);
                let elem = characts.slice(random, random+1);
                finalPass = finalPass.concat(elem);
            } return finalPass;
        }
            
        }
}

const rta = pass(12, 'solo letras', 'mayusculas');
console.log(rta);