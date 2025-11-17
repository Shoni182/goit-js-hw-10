import iziToast from 'izitoast';

//: ======== Пошук DOM ========

const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('label[name="delay"]'),
  radioFullfiled: document.querySelector('input[value="fulfilled"]'),
  // radioRejected: document.querySelector('input[value="rejected"]'),
  // notifBtn: document.querySelector('.form button'),
};

//: ======== дестриктуризація ========

const { form, radioFullfiled } = refs;

//: ======== даннзі з інпуту Delay(ms) ========
let delay;

form.addEventListener('input', () => {
  let data = new FormData(form);
  delay = data.get('delay');
});

//:======== створення промісу ========

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
        // title: 'Hey',
        messageSize: '20',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'center',
        close: true,
        closeOnEscape: true,
        theme: 'light',
        color: 'green',
      });
    })
    .catch(value => {
      iziToast.show({
        // title: 'Hey',
        messageSize: '20',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'center',
        close: true,
        closeOnEscape: true,
        theme: 'light',
        color: 'red',
      });
    });
  form.reset();
});
