import { cube } from "./math.js";

function component() {
  var el = document.createElement('div');
  el.innerHTML = ['Hello Webpack', '7 cubed is equal to '+ cube(7)].join('\n\n');

  return el;
}

document.body.appendChild(component());