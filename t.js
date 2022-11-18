function resolveAfter10Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve().return ('resolved');
    }, 10000);
  });
}