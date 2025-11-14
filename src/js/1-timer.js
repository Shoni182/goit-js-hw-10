import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

// Завдання

let userSelectedDate = null;

// - Стилізація

// - Пошук елементів: кнопка старт, інпут

// - Вибір Дати
// записати вибрану дату після валідації її в методі
// library options
// якщо користувач вибрав в минулому то ініціювати бібліотеку повідомлення та заблокувати кнопку старт
// якщо в майбутньому то зробити кнопку старт валідною доти не валідна
// заблокувати кнопку старт поки інтервал не завершиться

// - Відлік часу

//після натисканя відлік раз 1 секунду кнопка старт та інпут стають не активними
// оновлення інтерфейс таймера textContent
// таймер зупиняєтья коли дійшов до кінцевої дати тобто 00 00 00 00

// - Форматування часу
// функція convertMs( ) повертає обʼєкт з рохрахованим часом що залишився докінцевох лати
// Напиши функцію, наприклад addLeadingZero(value), яка використовує метод рядка padStart() і перед відмальовуванням інтерфейсу форматує значення.
// Використовувати датасет

// - Бібліотека повідомлень
// Повідомлення

iziToast.show({
  title: 'Hey',
  message: 'What would you like to add?',
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]); //! тут обробляти дату вибрану користувачем
    // створити валідацію - дата повинна бути лише в майбутньому
  },
};

flatpickr('#datetime-picker', options);
// lib init

// - Підрахунок значенб
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
