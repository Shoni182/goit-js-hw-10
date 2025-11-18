import iziToast from 'izitoast';

//: ======== Пошук DOM ========

const refs = {
  form: document.querySelector('.form'),
  radioFullfiled: document.querySelector('input[value="fulfilled"]'),
};

//: ======== дестриктуризація ========

const { form, radioFullfiled } = refs;

//:======== створення промісу ========

// функція винесена за межі сабміту
function createPromise(isChecked, delay) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (isChecked) {
        res(delay); // передане значення затримки
      } else {
        rej(delay);
      }
    }, delay);
  });
  return promise;
}

//:======== обробка ========

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const data = new FormData(form);
  const delay = data.get('delay');

  const isChecked = radioFullfiled.checked;

  const promise = createPromise(isChecked, delay);

  promise
    .then(value => {
      iziToast.show({
        messageSize: '20',
        // значення затримки передається до повідомення
        message: `✅ Fulfilled promise in ${value}ms`,
        position: 'center',
        close: true,
        closeOnEscape: true,
        theme: 'light',
        color: 'green',
      });
    })
    .catch(value => {
      iziToast.show({
        messageSize: '20',
        message: `❌ Rejected promise in ${value}ms`,
        position: 'center',
        close: true,
        closeOnEscape: true,
        theme: 'light',
        color: 'red',
      });
    });
  form.reset();
});
