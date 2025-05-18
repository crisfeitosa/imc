import { Modal } from './modal.js';
import { AlerError } from './alert-error.js';
import { IMC, notNumber } from './utils.js';

// variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = event => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notNumber(weight) || notNumber(height);

  if (showAlertError) {
    AlerError.open();
    return;
  }

  AlerError.close();

  const result = IMC(weight, height);
  const message = `Seu IMC é ${result}`;

  Modal.message.innerHTML = message;
  Modal.open();
}