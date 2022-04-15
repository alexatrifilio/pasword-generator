
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
//textPassContainer.setAttribute('class','card')


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

//Submit Button//

const submitButton = document.createElement('button');
const submitButtonText = document.createTextNode('Generar');
submitButton.appendChild(submitButtonText);
submitButton.setAttribute('id','submitButton');
formContainer.appendChild(submitButton);

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

                        // if(document.getElementById(`is-${elem}`).checked === true){
                        //         if(values.length < 2){
                        //                 values.push(parameter);
                        //                 console.log(values);
                        //         }else if (values.length < 3){
                        //                 values.push([]);
                        //                 values[2].push(parameter);
                        //                 console.log(values);
                        //         } else if(values.length === 3){
                        //                 values[2].push(parameter);
                        //                 console.log(values);
                        //         }
                                
                        // }

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



// Submit Button //

const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('class', 'btn');
const btnText = document.createTextNode('Generar')
form.appendChild(submitBtn);
submitBtn.appendChild(btnText);



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

form.addEventListener('submit', (event) => {
        passGenerator(12, 'lectura simple', [ 'charactsUpper', 'num', 'symb']);
        event.preventDefault();
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
                if (rule === 'lectura simple'){
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

    //  Creation of lists //

    
    

    // --- TEST --- //
//     const rta = passGenerator(12, 'lectura simple', [ 'charactsUpper', 'num', 'symb']);
//     console.log(rta);
    
    // const rta2 = passGenerator(9,'solo letras' , ['charactsLower', 'charactsUpper']);
    // console.log(rta2);
    
    const lenght = [6, 9, 12];
    const rules = ['Solo letras', 'Lectura simple', 'Todos los caracteres'];
    const charact = ['Mayúsculas', 'Minúsculas', 'Números', 'Símbolos'];
     
    
    formCreator('Longitud', lenght, 'radio')
    formCreator('Reglas', rules, 'radio')
    formCreator('Caracteres', charact, 'checkbox')


        //  Generate password button //
    document.getElementById("submitButton").addEventListener('click', function (event) {
            passGenerator(values['longitud'], String(values['reglas']), values['caracteres']);
    });
    

    