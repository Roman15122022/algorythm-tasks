const debouncedSearch = debounce((value) => {
  console.log(value);
}, 500);

debouncedSearch('r');

debouncedSearch('ro');

debouncedSearch('rom');

function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
