import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { refs } from './refs';

const options = {
  dateFormat: 'd/m/Y',
  maxDate: new Date(),
  monthSelectorType: 'static',
  clickOpens: false,
  locale: {
    firstDayOfWeek: 1, // start week on Monday
  },

  onClose: function (selectedDates, dateStr, instance) {
    instance.input.nextElementSibling.classList.remove('open');
    instance.input.nextElementSibling.classList.add('close');
    console.log(instance.input.nextElementSibling);
    if (!selectedDates[0]) {
      return;
    }
    instance.input.parentNode.classList.add('active');
  },
  onOpen: function (selectedDates, dateStr, instance) {
     instance.input.nextElementSibling.classList.remove('close');
    instance.input.nextElementSibling.classList.add('open');   
     console.log(instance.input.nextElementSibling);
    if (!selectedDates[0]) {
      return;
    }
    // instance.input.nextElementSibling.classList.add('up');
   

    // console.log(instance.input.nextElementSibling);
  },
  onValueUpdate(selectedDates, date, instance) {
    instance.input.dataset.date = selectedDates[0];
  },
  onMonthChange(selectedDates, dateStr, instance) {
    if (!selectedDates[0]) {
      return;
    }
    selectedDates[0] = new Date(
      selectedDates[0].setMonth(instance.currentMonth)
    );
    selectedDates[0] = new Date(selectedDates[0].setYear(instance.currentYear));
    instance.selectedDateElem.dateObj = selectedDates[0];
    insertSelectedDate(selectedDates, dateStr, instance);
    // console.log(instance);
    // className: "flatpickr-day nextMonthDay selected"
    return { selectedDates, dateStr };
  },
  onYearChange: function (selectedDates, dateStr, instance) {
    if (!selectedDates[0]) {
      return;
    }
    isDateSelect(selectedDates[0]);
    selectedDates[0] = new Date(selectedDates[0].setYear(instance.currentYear));
    insertSelectedDate(selectedDates, dateStr, instance);
    return { selectedDates, dateStr };
  },
};

function insertSelectedDate(selectedDates, dateStr, instance) {
  dateStr = selectedDates[0].toLocaleDateString('en-GB');
  instance.input.value = dateStr;
  instance.input.dataset.date = selectedDates[0];
  instance.selectedDateElem.dateObj = selectedDates[0];
}

function isDateSelect(date) {
  if (!date) {
    Notify.info('Please, select a Date');
    return;
  }
}

const calendar = flatpickr(refs.calendarInput, options);
refs.datePickerWrap.addEventListener('click', () => {
  calendar.open();
});

export { calendar };
