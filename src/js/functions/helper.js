
export function extractDateElements(date) {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();
  return { year, month, day };
}

export function addLeadingZero(value) {
  if (value < 10) {
    value = value.toString().padStart(2, '0');
  }
  return value;
}
export function formatDate(date, format, locale = navigator.languages) {
  const formatedDate = extractDateElements(date);
  let output = null;
  switch (format) {
    case 'ymd': {
      output = `${formatedDate.year}${addLeadingZero(
        formatedDate.month + 1
      )}${addLeadingZero(formatedDate.day)}`;
      break;
    }
    case 'dmy': {
      output = `${addLeadingZero(formatedDate.day)}${addLeadingZero(
        formatedDate.month + 1
      )}${formatedDate.year}`;
      break;
    }
    case 'd/m/y': {
      output = `${addLeadingZero(formatedDate.day)}/${addLeadingZero(
        formatedDate.month + 1
      )}/${formatedDate.year}`;
      break;
    }
    case 'd.m.y': {
      output = `${addLeadingZero(formatedDate.day)}.${addLeadingZero(
        formatedDate.month + 1
      )}.${formatedDate.year}`;
      break;
    }
    case 'm d, y': {
      const year = date.getFullYear();
      const month = date.toLocaleString(locale, { month: 'long' });
      const day = date.getDate();
      output = `${month} ${day}, ${year}`;
    }
    default:
      output = `${formatedDate.year}-${addLeadingZero(
        formatedDate.month + 1
      )}-${addLeadingZero(formatedDate.day)}`;
  }
  return output;
}
