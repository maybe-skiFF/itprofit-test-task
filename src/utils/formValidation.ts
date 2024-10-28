import { IFormErrors } from '../interfaces/index';

function formValidation(): IFormErrors {
  const errors: IFormErrors = {};

  const nameInput = document.getElementById('name') as HTMLInputElement;
  if (!nameInput.value.trim()) {
    errors.name = 'Пожалуйста, введите ваше имя.';
  }

  const emailRegexTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  if (!emailInput.value.trim()) {
    errors.email = 'Пожалуйста, введите ваш Email.';
  } else if (!emailRegexTest.test(emailInput.value)) {
    errors.email = 'Пожалуйста, введите корректный Email.';
  }

  const phoneRegexTest = /^\+?[1-9]\d{0,2}[-\s]?(\(?\d{1,4}\)?[-\s]?)?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,9}$/;
  const phoneInput = document.getElementById('phone') as HTMLInputElement;
  if (!phoneInput.value.trim()) {
    errors.phone = 'Пожалуйста, введите ваш телефон.';
  } else if (!phoneRegexTest.test(phoneInput.value)) {
    errors.phone = 'Пожалуйста, введите корректный телефон.';
  }

  const messageInput = document.getElementById('message') as HTMLTextAreaElement;
  if (!messageInput.value.trim()) {
    errors.message = 'Пожалуйста, введите сообщение';
  }

  return errors;
}

export { formValidation };
