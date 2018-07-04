import _ from 'lodash';
import './style.css';
import img from './20161015204638166.jpg';

function component() {
  var element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "World"], " ");
  element.classList.add('hello');

  let myImg = new Image();
  myImg.src = img;

  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());
