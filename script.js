const getBottom = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.bottom;
};

const getLeft = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.left;
};

const setBottom = () => {
  const ref = document.querySelector("#ref");
  return getBottom(ref);
};

const checkHeight = (event) => {
  const element = event.target;
  return getBottom(element);
};

const randomOffset = () => {
  let randomNum = Math.floor(Math.random() * 60) + 20;
  return (randomNum *= Math.round(Math.random()) ? 1 : -1);
};

const rollOff = (event) => {
  const ball = event.target;
  const positionLeft = getLeft(ball);
  const offset = randomOffset();
  const newPositionLeft = positionLeft + offset;

  ball.style.transition = `all 1000ms ease-out`;
  ball.style.left = `${newPositionLeft}px`;
};

const bounce = (event, bounces = 9, maxHeight = 600, maxTime = 300) => {
  const viewPortBottom = setBottom();
  maxHeightPx = `${maxHeight}px`;
  if (bounces === 0) {
    rollOff(event);
    return;
  }
  const ball = event.target;
  ball.style.transition = `all ${maxTime}ms ease-out`;
  ball.style.bottom = maxHeightPx;

  newBounces = bounces - 1;
  newMaxHeight = Math.round(0.7 * maxHeight);
  newMaxTime = Math.round(0.9 * maxTime);

  setTimeout(() => {
    ball.style.transition = "all 300ms ease-in";
    ball.style.bottom = "0px";
  }, maxTime);

  const heightCheck = setInterval(() => {
    const rectBottom = checkHeight(event);
    if (rectBottom === viewPortBottom) {
      clearInterval(heightCheck);
      bounce(event, newBounces, newMaxHeight, newMaxTime);
    }
  }, 30);
};

const addEventListeners = () => {
  const balls = document.querySelectorAll(".ball");
  const ballsArray = Array.from(balls);
  ballsArray.forEach((ball) => {
    ball.style.bottom = "0px";
    ball.addEventListener("click", bounce);
  });
};

addEventListeners();
