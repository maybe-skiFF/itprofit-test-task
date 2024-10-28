import { IFormErrors } from '../interfaces/index';

function displayErrors(errors: IFormErrors) {
  const errorsMessages = document.querySelectorAll('.error-message');
  errorsMessages.forEach((error) => error.remove());

  Object.keys(errors).forEach((error) => {
    const currFormInput = document.getElementById(error) as HTMLInputElement;
    if (currFormInput) {
      if (errors[error as keyof IFormErrors]) {
        currFormInput.classList.add('invalid-input');
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = errors[error as keyof IFormErrors] ?? '';
        currFormInput.parentNode?.appendChild(errorMessage);
      }
    }
  });
}

function clearFormErrors(feedBackForm: HTMLFormElement) {
  const formInputs = feedBackForm.querySelectorAll('input');
  formInputs.forEach((input) => input.classList.remove('invalid-input'));

  const formTextArea = feedBackForm.querySelector('textarea');
  formTextArea?.classList.remove('invalid-input');
}

export { displayErrors, clearFormErrors };
