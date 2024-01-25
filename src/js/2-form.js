const form = document.querySelector('.feedback-form');
const emailForm = form.email;
const messageForm = form.message;
let formObj = {};
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', saveFormInfo);
function saveFormInfo() {
  formObj = {
    email: emailForm.value,
    message: messageForm.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formObj));
}

window.addEventListener('load', reloadPage);
function reloadPage() {
  const savePrevFormInfo = localStorage.getItem(localStorageKey);
  if (savePrevFormInfo) {
    const parceFormInfo = JSON.parse(savePrevFormInfo);
    emailForm.value = parceFormInfo.email || '';
    messageForm.value = parceFormInfo.message || '';
  }
}

form.addEventListener('submit', btnSubmit);
function btnSubmit(event) {
  event.preventDefault();
  console.log(formObj);
  localStorage.removeItem(localStorageKey);
  form.reset();
}
