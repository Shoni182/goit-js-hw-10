import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

// Завдання

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
