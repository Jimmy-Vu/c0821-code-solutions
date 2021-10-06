let currentCount = 3;

const countdown = setInterval(() => {
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(countdown);
  } else {
    console.log(currentCount);
    currentCount--;
  }
}, 1000);
