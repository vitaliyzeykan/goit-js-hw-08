import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 1000));

fillTextarea();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem('STORAGE_KEY', formDataJSON);
}

function fillTextarea() {
  const savedForm = localStorage.getItem('STORAGE_KEY');
  const parsedSavedForm = JSON.parse(savedForm);
  if (parsedSavedForm) {
    refs.email.value = parsedSavedForm.email;
    refs.textarea.value = parsedSavedForm.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(localStorage.getItem('STORAGE_KEY'));
  e.currentTarget.reset();
  localStorage.removeItem('STORAGE_KEY');
}
