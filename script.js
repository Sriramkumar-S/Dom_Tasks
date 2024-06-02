var div = document.createElement('div');
div.style.backgroundColor = 'aqua';
div.style.display = 'inline'
div.innerHTML = "This is a div element";
document.body.append(div)

var lineBreak = document.createElement('br');
document.body.append(lineBreak)

div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'yellow';
})

div.addEventListener('mouseout', () => {
    div.style.backgroundColor = 'aqua';
})

var button = document.createElement('button');
button.innerHTML = "Click Me!";
button.style.display = 'block';
button.addEventListener('click', () => {
    foo();
})
document.body.append(button)
document.body.append(lineBreak)

function foo() {
    var input = prompt("Enter your name");

    var span = document.createElement('span');
    span.innerHTML = input;
    document.body.append(span)
}


var textArea = document.createElement('textarea');
document.body.append(textArea);
textArea.addEventListener('input', () => {
    console.log(textArea.value.length)
})
