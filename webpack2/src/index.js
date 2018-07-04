import _ from 'lodash'
import printMe from './print';
import './style.css';

function component() {
  var el = document.createElement('div');
  var btn = document.createElement('button');

  el.innerHTML = _.join(['Hello', 'World'], ' ');

  btn.innerHTML = 'Click';
  btn.onclick = printMe;

  el.appendChild(btn);

  return el;
}

let el = component();
document.body.appendChild(el);

if(module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(el);
    el = component();
    document.body.appendChild(el);
  })
}