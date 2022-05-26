let myLeads = parseInt(JSON.parse(localStorage.getItem("myLeads")));
let action = JSON.parse(localStorage.getItem("action"));

const hrsEl = document.getElementById("hours");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const inputBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const ulEl = document.getElementById("ul-el");
const timerBtn = document.getElementById("timer-btn");
const goalBtn = document.getElementById("goal-btn");
const siteBtn = document.getElementById("site-btn");
const addGoalBtn = document.getElementById("addBtn");
const addSiteBtn = document.getElementById("addSiteBtn");

let currGoals = [];
let lanky = localStorage.getItem("allGoals");
console.log("lankatesh = " + lanky);
if (lanky) {
  lanky = JSON.parse(localStorage.getItem("allGoals"));
  currGoals = lanky;
  const goals = document.getElementById("goalList");
  for (let i = 0; i < currGoals.length; i++) {
    var li = document.createElement("li");
    var t = document.createTextNode(currGoals[i]);
    li.appendChild(t);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    goals.appendChild(li);
  }

  localStorage.setItem("allGoals", JSON.stringify(currGoals));
}

let blockedSites = [];
let blocked = localStorage.getItem("allSites");
if (blocked) {
  blocked = JSON.parse(localStorage.getItem("allSites"));
  blockedSites = blocked;
  const sites = document.getElementById("siteList");
  for (let i = 0; i < blockedSites.length; i++) {
    var li = document.createElement("li");
    var t = document.createTextNode(blockedSites[i]);
    li.appendChild(t);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close2";
    span.appendChild(txt);
    li.appendChild(span);
    sites.appendChild(li);
  }

  localStorage.setItem("allSites", JSON.stringify(blockedSites));
}

if (localStorage.getItem("goal") == "true") {
  goalBtn.style.textDecoration = "underline";
  timerBtn.style.textDecoration = "none";
  siteBtn.style.textDecoration = "none";
  document.querySelector(".timerPage").style.display = "none";
  document.querySelector(".goalPage").style.display = "block";
  document.querySelector(".sitesPage").style.display = "none";
  // document.querySelector(".time").style.display = "none";
  // document.querySelector(".timerButtons").style.display = "none";
  document.querySelector("#ola").innerText = "Hello";
} else if (localStorage.getItem("site") == "true") {
  siteBtn.style.textDecoration = "underline";
  goalBtn.style.textDecoration = "none";
  timerBtn.style.textDecoration = "none";
  document.querySelector(".timerPage").style.display = "none";
  document.querySelector(".goalPage").style.display = "none";
  document.querySelector(".sitesPage").style.display = "block";
} else {
  timerBtn.style.textDecoration = "underline";
  goalBtn.style.textDecoration = "none";
  siteBtn.style.textDecoration = "none";
  document.querySelector(".timerPage").style.display = "block";
  document.querySelector(".sitesPage").style.display = "none";
  //document.querySelector(".time").style.display = "flex";
  //document.querySelector(".timerButtons").style.display = "flex";
  document.querySelector(".goalPage").style.display = "none";
}

goalBtn.addEventListener("click", function () {
  localStorage.setItem("goal", true);
  localStorage.setItem("site", true);
  goalBtn.style.textDecoration = "underline";
  timerBtn.style.textDecoration = "none";
  siteBtn.style.textDecoration = "none";
  document.querySelector(".timerPage").style.display = "none";
  document.querySelector(".goalPage").style.display = "block";
  //document.querySelector(".timerButtons").style.display = "flex";
  document.querySelector(".sitesPage").style.display = "none";
  // document.querySelector(".time").style.display = "none";
  // document.querySelector(".timerButtons").style.display = "none";
  document.querySelector("#ola").innerText = "Hello";
});

timerBtn.addEventListener("click", function () {
  localStorage.setItem("goal", false);
  localStorage.setItem("site", false);
  timerBtn.style.textDecoration = "underline";
  goalBtn.style.textDecoration = "none";
  siteBtn.style.textDecoration = "none";
  document.querySelector(".timerPage").style.display = "block";
  //document.querySelector(".time").style.display = "flex";
  //document.querySelector(".timerButtons").style.display = "flex";
  document.querySelector(".goalPage").style.display = "none";
  //document.querySelector(".timerButtons").style.display = "flex";
  document.querySelector(".sitesPage").style.display = "none";
});

siteBtn.addEventListener("click", function () {
  localStorage.setItem("site", true);
  localStorage.setItem("goal", false);
  siteBtn.style.textDecoration = "underline";
  goalBtn.style.textDecoration = "none";
  timerBtn.style.textDecoration = "none";
  document.querySelector(".goalPage").style.display = "none";
  //document.querySelector(".timerButtons").style.display = "flex";
  document.querySelector(".timerPage").style.display = "none";
  //document.querySelector(".timerButtons").style.display = "flex";
  document.querySelector(".sitesPage").style.display = "block";
});

addGoalBtn.addEventListener("click", function () {
  const goals = document.getElementById("goalList");
  const newGoal = document.getElementById("ola").value;

  if (newGoal != "") {
    var li = document.createElement("li");
    var t = document.createTextNode(newGoal);
    li.appendChild(t);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    goals.appendChild(li);

    currGoals.push(newGoal);
    localStorage.setItem("allGoals", JSON.stringify(currGoals));

    document.getElementById("ola").value = "";
  }
});

addSiteBtn.addEventListener("click", function () {
  const sites = document.getElementById("siteList");
  const newSite = document.getElementById("siteIn").value;

  if (newSite != "") {
    var li = document.createElement("li");
    var t = document.createTextNode(newSite);
    li.appendChild(t);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close2";
    span.appendChild(txt);
    li.appendChild(span);
    sites.appendChild(li);

    blockedSites.push(newSite);
    localStorage.setItem("allSites", JSON.stringify(blockedSites));

    document.getElementById("siteIn").value = "";
  }
});

const rmGoals = document.getElementById("rmGoals");
rmGoals.addEventListener("click", function () {
  const goals = document.getElementById("goalList");
  currGoals = [];
  goals.innerHTML = null;
  localStorage.setItem("allGoals", currGoals);
});

const rmSites = document.getElementById("rmSites");
rmSites.addEventListener("click", function () {
  const sites = document.getElementById("siteList");
  blockedSites = [];
  sites.innerHTML = null;
  localStorage.setItem("allSites", blockedSites);
});

const blockTab = document.getElementById("blockTab");
blockTab.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let newSite = tabs[0].url;
    const sites = document.getElementById("siteList");
    var li = document.createElement("li");
    var t = document.createTextNode(newSite);
    li.appendChild(t);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close2";
    span.appendChild(txt);
    li.appendChild(span);
    sites.appendChild(li);

    blockedSites.push(newSite);
    localStorage.setItem("allSites", JSON.stringify(blockedSites));

    document.getElementById("siteIn").value = "";
  });
});

setInterval(function () {
  var close = document.getElementsByClassName("close2");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      for (let i = 0; i < blockedSites.length; i++) {
        if (blockedSites[i] == div.innerText.slice(0, -1)) {
          blockedSites.splice(i, 1);
          //break;
        }
      }
      console.log("huzza " + currGoals + " wizza " + currGoals.length);
      localStorage.setItem("allSites", JSON.stringify(blockedSites));
      //console.log("Somalia " + div.innerText);
    };
  }
});

setInterval(function () {
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      for (let i = 0; i < currGoals.length; i++) {
        if (currGoals[i] == div.innerText.slice(0, -1)) {
          currGoals.splice(i, 1);
          //break;
        }
      }
      console.log("huzza " + currGoals + " wizza " + currGoals.length);
      localStorage.setItem("allGoals", JSON.stringify(currGoals));
      //console.log("Somalia " + div.innerText);
    };
  }
});

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const yourFunction = async () => {
  await delay(1000);
  inputBtn.disabled = false;
  console.log("Waited 1s");
};

if (isNaN(myLeads)) {
  console.log("roar");
  myLeads = 0;
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
}

if (localStorage.getItem("resume") == "true") {
  console.log("resume starty");
  inputBtn.innerText = "RESUME";
  inputBtn.style.background = "#33D1FF";
  inputBtn.style.borderColor = "#33D1FF";
} else if (
  localStorage.getItem("paused") == "true" &&
  parseInt(localStorage.getItem("myLeads")) > 0
) {
  console.log("paused starty");
  inputBtn.style.background = "#893eb2";
  inputBtn.style.borderColor = "#893eb2";
  inputBtn.innerText = "PAUSE";
} else {
  console.log("start starty");
  inputBtn.style.background = "#3ab9a4";
  inputBtn.style.borderColor = "#3ab9a4";
  inputBtn.innerText = "START";
}

if (
  (isNaN(localStorage.getItem("action")) ||
    localStorage.getItem("action") == null) &&
  localStorage.getItem("action") != "true"
) {
  localStorage.setItem("action", false);
}

if (
  isNaN(localStorage.getItem("paused")) ||
  (localStorage.getItem("paused") == null &&
    localStorage.getItem("paused") != "true")
) {
  localStorage.setItem("paused", false);
}

if (
  (isNaN(localStorage.getItem("resume")) ||
    localStorage.getItem("resume") == null) &&
  localStorage.getItem("resume") != "true"
) {
  console.log("resume init");
  console.log(localStorage.getItem("resume"));
  localStorage.setItem("resume", false);
}

console.log("rayudu");
console.log(localStorage.getItem("action"));

//ulEl.innerHTML = `<p>${localStorage.getItem("myLeads")}</p>`;

if (localStorage.getItem("action") == "true") {
  let secondsLeft = parseInt(localStorage.getItem("myLeads"));
  let hours = Math.floor(secondsLeft / 3600);
  let minutes = Math.floor(secondsLeft / 60) - hours * 60;
  let seconds = secondsLeft % 60;
  hrsEl.value = `${("0" + hours).slice(-2)}`;
  minEl.value = `${("0" + minutes).slice(-2)}`;
  secEl.value = `${("0" + seconds).slice(-2)}`;
}

render(myLeads);

if (localStorage.getItem("action")) {
  setInterval(function () {
    let secondsLeft = parseInt(localStorage.getItem("myLeads"));
    if (secondsLeft != 0) {
      if (localStorage.getItem("resume") != "true") {
        inputBtn.style.background = "#893eb2";
        inputBtn.style.borderColor = "#893eb2";
        inputBtn.innerText = "PAUSE";
      }
      resetBtn.style.background = "#f08080";
      resetBtn.style.color = "#FFFFFF";
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
    //ulEl.innerHTML = `<p>${minutes}:${("0" + seconds).slice(-2)}</p>`;
    if (localStorage.getItem("action") == "true") {
      let secondsLeft = parseInt(localStorage.getItem("myLeads"));
      let hours = Math.floor(secondsLeft / 3600);
      let minutes = Math.floor(secondsLeft / 60) - hours * 60;
      let seconds = secondsLeft % 60;
      hrsEl.value = `${("0" + hours).slice(-2)}`;
      minEl.value = `${("0" + minutes).slice(-2)}`;
      secEl.value = `${("0" + seconds).slice(-2)}`;
    }

    //inputEl.value = `${minutes}:${("0" + seconds).slice(-2)}`;
  }, 1);
}

setInterval(function () {
  if (localStorage.getItem("myLeads") <= 0) {
    inputBtn.style.background = "#3ab9a4";
    inputBtn.style.borderColor = "#3ab9a4";
    inputBtn.innerText = "START";
    resetBtn.style.background = "#f5f5f5";
    resetBtn.style.color = "#c3c3c3";
    resetBtn.disabled = true;

    localStorage.setItem("paused", false);
    localStorage.setItem("resume", false);
    localStorage.setItem("action", false);
    console.log("abey");
    console.log(localStorage.getItem("myLeads"));
    //localStorage.setItem("myLeads", 0);
  }
}, 1);

function render() {
  console.log("outie");
  //console.log(action);
  x = chrome.extension.getBackgroundPage();
  myLeads = parseInt(localStorage.getItem("myLeads"));
  if (!localStorage.getItem("action")) {
    console.log(myLeads);
    //x.greet(parseInt(myLeads), ulEl);
  }
}

inputBtn.addEventListener("click", function () {
  console.log(
    "uya " + secEl.value + " hours " + hrsEl.value + " min " + minEl.value
  );
  if (
    localStorage.getItem("paused") == "false" &&
    localStorage.getItem("action") == "false" &&
    localStorage.getItem("resume") == "false"
  ) {
    resetBtn.disabled = false;
    inputBtn.style.background = "#3ab9a4";
    inputBtn.style.borderColor = "#3ab9a4";
    inputBtn.innerText = "START";
    console.log("entered start");
    console.log(minEl.innerText);
    console.log(localStorage.getItem("myLeads"));
    let seconds =
      parseFloat(minEl.value * 60) +
      parseFloat(secEl.value) +
      parseFloat(hrsEl.value * 3600);
    console.log("uya1 " + seconds);
    if (seconds > 0) {
      let secondsLeft = parseInt(localStorage.getItem("myLeads"));
      let hours = Math.floor(seconds / 3600);
      seconds -= hours * 3600;
      let minutes = Math.floor(seconds / 60);
      let secs = seconds % 60;
      console.log("uya2 " + hours + " min " + minutes + " seconds " + secs);
      hrsEl.value = `${("0" + hours).slice(-2)}`;
      minEl.value = `${("0" + minutes).slice(-2)}`;
      secEl.value = `${("0" + secs).slice(-2)}`;
      localStorage.setItem("action", true);
      action = true;
      let time = parseInt(
        parseFloat(minEl.value) * 60 -
          1 +
          parseFloat(secEl.value) +
          parseFloat(hrsEl.value) * 3600
      );
      console.log("anjappar");
      console.log(minEl.innerText);
      console.log("pampi" + time);
      localStorage.setItem("myLeads", JSON.stringify(time));
      localStorage.setItem("action", true);
      x = chrome.extension.getBackgroundPage();
      console.log("passed time");

      //console.log("hempi");
      //console.log(secondsLeft);
      //console.log(minutes);
      //console.log(seconds);
      if (hours > 0) {
        chrome.browserAction.setBadgeText({
          text: `${hours} hr`,
        });
      } else {
        chrome.browserAction.setBadgeText({
          text: `${minutes}:${("0" + secs).slice(-2)}`,
        });
      }
      x.greet();
    }
  } else if (localStorage.getItem("resume") == "true") {
    console.log("entered resume");
    localStorage.setItem("paused", false);
    localStorage.setItem("resume", false);
    localStorage.setItem(
      "myLeads",
      parseInt(localStorage.getItem("myLeads") - 1)
    );
    let secondsLeft = parseInt(localStorage.getItem("myLeads"));
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
    inputBtn.innerText = "RESUME";
    console.log("pampi");
    console.log(minEl.innerText);
    console.log("passed time");
    x.greet();
  } else {
    /* setInterval(function () {
      inputBtn.disabled = true;
    }, 1000);*/
    console.log("entered paused");
    yourFunction();
    console.log("done with it");
    //console.log("hempi");
    //console.log(secondsLeft);
    //console.log(minutes);
    //console.log(seconds);
    inputBtn.disabled = true;
    localStorage.setItem("paused", true);
    localStorage.setItem("myLeads", parseInt(localStorage.getItem("myLeads")));
    inputBtn.innerText = "RESUME";
    inputBtn.style.background = "#33D1FF";
    inputBtn.style.borderColor = "#33D1FF";
    localStorage.setItem("resume", true);
    //console.log("apple");
    //console.log(isNaN(localStorage.getItem("resume")));
    //console.log(localStorage.getItem("resume"));
    let secondsLeft = parseInt(localStorage.getItem("myLeads"));
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
    yourFunction();
  }
});

resetBtn.addEventListener("click", function () {
  if (localStorage.getItem("action") == "true") {
    hrsEl.value = "00";
    minEl.value = "00";
    secEl.value = "00";
  }
  localStorage.setItem("paused", false);
  localStorage.setItem("action", false);
  localStorage.setItem("resume", false);
  chrome.browserAction.setBadgeText({
    text: "0:00",
  });
  inputBtn.style.background = "#3ab9a4";
  inputBtn.style.borderColor = "#3ab9a4";
  inputBtn.innerText = "START";
  resetBtn.style.background = "#f5f5f5";
  resetBtn.style.color = "#c3c3c3";
  //console.log("ching");
  //console.log(localStorage.getItem("action"));
  localStorage.setItem("myLeads", 0);
  x = chrome.extension.getBackgroundPage();
});
