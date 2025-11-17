import iziToast from 'izitoast';

// : Пошук DOM

const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('label[name="delay"]'),
  radioFullfiled: document.querySelector('input[value="fulfilled"]'),
  radioRejected: document.querySelector('input[value="rejected"]'),
  // radio: document.querySelector('input[type="radio"]'),
  notifBtn: document.querySelector('.form button'),
};

// ! дестриктуризація

const { form, input, radioFullfiled, radioRejected, notifBtn } = refs;

//! даннзі з інпуту Delay(ms)
let delay;

form.addEventListener('input', () => {
  let data = new FormData(form);
  delay = data.get('delay');
});

//! створення логіки таймеру та кнопок

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const isChecked = radioFullfiled.checked;
  const promise = createPromise(isChecked, delay);
  function createPromise(isChecked, delay) {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        if (isChecked) {
          res();
        } else {
          rej();
        }
      }, delay);
    });
    return promise;
  }
  promise
    .then(value => {
      iziToast.show({
        title: 'Hey',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'center',
        close: true,
        closeOnEscape: true,
      });
    })
    .catch(value => {
      iziToast.show({
        title: 'Hey',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'center',
        close: true,
        closeOnEscape: true,
      });
    });
});
