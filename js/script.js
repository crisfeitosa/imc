import { Modal } from './modal.js';
import { AlerError } from './alert-error.js';
import { calculateIMC, notNumber } from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = event => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNotNumber) {
    AlerError.open();
    return;
  }

  AlerError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
}

function displayResultMessage(result) {
  const message = `Seu IMC é ${result}`;

  Modal.message.innerHTML = message;
  Modal.open();

  inputWeight.value = '';
  inputHeight.value = '';
}