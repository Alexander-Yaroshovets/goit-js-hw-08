import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';
const formEl = document.querySelector('.feedback-form');
const LOKALE_STORAGE_KEY = 'feedback-form-state';

initPage();

const handleInput = event => {
  const { name, value } = event.target;

  let saveData = load(LOKALE_STORAGE_KEY);
  saveData = saveData ? saveData : {};
  saveData[name] = value;

  save(LOKALE_STORAGE_KEY, saveData);
};
formEl.addEventListener('input', throttle(handleInput, 500));

function initPage() {
  const saveData = load(LOKALE_STORAGE_KEY);
  if (saveData) {
    Object.entries(saveData).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}
const handleSubmit = event => {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;
  console.log({ email: email.value, message: message.value });
  event.currentTarget.reset();
  remove(LOKALE_STORAGE_KEY);
};
formEl.addEventListener('submit', throttle(handleSubmit, 500));
