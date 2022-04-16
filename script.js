// Password Generator Script 
// Language: Javascript 
// Authors: Vanessa Neira and Alejandra Trifilio
// Date 04-15-2022

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
passContainer.setAttribute('class','card');
passContainer.classList.add('cardSmall');
textPassContainer.setAttribute('id','password');


const iconContainer = document.createElement('div');

// Copy Icon //

const copyIcon = document.createElement('span');
const copyIconText = document.createTextNode('content_copy');
copyIcon.appendChild(copyIconText);
copyIcon.setAttribute('class','material-icons');
copyIcon.classList.add('md-36');
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
refreshIcon.classList.add('md-36'); 
refreshIcon.setAttribute('onclick','refresh()');

// Refresh password  function//

function refresh(){
        // window.location.reload("Refresh") // To refresh window
        passGenerator(values['longitud'], values['reglas'], values['caracteres']);
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

values = {} //values object

function formCreator(title, elements, atributeType){
        const charactContainer = document.createElement('fieldset');
        const charactTitle = document.createElement('h3');
        const charactTitleText = document.createTextNode(title);
        charactContainer.appendChild(charactTitle);
        charactTitle.appendChild(charactTitleText);
        form.appendChild(charactContainer);

        const charact = elements
        values[title.toLowerCase()]

        for(let elem of charact){
                const inputCont = document.createElement('div');
                const charactInput = document.createElement('input');
                charactInput.setAttribute('type', atributeType);
                charactInput.setAttribute('name', title.toLowerCase());
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

                values['caracteres'] = []

                document.getElementById(`is-${elem}`).addEventListener('change', (event)=>{
                        let parameter = event.target.value;
                        console.log(parameter);

                        let element = document.getElementById(`is-${elem}`)

                        if(element.checked === true){
                                if(element.name.toLowerCase()==='longitud'){
                                        values['longitud'] = parameter;
                                }
                                if(element.name.toLowerCase()==='reglas'){
                                        values['reglas'] = parameter;
                                }
                                if(element.name.toLowerCase()==='caracteres'){
                                        values['caracteres'].push(parameter);
                                }
                        }
                        if(element.checked === false){
                                values['caracteres'].splice(values['caracteres'].indexOf(parameter),1);
                        }
                        console.log(values);

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




// Submit Button //

const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('class', 'btn');
submitBtn.setAttribute('id', 'submitButton');
const btnText = document.createTextNode('Generar');
form.appendChild(submitBtn);
submitBtn.appendChild(btnText);



// Radio and checkbox selector behaviour //

document.getElementById("is-Solo letras").addEventListener('change', function (event) {
        if(event.target.value === 'Solo letras'){
                document.getElementById("is-Números").checked = false;
                document.getElementById("is-Números").disabled = true;
                document.getElementById("is-Símbolos").checked = false;
                document.getElementById("is-Símbolos").disabled = true;

                if(values['caracteres'].includes("Números")){
                        values['caracteres'].splice(values['caracteres'].indexOf("Números"),1);
                }
                if(values['caracteres'].includes("Símbolos")){
                        values['caracteres'].splice(values['caracteres'].indexOf("Símbolos"),1);
                }
        }
});
document.getElementById("is-Lectura simple").addEventListener('change', function (event) {
        if(event.target.value === 'Lectura simple'){
                document.getElementById("is-Números").disabled = false;
                document.getElementById("is-Símbolos").checked = false;
                document.getElementById("is-Símbolos").disabled = true;

                if(values['caracteres'].includes("Símbolos")){
                        values['caracteres'].splice(values['caracteres'].indexOf("Símbolos"),1);
                }
        }
});
document.getElementById("is-Todos los caracteres").addEventListener('change', function (event) {
        if(event.target.value === 'Todos los caracteres'){
                document.getElementById("is-Números").disabled = false;
                document.getElementById("is-Símbolos").disabled = false;
        }
    });


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
    
        if (characters.includes('Minúsculas')){
            finalCharacts = finalCharacts.concat(charactsLower);
        }
    
        if (characters.includes('Mayúsculas')){
                if (rule === 'Lectura simple'){
                finalCharacts = finalCharacts.concat(charactsUpperLS);
        } else {
                finalCharacts = finalCharacts.concat(charactsUpper);
        }
        }
    
        if (characters.includes('Números')){
                finalCharacts = finalCharacts.concat(num);
        }
    
        if (characters.includes('Símbolos')){
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


        //  Generate password event //
    
form.addEventListener('submit', (event) => {
        if (values['longitud'] === undefined || values['reglas'] === undefined || values['caracteres'].length === 0){
                alert('Debes seleccionar al menos una opción en cada campo');
        } else {
                passGenerator(values['longitud'], values['reglas'], values['caracteres']);
                event.preventDefault();
        }
    });
    