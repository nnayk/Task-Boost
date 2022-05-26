let lellu = null;
function greet() {
  lellu = setInterval(function () {
    //console.log("ibra");
    console.log(localStorage.getItem("paused"));
    console.log(localStorage.getItem("paused") == "true");
    if (localStorage.getItem("paused") == "true") {
      clearInterval(lellu);
    } else {
      //console.log(localStorage.getItem("action"));
      //console.log(time);parseInt(
      //console.log("opli");
      //console.log(localStorage.getItem("myLeads", JSON.stringify(time)));
      try {
        //const ulEl = document.getElementById("ul-el");
        //console.log("z");
        //console.log(ulEl);
        //const ulEl = document.getElementById("ul-el");
        //ulEl.innerHTML = `<p>${parseInt(localStorage.getItem("myLeads"))}</p>`;
      } catch {
        //bala.innerHTML = `<p>${parseInt(localStorage.getItem("myLeads"))}</p>`;
        //console.log("caught");
      }
      let secondsLeft = parseInt(localStorage.getItem("myLeads"));
      //console.log("relu");
      //console.log(secondsLeft);

      if (secondsLeft > 0) {
        //console.log("shiggle");
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
      if (parseInt(localStorage.getItem("myLeads")) <= 1) {
        //console.log("somu123");
        //console.log(localStorage.getItem("action"));
        //console.log(localStorage.getItem("action") == "true");
        if (localStorage.getItem("action") == "true") {
          audio = new Audio("timeUp.mp4");
          audio.play();

          // chrome.notifications.create(
          //   "Done",
          //   {
          //     type: "basic",
          //     title: "Time is up!",
          //     message: "",
          //     iconUrl: "Task Boost.png",
          //   },
          //   function () {}
          // );
        }
        localStorage.setItem("myLeads", JSON.stringify(0));
        clearInterval(lellu);
      } else {
        localStorage.setItem(
          "myLeads",
          JSON.stringify(localStorage.getItem("myLeads") - 1)
        );
      }
    }

    //console.log("hengi");
    //console.log(localStorage.getItem("myLeads"));
  }, 1000);
}
//console.log("jiggli");

setInterval(function () {
  if (
    localStorage.getItem("action") == "true" &&
    localStorage.getItem("myLeads") > 1
  ) {
    let siteBock = localStorage.getItem("allSites");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log("hi");
      console.log(window.location.href);
      try {
        siteBlock = JSON.parse(localStorage.getItem("allSites"));
        console.log("babel " + siteBlock);
        console.log("babru " + siteBlock[0]);
        console.log(tabs[0].url);
        console.log(tabs[0].url == "https://www.youtube.com/");
        if (siteBlock.includes(tabs[0].url)) {
          console.log("jiggy");
          chrome.tabs.update({ url: "siteBlock.html" });
        }
      } catch (e) {
        console.log("eoor");
      }
    });
  }
}, 1000);
