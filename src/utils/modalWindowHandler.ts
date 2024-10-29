function openModal(modalContainer: HTMLDivElement) {
  const modalContainerItem = modalContainer;
  modalContainerItem.style.display = 'block';
}

function closeModal(modalContainer: HTMLDivElement) {
  const modalContainerItem = modalContainer;
  modalContainerItem.style.display = 'none';
}

function addHandlersToModal(openButton: HTMLButtonElement, closeButton: HTMLSpanElement, modal: HTMLDivElement) {
  openButton.addEventListener('click', () => openModal(modal));
  closeButton.addEventListener('click', () => closeModal(modal));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
}

export { addHandlersToModal };
