/*
This file is responsible for managing and measuring the time for the timer.
*/
let timer = null;
function greet() {
  timer = setInterval(function () {
    /* if timer is paused, stop the current timer */
    console.log(localStorage.getItem("paused") == "true");
    if (localStorage.getItem("paused") == "true") {
      clearInterval(timer);
    /* timer is not paused, perform some checks */
    } else {
      /* calculate the time left in HH:MM:SS for display purposes */
      let secondsLeft = parseInt(localStorage.getItem("timeLeft"));
      if (secondsLeft > 0) {
        secondsLeft -= 1;
      }
      let hours = Math.floor(secondsLeft / 3600);
      secondsLeft -= hours * 3600;
      let minutes = Math.floor(secondsLeft / 60);
      let seconds = secondsLeft % 60;
      if (hours > 0) {
        chrome.browserAction.setBadgeText({
          text: `${hours} hr`,
        });
      } else {
        chrome.browserAction.setBadgeText({
          text: `${minutes}:${("0" + seconds).slice(-2)}`,
        });
      }
      /* time is up, sound the alarm */
      if (parseInt(localStorage.getItem("timeLeft")) <= 1) {
        if (localStorage.getItem("action") == "true") {
          audio = new Audio("../artifacts/timeUp.mp4");
          audio.play();
        }
        localStorage.setItem("timeLeft", JSON.stringify(0));
        clearInterval(timer);
      } else {
        localStorage.setItem(
          "timeLeft",
          JSON.stringify(localStorage.getItem("timeLeft") - 1)
        );
      }
    }
  }, 1000);
}

/* check and act upon blocked sites if timer is running */
setInterval(function () {
  if (
    localStorage.getItem("action") == "true" &&
    localStorage.getItem("timeLeft") > 1
  ) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      try {
        siteBlock = JSON.parse(localStorage.getItem("allSites"));
        console.log(tabs[0].url);
        if (siteBlock.includes(tabs[0].url)) {
          chrome.tabs.update({ url: "siteBlock.html" });
        }
      } catch (e) {
        console.log(e);
      }
    });
  }
}, 1000);
