
// ---Create elements--- //

const body = document.getElementById('body');
const mainTitle = document.createElement('h1');
const mainTitleText = document.createTextNode('Generador de Contraseñas');

// Final Password Card //
const passContainer = document.createElement('div');
const genPass = document.createTextNode(''); // y si le ponemos finalPass??
const iconContainer = document.createElement('div');
const copyIcon = document.createElement('i');
const refreshIcon = document.createElement('i');

// Form Card //
const formContainer = document.createElement('div');
const title = document.createElement('h2');
const titleText = document.createTextNode('Personalice su contraseña');

    // Lenght section //
const lenghtContainer = document.createElement('div');
const lenghtTitle = document.createElement('h3');
const lenghtTitleText = document.createTextNode('Longitud');

        // Lenght Form //
const inputCont1 = document.createElement('div');
const inputCont2 = document.createElement('div');
const inputCont3 = document.createElement('div');
const lenghtInput1 = document.createElement('input');
const lenghtInput2 = document.createElement('input');
const lenghtInput3 = document.createElement('input');
const lenghtLabel1 = document.createElement('label');
const lenghtLabel2 = document.createElement('label');
const lenghtLabel3 = document.createElement('label');
const lenghtLabelText1 = document.createTextNode('12 caracteres');
const lenghtLabelText2 = document.createTextNode('9 caracteres');
const lenghtLabelText3 = document.createTextNode('6 caracteres');


    // Rules section //
const rulesContainer = document.createElement('div');
const rulesTitle = document.createElement('h3');
const rulesTitleText = document.createTextNode('Reglas');

        // Rules Form //
const inputCont4 = document.createElement('div');
const inputCont5 = document.createElement('div');
const inputCont6 = document.createElement('div');
const rulesInput1 = document.createElement('input');
const rulesInput2 = document.createElement('input');
const rulesInput3 = document.createElement('input');
const rulesLabel1 = document.createElement('label');
const rulesLabel2 = document.createElement('label');
const rulesLabel3 = document.createElement('label');
const rulesLabelText1 = document.createTextNode('Solo letras');
const rulesLabelText2 = document.createTextNode('Lectura Simple');
const rulesLabelText3 = document.createTextNode('Todos los caracteres');

    //Characters Section //
const charactContainer = document.createElement('div');
const charactTitle = document.createElement('h3');
const charactTitleText = document.createTextNode('Caracteres');

        // Characters Form //
const inputCont7 = document.createElement('div');
const inputCont8 = document.createElement('div');
const inputCont9 = document.createElement('div');
const inputCont10 = document.createElement('div');
const charactInput1 = document.createElement('input');
const charactInput2 = document.createElement('input');
const charactInput3 = document.createElement('input');
const charactInput4 = document.createElement('input');
const charactLabel1 = document.createElement('label');
const charactLabel2 = document.createElement('label');
const charactLabel3 = document.createElement('label');
const charactLabel4 = document.createElement('label');
const charactLabelText1 = document.createTextNode('Mayúsculas');
const charactLabelText2 = document.createTextNode('Minúsculas');
const charactLabelText3 = document.createTextNode('Números');
const charactLabelText4 = document.createTextNode('Símbolos');


// ---Set attribute elements--- //



// ---Append element--- //

body.appendChild(mainTitle);
mainTitle.appendChild(mainTitleText);

// Final Password card //

body.appendChild(passContainer);
passContainer.appendChild(genPass);
passContainer.appendChild(iconContainer);
iconContainer.appendChild(copyIcon);
iconContainer.appendChild(refreshIcon);

// General Form Card //

body.appendChild(formContainer);
formContainer.appendChild(title);
title.appendChild(titleText);
formContainer.appendChild(lenghtContainer);
formContainer.appendChild(rulesContainer);
formContainer.appendChild(charactContainer);

    // Length Section //

lenghtContainer.appendChild(lenghtTitle);
lenghtTitle.appendChild(lenghtTitleText);

        // Length Form //

lenghtContainer.appendChild(inputCont1);
inputCont1.appendChild(lenghtInput1);
inputCont1.appendChild(lenghtLabel1);
lenghtLabel1.appendChild(lenghtLabelText1);

lenghtContainer.appendChild(inputCont2);
inputCont2.appendChild(lenghtInput2);
inputCont2.appendChild(lenghtLabel2);
lenghtLabel2.appendChild(lenghtLabelText2);

lenghtContainer.appendChild(inputCont3);
inputCont3.appendChild(lenghtInput3);
inputCont3.appendChild(lenghtLabel3);
lenghtLabel3.appendChild(lenghtLabelText3);

     // Rules Section //

rulesContainer.appendChild(rulesTitle);
rulesTitle.appendChild(rulesTitleText);

        // Rules Form //

rulesContainer.appendChild(inputCont4);
inputCont4.appendChild(rulesInput1);
inputCont4.appendChild(rulesLabel1);
rulesLabel1.appendChild(rulesLabelText1);

rulesContainer.appendChild(inputCont5);
inputCont5.appendChild(rulesInput2);
inputCont5.appendChild(rulesLabel2);
rulesLabel2.appendChild(rulesLabelText2);

rulesContainer.appendChild(inputCont6);
inputCont6.appendChild(rulesInput3);
inputCont6.appendChild(rulesLabel3);
rulesLabel3.appendChild(rulesLabelText3);


    // Characters Section //

charactContainer.appendChild(charactTitle);
charactTitle.appendChild(charactTitleText);

        // Characters Form //

charactContainer.appendChild(inputCont7);
inputCont7.appendChild(charactInput1);
inputCont7.appendChild(charactLabel1);
charactLabel1.appendChild(charactLabelText1);

charactContainer.appendChild(inputCont8);
inputCont8.appendChild(charactInput2);
inputCont8.appendChild(charactLabel2);
charactLabel2.appendChild(charactLabelText2);

charactContainer.appendChild(inputCont9);
inputCont9.appendChild(charactInput3);
inputCont9.appendChild(charactLabel3);
charactLabel3.appendChild(charactLabelText3);

charactContainer.appendChild(inputCont10);
inputCont10.appendChild(charactInput4);
inputCont10.appendChild(charactLabel4);
charactLabel4.appendChild(charactLabelText4);