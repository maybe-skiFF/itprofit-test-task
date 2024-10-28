import { IFormErrors } from './interfaces/index';
import './styles/index.scss';
import { clearFormErrors, displayErrors } from './utils/displayErrors';
import { formSubmitHandler } from './utils/formSubmitHandler';
import { formValidation } from './utils/formValidation';
import { phoneMask } from './utils/phoneMask';

document.addEventListener('DOMContentLoaded', () => {
  const feedBackForm = document.getElementById('feedBackForm') as HTMLFormElement;
  const serverStatusMsg = document.querySelector('.server-status-msg') as HTMLParagraphElement;
  feedBackForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    if (phoneInput) {
      phoneMask(phoneInput);
    }

    const errors: IFormErrors = formValidation();

    clearFormErrors(feedBackForm);
    serverStatusMsg.innerHTML = '';
    displayErrors(errors);

    if (Object.keys(errors).length === 0) {
      const formData = new FormData(feedBackForm);
      await formSubmitHandler(formData, serverStatusMsg, feedBackForm);
    }
  });
});
