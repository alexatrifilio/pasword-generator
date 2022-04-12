
// ---Create elements--- //

const body = document.getElementById('body');
const mainTitle = document.createElement('h1');
const mainTitleText = document.createTextNode('Generador de Contraseñas');
body.appendChild(mainTitle);
mainTitle.appendChild(mainTitleText);

// Final Password Card //

const passContainer = document.createElement('div');
passContainer.setAttribute('class','card')
const finalPass = document.createTextNode(''); 
const iconContainer = document.createElement('div');

        // Copy Icon //

const copyIcon = document.createElement('span');
const copyIconText = document.createTextNode('content_copy');
copyIcon.appendChild(copyIconText);
copyIcon.setAttribute('class','material-icons'); 

        // Refresh Icon //

const refreshIcon = document.createElement('span');
const refreshIconText = document.createTextNode('autorenew');
refreshIcon.appendChild(refreshIconText);
refreshIcon.setAttribute('class','material-icons'); 

 // Append Password Card elemnts //

body.appendChild(passContainer);
passContainer.appendChild(finalPass);
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


// --- Form Sections --- //

// // Lenght section //

// const lenghtContainer = document.createElement('fieldset');
// const lenghtTitle = document.createElement('h3');
// const lenghtTitleText = document.createTextNode('Longitud');
// lenghtContainer.appendChild(lenghtTitle);
// lenghtTitle.appendChild(lenghtTitleText);
// form.appendChild(lenghtContainer);


// const lenght = [6, 9, 12];

// for(let elem of lenght){ //falta crear el form
//         const inputCont = document.createElement('div');
//         const lenghtInput = document.createElement('input');
//         lenghtInput.setAttribute('type', 'radio');
//         lenghtInput.setAttribute('name', 'lenght');
//         lenghtInput.setAttribute('id', `is-${elem}`);
//         lenghtInput.setAttribute('value', `${elem}`);
//         const lenghtLabel = document.createElement('label');
//         lenghtLabel.setAttribute('for', `is-${elem}`);
//         const lenghtLabelText = document.createTextNode(elem + ' caracteres');

//         lenghtContainer.appendChild(inputCont);
//         inputCont.appendChild(lenghtInput);
//         inputCont.appendChild(lenghtLabel);
//         lenghtLabel.appendChild(lenghtLabelText);

// }
  


//     // Rules section //

// const rulesContainer = document.createElement('fieldset');
// const rulesTitle = document.createElement('h3');
// const rulesTitleText = document.createTextNode('Reglas');
// rulesContainer.appendChild(rulesTitle);
// rulesTitle.appendChild(rulesTitleText);
// form.appendChild(rulesContainer);

// const rules = ['Solo letras', 'Lectura simple', 'Todos los caracteres'];

// for(let elem of rules){
//         const inputCont = document.createElement('div');
//         const rulesInput = document.createElement('input');
//         rulesInput.setAttribute('type', 'radio');
//         rulesInput.setAttribute('name', 'rules');
//         rulesInput.setAttribute('id', `is-${elem}`);
//         rulesInput.setAttribute('value', `${elem}`);
//         const rulesLabel = document.createElement('label');
//         rulesLabel.setAttribute('for', `is-${elem}`);
//         const rulesLabelText = document.createTextNode(elem);

//         rulesContainer.appendChild(inputCont);
//         inputCont.appendChild(rulesInput);
//         inputCont.appendChild(rulesLabel);
//         rulesLabel.appendChild(rulesLabelText);

// }


//     //Characters Section //

// const charactContainer = document.createElement('fieldset');
// const charactTitle = document.createElement('h3');
// const charactTitleText = document.createTextNode('Caracteres');
// charactContainer.appendChild(charactTitle);
// charactTitle.appendChild(charactTitleText);
// form.appendChild(charactContainer);


// const charact = ['Mayúsculas', 'Minúsculas', 'Números', 'Símbolos'];

// for(let elem of charact){
//         const inputCont = document.createElement('div');
//         const charactInput = document.createElement('input');
//         charactInput.setAttribute('type', 'checkbox');
//         charactInput.setAttribute('name', 'charact');
//         charactInput.setAttribute('id', `is-${elem}`);
//         charactInput.setAttribute('value', `${elem}`);
//         const charactLabel = document.createElement('label');
//         charactLabel.setAttribute('for', `is-${elem}`);
//         const charactLabelText = document.createTextNode(elem);

//         charactContainer.appendChild(inputCont);
//         inputCont.appendChild(charactInput);
//         inputCont.appendChild(charactLabel);
//         charactLabel.appendChild(charactLabelText);

// }

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
                charactInput.setAttribute('name', elements);
                charactInput.setAttribute('id', `is-${elem}`);
                charactInput.setAttribute('value', `${elem}`);
                const charactLabel = document.createElement('label');
                charactLabel.setAttribute('for', `is-${elem}`);
                const charactLabelText = document.createTextNode(elem);

                charactContainer.appendChild(inputCont);
                inputCont.appendChild(charactInput);
                inputCont.appendChild(charactLabel);
                charactLabel.appendChild(charactLabelText);

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

const lenght = [6, 9, 12];
const rules = ['Solo letras', 'Lectura simple', 'Todos los caracteres'];
const charact = ['Mayúsculas', 'Minúsculas', 'Números', 'Símbolos'];

formCreator('longitud', lenght, 'radio')
formCreator('reglas', rules, 'radio')
formCreator('Caracteres', charact, 'checkbox')


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


const pass = (length, rules, characters) => {
        const characts = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const num = '0123456789';
        const symb = '!@#$%^&*()'; 
        let finalPassText = '';
        if(rules === 'Solo letras'){
            if( characters === 'Minúsculas'){
                let newCharacts = characts.toLowerCase();
                for(let i = 0; i < length; i++){
                    const random = Math.floor(Math.random()* newCharacts.length);
                    let elem = newCharacts.slice(random, random+1);
                    finalPassText = finalPassText.concat(elem);
                    finalPass.textContent = finalPassText;
                }
            
        } else if (characters === 'Mayúsculas'){
                for(let i = 0; i < length; i++){
                    const random = Math.floor(Math.random()* characts.length);
                    let elem = characts.slice(random, random+1);
                    finalPassText = finalPassText.concat(elem);
                    finalPass.textContent = finalPassText;
                } 
            }
                
            }
    }

pass(12, 'Solo letras', 'Mayúsculas')