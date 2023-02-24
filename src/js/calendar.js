
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { refs } from './refs';
let selectedDate = '';
if (
  window.location.pathname === '/' ||
  window.location.pathname === '/index.html'
) {
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
      if (!selectedDates[0]) {
        return;
      }
      instance.input.dataset.date = setDateForFetch(selectedDates[0]);
      instance.input.dataset.sort = setDateForSort(selectedDates[0]);
      instance.input.parentNode.classList.add('active');
      selectedDate = selectedDates[0];
    },
    onOpen: function (selectedDates, dateStr, instance) {
      instance.input.nextElementSibling.classList.remove('close');
      instance.input.nextElementSibling.classList.add('open');
      if (!selectedDates[0]) {
        return;
      }
    },
    onValueUpdate(selectedDates, date, instance) {
      selectedDate = selectedDates[0];
    },
    onMonthChange(selectedDates, dateStr, instance) {
      if (!selectedDates[0]) {
        return;
      }
      selectedDates[0] = new Date(
        selectedDates[0].setMonth(instance.currentMonth)
      );
      selectedDates[0] = new Date(
        selectedDates[0].setFullYear(instance.currentYear)
      );
      instance.selectedDateElem.dateObj = selectedDates[0];
      insertSelectedDate(selectedDates, dateStr, instance);
      setSelectedElementClass(selectedDates, instance);
      selectedDate = selectedDates[0];
      return { selectedDates, dateStr };
    },
    onYearChange: function (selectedDates, dateStr, instance) {
      if (!selectedDates[0]) {
        return;
      }
      isDateSelect(selectedDates[0]);
      selectedDates[0] = new Date(
        selectedDates[0].setFullYear(instance.currentYear)
      );
      insertSelectedDate(selectedDates, dateStr, instance);
      setSelectedElementClass(selectedDates, instance);
      selectedDate = selectedDates[0];
      return { selectedDates, dateStr };
    },
  };

  function setSelectedElementClass(selectedDates, instance) {
    const daysList = instance.days.children;
    const daysArr = [...daysList];
    const selectedDay = selectedDates[0].getDate();
    const selectedEl = daysArr.find(day => day.textContent == selectedDay);
    instance.selectedDateElem.classList.remove('selected');
    selectedEl.classList.add('selected');
  }

  function setDateForFetch(date) {
    const selectedDate = extractDateElements(date);
    return `${selectedDate.year}${addLeadingZero(
      selectedDate.month + 1
    )}${addLeadingZero(selectedDate.day)}`;
  }

  function setDateForSort(date) {
    const selectedDate = extractDateElements(date);
    console.log(selectedDate.month);
    return `${addLeadingZero(selectedDate.day)}.${addLeadingZero(
      selectedDate.month + 1
    )}.${selectedDate.year}`;
  }

  function extractDateElements(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return { year, month, day };
  }

  function setDateForAriaLabel(date) {
    const year = date.getFullYear();
    const month = date.toLocaleString('en', { month: 'long' });
    const day = date.getDate();
    return `${month} ${day}, ${year}`;
  }

  function insertSelectedDate(selectedDates, dateStr, instance) {
    dateStr = selectedDates[0].toLocaleDateString('en-GB');
    instance.input.value = dateStr;
    instance.selectedDateElem.dateObj = selectedDates[0];
    instance.selectedDateElem.ariaLabel = setDateForAriaLabel(selectedDates[0]);
    instance.latestSelectedDateObj = selectedDates[0];
  }

  function addLeadingZero(value) {
    if (value < 10) {
      value = value.toString().padStart(2, '0');
    }
    return value;
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
}
export { calendar };
