const form = document.querySelector('form');

const getFormInputs = () => {
  const inputName = form.querySelector('input[name="Имя"]');
  const inputPhone = form.querySelector('input[name="Телефон"]');
  const inputEmail = form.querySelector('input[name="Email"]');

  return {
    inputName,
    inputPhone,
    inputEmail,
  };
};

const onFormSubmit = () => {
  form.addEventListener('submit', () => {
    const {inputName, inputPhone, inputEmail} = getFormInputs();
    localStorage.setItem('Имя', inputName.value);
    localStorage.setItem('Телефон', inputPhone.value);
    localStorage.setItem('Вопрос', inputEmail.value);
  });
};

export {onFormSubmit};
