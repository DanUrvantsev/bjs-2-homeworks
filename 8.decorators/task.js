//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];
  return function (...args) {
    const hash = md5(args);
    const cachedItem = cache.find((item) => item.hash === hash);
    if (cachedItem) {
      return "Из кеша: " + cachedItem.value;
    }

    const result = func(...args);

    cache.push({
      hash: hash,
      value: result,
    });

    if (cache.length > 5) {
      cache.shift();
    }

    return "Вычисляем: " + result;
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let firstCall = true;
  
  function wrapper(...args) {
    wrapper.allCount++;
    
    if (firstCall) {
      func.apply(this, args);
      wrapper.count++;
      firstCall = false;

      timeoutId = setTimeout(() => {
        timeoutId = null;
      }, delay);
    } else {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func.apply(this, args);
        wrapper.count++;
      }, delay);
    }
  }

  wrapper.count = 0;
  wrapper.allCount = 0;
  
  return wrapper;
}
