import Inputmask from 'inputmask';

function phoneMask(phoneInput: HTMLInputElement) {
  Inputmask({
    mask: '+999 999 9999',
    showMaskOnHover: false,
    placeholder: ' ',
  }).mask(phoneInput);
}

export { phoneMask };
