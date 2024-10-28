import Inputmask from 'inputmask';
import { IFormErrors } from './interfaces/index';
import './styles/index.scss';
import { formValidation } from './utils/formValidation';

document.addEventListener('DOMContentLoaded', () => {
  const feedBackForm = document.getElementById('feedBackForm') as HTMLFormElement;
  feedBackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    if (phoneInput) {
      Inputmask({
        mask: '+999 999 9999',
        showMaskOnHover: false,
        placeholder: ' ',
      }).mask(phoneInput);
    }

    const errors: IFormErrors = formValidation();

    const errorsMessages = document.querySelectorAll('.error-message');
    errorsMessages.forEach((error) => error.remove());

    Object.keys(errors).forEach((error) => {
      const currFormInput = document.getElementById(error) as HTMLInputElement;
      if (currFormInput) {
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = errors[error as keyof IFormErrors] ?? '';
        currFormInput.parentNode?.appendChild(errorMessage);
      }
    });

    if (Object.keys(errors).length === 0) feedBackForm.submit();
  });
});
