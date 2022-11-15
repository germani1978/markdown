



const x = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n   if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n   }\n}\n```\nYou can also make text **bold**... whoa!\n Or _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n- And of course there are lists.\n    - Some are bulleted.\n         - With different indentation levels. \n           - That look like this. \n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";
const preview =  document.querySelector('.preview');
const sal =  document.querySelector('.salida');
const editor = document.querySelector('#editor');
editor.value = x;
const paneluno = document.querySelector('.contenedor');
const paneldos = document.querySelector('.contenedorbig');
// .classList.add('language-javascript');


marked.setOptions({
  breaks: true,
});

preview.innerHTML =marked.parse(x);
console.log(preview.innerHTML);

editor.addEventListener('keyup', function (event) {
  preview.innerHTML =marked.parse(event.target.value);
 
});

const boton = document.querySelector('#uno');

boton.addEventListener('click', function ( event) {

  paneldos.classList.toggle('hide');
  paneluno.classList.toggle('ampliar');

})

const botondos = document.querySelector('#dos');

botondos.addEventListener('click', function ( event) {

  paneluno.classList.toggle('hide');
  paneldos.classList.toggle('ampliar');

})


