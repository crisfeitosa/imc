export const AlerError = {
  element: document.querySelector('.alert-error'),
  open() {
    AlerError.element.classList.add('open')
  },
  close() {
    AlerError.element.classList.remove('open')
  }
}