import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { refs } from './refs';
if (
  window.location.pathname === '/' ||
  window.location.pathname === '/index.html'
) {
  window.addEventListener('DOMContentLoaded', event => mqHandler());
}
const options = {
  dateFormat: 'd/m/Y',
  maxDate: new Date(),
  monthSelectorType: 'static',
  clickOpens: false,
  locale: {
    firstDayOfWeek: 1, // start week on Monday
  },
  onClose(selectedDates) {
    console.log('test');
    refs.calendarInput.dataset.date = selectedDates[0];
  },
  onChange(selectedDates) {
    refs.datePickerWrap.classList.add('active');
  },
};

const calendar = flatpickr(refs.calendarInput, options);
refs.datePickerWrap.addEventListener('click', () => {
  calendar.open();
});

export { calendar };
