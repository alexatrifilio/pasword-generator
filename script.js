
// ---Create elements--- //

const body = document.getElementById('body');
const mainTitle = document.createElement('h1');
const mainTitleText = document.createTextNode('Generador de Contraseñas');
body.appendChild(mainTitle);
mainTitle.appendChild(mainTitleText);

// Final Password Card //

const passContainer = document.createElement('div');
const textPassContainer = document.createElement('div');
const finalPass = document.createTextNode(''); 
passContainer.appendChild(textPassContainer);
passContainer.setAttribute('class','card')
textPassContainer.setAttribute('id','password');
//textPassContainer.setAttribute('class','card')


const iconContainer = document.createElement('div');

// Copy Icon //

const copyIcon = document.createElement('span');
const copyIconText = document.createTextNode('content_copy');
copyIcon.appendChild(copyIconText);
copyIcon.setAttribute('class','material-icons');
copyIcon.setAttribute('onclick','copyPassword()'); 

 // Copy password  function//
function copyPassword() {
        var passwordText = document.getElementById("password").textContent;
        navigator.clipboard.writeText(passwordText);
        alert("Copiado al portapapeles");
}

// Refresh Icon //

const refreshIcon = document.createElement('span');
const refreshIconText = document.createTextNode('autorenew');
refreshIcon.appendChild(refreshIconText);
refreshIcon.setAttribute('class','material-icons'); 
refreshIcon.setAttribute('onclick','refresh()');

// Refresh password  function//

function refresh(){
        window.location.reload("Refresh")
      }


// Append Password Card elemnts //

body.appendChild(passContainer);
textPassContainer.appendChild(finalPass);
passContainer.appendChild(iconContainer);
iconContainer.appendChild(copyIcon);
iconContainer.appendChild(refreshIcon);

// Form Card //

const formContainer = document.createElement('div');
formContainer.setAttribute('class','card');
formContainer.classList.add('cardLarge');
const title = document.createElement('h2');
const titleText = document.createTextNode('Personalice su contraseña');
const form = document.createElement('form');
form.setAttribute('class','form');

// Append Form Card elemnts //

body.appendChild(formContainer);
formContainer.appendChild(title);
title.appendChild(titleText);
formContainer.appendChild(form);

        // Form creator //

const values= [];

function formCreator(title, elements, atributeType){
        const charactContainer = document.createElement('fieldset');
        const charactTitle = document.createElement('h3');
        const charactTitleText = document.createTextNode(title);
        charactContainer.appendChild(charactTitle);
        charactTitle.appendChild(charactTitleText);
        form.appendChild(charactContainer);

        const charact = elements

        for(let elem of charact){
                const inputCont = document.createElement('div');
                const charactInput = document.createElement('input');
                charactInput.setAttribute('type', atributeType);
                charactInput.setAttribute('name', charact);
                charactInput.setAttribute('id', `is-${elem}`);
                charactInput.setAttribute('value', `${elem}`);
                const charactLabel = document.createElement('label');
                charactLabel.setAttribute('for', `is-${elem}`);
                const charactLabelText = document.createTextNode(elem);

                charactContainer.appendChild(inputCont);
                inputCont.appendChild(charactInput);
                inputCont.appendChild(charactLabel);
                charactLabel.appendChild(charactLabelText);


                //values//

                document.getElementById(`is-${elem}`).addEventListener('change', (event)=>{
                        let parameter = event.target.value;
                        console.log(parameter);

                        if(document.getElementById(`is-${elem}`).checked === true){
                                if(values.length < 2){
                                        values.push(parameter);
                                        console.log(values);
                                }else if (values.length < 3){
                                        values.push([]);
                                        values[2].push(parameter);
                                        console.log(values);
                                } else if(values.length === 3){
                                        values[2].push(parameter);
                                        console.log(values);
                                }
                                
                        }
                })

        }
}


//  Creation of lists //

const lenght = [6, 9, 12];
const rules = ['Solo letras', 'Lectura simple', 'Todos los caracteres'];
const charact = ['Mayúsculas', 'Minúsculas', 'Números', 'Símbolos'];
 

formCreator('Longitud', lenght, 'radio')
formCreator('Reglas', rules, 'radio')
formCreator('Caracteres', charact, 'checkbox')



// Radio and checkbox selector behaviour //

document.getElementById("is-Solo letras").addEventListener('change', function (event) {
        if(event.target.value === 'Solo letras'){
                document.getElementById("is-Números").checked = false;
                document.getElementById("is-Números").disabled = true;
                document.getElementById("is-Símbolos").checked = false;
                document.getElementById("is-Símbolos").disabled = true;
        }
    });
document.getElementById("is-Lectura simple").addEventListener('change', function (event) {
        if(event.target.value === 'Lectura simple'){
                document.getElementById("is-Números").disabled = false;
                document.getElementById("is-Símbolos").checked = false;
                document.getElementById("is-Símbolos").disabled = true;
        }
    });
document.getElementById("is-Todos los caracteres").addEventListener('change', function (event) {
        if(event.target.value === 'Todos los caracteres'){
                document.getElementById("is-Números").disabled = false;
                document.getElementById("is-Símbolos").disabled = false;
        }
    });




  // Alex first approach function //

// const pass = (length, rules, characters) => {
//         const characts = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//         const num = '0123456789';
//         const symb = '!@#$%^&*()'; 
//         let finalPassText = '';
//         if(rules === 'Solo letras'){
//             if( characters === 'Minúsculas'){
//                 let newCharacts = characts.toLowerCase();
//                 for(let i = 0; i < length; i++){
//                     const random = Math.floor(Math.random()* newCharacts.length);
//                     let elem = newCharacts.slice(random, random+1);
//                     finalPassText = finalPassText.concat(elem);
//                     finalPass.textContent = finalPassText;
//                 }
            
//         } else if (characters === 'Mayúsculas'){
//                 for(let i = 0; i < length; i++){
//                     const random = Math.floor(Math.random()* characts.length);
//                     let elem = characts.slice(random, random+1);
//                     finalPassText = finalPassText.concat(elem);
//                     finalPass.textContent = finalPassText;
//                 } 
//             }
                
//             }
//     }

// pass(12, 'Solo letras', 'Mayúsculas')




    // ---Generate password --- //

    //  Password Generator Function  //

const passGenerator = (length, rule, characters) => {
        const charactsLower = 'abcdefghijklmnopqrstuvwxyz';
        const charactsUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charactsUpperLS = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // for Lectura Simple without Upper o and i.
        const num = '01234567890123456789';
        const symb = '!@#$%^&*()!@#$%^&*()'; 
        let finalCharacts = '';
        let finalPassText = '';
    
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
            finalPassText = finalPassText.concat(elem);
            finalPass.textContent = finalPassText;
                        
        }
    
        return finalPassText;
        
    }
    
    

    // --- TEST --- //
    const rta = passGenerator(12, 'lectura simple', [ 'charactsUpper', 'num', 'symb']);
    console.log(rta);
    
    // const rta2 = passGenerator(9,'solo letras' , ['charactsLower', 'charactsUpper']);
    // console.log(rta2);
    
    // const rta3 = passGenerator(9, ['charactsLower',  'num', 'symb']);
    // console.log(rta3);
    
    // const rta4 = passGenerator(6, [ 'charactsUpper', 'num']);
    // console.log(rta4);
    
