const digitalClock = () => {
  const now = new Date();
  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hours = now.getHours();
  let date = now.toDateString();
  let ampm = "am";

  if (sec < 10) {
    sec = `0${sec}`;
  }

  if (min < 10) {
    min = `0${min}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (hours > 12) {
    hours = hours - 12;
    ampm = "pm";
  }

  if (hours == 0) {
    hours = `12`;
  }

  const clock = `
  <div class="date">
  ${date}
  </div>

  <div class="time">
  ${hours} : ${min} : ${sec} ${ampm}
  </div>`;

  clockcontainer.innerHTML = clock;
};

setInterval(digitalClock, 1000);
