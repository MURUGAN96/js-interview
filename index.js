// Import stylesheets
import './style.css';

// Write Javascript code!
const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('Hi 1');
  }, 5000);
});

const promise2 = new Promise((res, rej) => {
  res('Hi 2');
});

const promise3 = new Promise((res, rej) => {
  res('Hi 3');
});

const promise4 = new Promise((res, rej) => {
  console.log('Hi 5');
  res('Hi 4');
});

console.log('Hi 6');

const getData = async () => {
  const getRes = Promise.all([promise1, promise2, promise3, promise4]);

  getRes.then((res) => console.log(res)).catch((err) => console.log(err));
};

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
      }
    });
  },
  {
    root: null,
    threshold: 0.5,
  }
);

getData();

const aa = [3, 1, 213, 1, 1, 12];
const bb = [2, 12, 44, 5, 1];

console.log(aa.filter((ele) => bb.indexOf(ele) > 0));

const memoizeFn = (fn) => {
  let cache = new Map();
  return function (...args) {
    console.log(args);
    let argKeys = JSON.stringify(args);
    if (cache.has(argKeys)) {
      console.log('Cached');
      return cache.get(argKeys);
    }
    const res = fn(...args);
    cache.set(argKeys, res);
    return res;
  };
};

const qq = [22, 3, 1, 89, 92, 3, 45, 90, 22, 89];

Array.prototype.findMax = function () {
  let firstLar = this[0];
  let secLar = this[0];
  for (let i = 0; i < this.length; i++) {
    if (qq[i] > firstLar) {
      secLar = firstLar;
      firstLar = qq[i];
    } else if (qq[i] !== secLar && qq[i] > secLar) {
      secLar = qq[i];
    }
  }
  return secLar;
};

Array.prototype.findMaxSum = function () {
  let maxSum = 0;
  let sum = this[0];
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
    if (sum > maxSum) {
      maxSum = sum;
    } else if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};

console.log('Max: ' + qq.findMax());
console.log('Sum: ' + [-1, 0, 8, 1, -2, 1, 9, -8, 2].findMaxSum());

const addSum = (a, b) => {
  return a + b;
};

const getSum = memoizeFn(addSum);

console.log(getSum(2, 3));
console.log(getSum(3, 3));
console.log(getSum(9, 3));
console.log(getSum(2, 3));

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
