import { SERVICE_MESSAGES } from '../constants/SERVICE_MESSAGES';
import { IFormErrors } from '../interfaces/index';

function formValidation(): IFormErrors {
  const errors: IFormErrors = {};

  const nameInput = document.getElementById('name') as HTMLInputElement;
  if (!nameInput.value.trim()) {
    errors.name = SERVICE_MESSAGES.enterYourName;
  }

  const emailRegexTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  if (!emailInput.value.trim()) {
    errors.email = SERVICE_MESSAGES.enterYourEmail;
  } else if (!emailRegexTest.test(emailInput.value)) {
    errors.email = SERVICE_MESSAGES.enterValidEmail;
  }

  const phoneRegexTest = /^\+?[1-9]\d{0,2}[-\s]?(\(?\d{1,4}\)?[-\s]?)?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,9}$/;
  const phoneInput = document.getElementById('phone') as HTMLInputElement;
  if (!phoneInput.value.trim()) {
    errors.phone = SERVICE_MESSAGES.enterYourPhone;
  } else if (!phoneRegexTest.test(phoneInput.value)) {
    errors.phone = SERVICE_MESSAGES.enterYourValidPhone;
  }

  const messageInput = document.getElementById('message') as HTMLTextAreaElement;
  if (!messageInput.value.trim()) {
    errors.message = SERVICE_MESSAGES.enterYourMessage;
  }

  return errors;
}

export { formValidation };
