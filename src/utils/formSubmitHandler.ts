async function formSubmitHandler(formData: FormData, serverStatusMsg: HTMLParagraphElement, form: HTMLFormElement) {
  const statusServerItem = serverStatusMsg;

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
      statusServerItem.innerHTML = data.message;
      form.reset();
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      statusServerItem.innerHTML = error.message;
    }
  }
}

export { formSubmitHandler };
