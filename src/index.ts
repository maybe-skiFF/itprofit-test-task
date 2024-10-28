import Inputmask from 'inputmask';
import { IFormErrors } from './interfaces/index';
import './styles/index.scss';
import { formValidation } from './utils/formValidation';

document.addEventListener('DOMContentLoaded', () => {
  const feedBackForm = document.getElementById('feedBackForm') as HTMLFormElement;
  const serverStatusMsg = document.querySelector('.server-status-msg') as HTMLParagraphElement;
  feedBackForm.addEventListener('submit', async (e) => {
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

    const formInputs = feedBackForm.querySelectorAll('input');
    formInputs.forEach((input) => input.classList.remove('invalid-input'));

    const formTextArea = feedBackForm.querySelector('textarea');
    formTextArea?.classList.remove('invalid-input');

    serverStatusMsg.innerHTML = '';

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

    if (Object.keys(errors).length === 0) {
      const formData = new FormData(feedBackForm);

      try {
        const resp = await fetch('http://localhost:9090/api/registration', {
          method: 'POST',
          body: formData,
        });

        if (!resp.ok) {
          const errorData = await resp.json();
          throw new Error(errorData.message);
        }

        const data = await resp.json();

        if (data.status === 'success') {
          serverStatusMsg.innerHTML = data.message;
          feedBackForm.reset();
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          serverStatusMsg.innerHTML = error.message;
        }
      }
    }
  });
});
