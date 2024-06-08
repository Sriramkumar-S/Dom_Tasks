// var div = document.createElement('div');
// div.style.backgroundColor = 'aqua';
// div.style.display = 'inline'
// div.innerHTML = "This is a div element";
// document.body.append(div)

// var lineBreak = document.createElement('br');
// document.body.append(lineBreak)

// div.addEventListener('mouseover', () => {
//     div.style.backgroundColor = 'yellow';
// })

// div.addEventListener('mouseout', () => {
//     div.style.backgroundColor = 'aqua';
// })

// var button = document.createElement('button');
// button.innerHTML = "Click Me!";
// button.style.display = 'block';
// button.addEventListener('click', () => {
//     foo();
// })
// document.body.append(button)
// document.body.append(lineBreak)

// function foo() {
//     var input = prompt("Enter your name");

//     var span = document.createElement('span');
//     span.innerHTML = input;
//     document.body.append(span)
// }


// var textArea = document.createElement('textarea');
// document.body.append(textArea);
// textArea.addEventListener('input', () => {
//     console.log(textArea.value.length)
// })



////////////////////////////////////////////////////////////

// Label
function labelCreate(forAttrValue, labelValue) {
    let label = document.createElement('label');
    label.setAttribute('for', forAttrValue);
    label.innerHTML = labelValue;
    return label;
}
// Inputs
// FirstName // MiddleName // LastName // Password // FileUpload

function inputCreate(tagName, typeName, inputId) {
    let input = document.createElement(tagName);
    input.setAttribute('type', typeName);
    input.id = inputId;
    return input;
}

function lineBreak() {
    let line_break = document.createElement('br');
    return line_break;
}
let line_Break = lineBreak();

let firstName_line_Break = lineBreak();
let firstNameInput_line_Break = lineBreak();
let firstNameLabel = labelCreate("firstName", "First Name: ")
let firstNameInput = inputCreate("input", "text", "firstName" )

let middleName_line_Break = lineBreak();
let middleNameInput_line_Break = lineBreak();
let middleNameLabel = labelCreate("middleName", "Middle Name: ")
let middleNameInput = inputCreate("input", "text", "middleName" )

let lastName_line_Break = lineBreak();
let lastNameInput_line_Break = lineBreak();
let lastNameLabel = labelCreate("lastName", "Last Name: ")
let lastNameInput = inputCreate("input", "text", "lastName" )

let password_line_Break = lineBreak();
let passwordInput_line_Break = lineBreak();
let passwordLabel = labelCreate("password", "Password: ")
let passwordInput = inputCreate("input", "password", "password" )

let fileUpload_line_Break = lineBreak();
let fileUploadLabel = labelCreate("fileUpload", "Browse Files: ")
let fileUploadInput = inputCreate("input", "file", "fileUpload" )

document.body.append(firstNameLabel, firstName_line_Break, firstNameInput, firstNameInput_line_Break,
    middleNameLabel, middleName_line_Break, middleNameInput, middleNameInput_line_Break,
    lastNameLabel, lastName_line_Break, lastNameInput, lastNameInput_line_Break,
    passwordLabel, password_line_Break, passwordInput, passwordInput_line_Break,
    fileUploadLabel, fileUpload_line_Break, fileUploadInput
);
