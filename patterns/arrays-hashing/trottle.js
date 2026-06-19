const throttledScroll = throttle(() => {
  console.log('scroll');
}, 1000);

function throttle(fn, delay) {
  let lastTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastTime >= delay) {
      fn.apply(this, args);

      lastTime = currentTime;
    }
  };
}
