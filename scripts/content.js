let alertShown = false;
let intervalId = null;

function startMonitoring(duration) {
  const endTime = Date.now() + duration * 1000;

  function checkTime() {
    if (Date.now() > endTime) {
      window.removeEventListener("blur", blurHandler);
      if (intervalId) clearInterval(intervalId);
    }
  }

  function blurHandler() {
    if (!alertShown) {
      alertShown = true;
      alert("Tab switching is not allowed during the exam!");
      setTimeout(() => (alertShown = false), 1000);
    }
    window.focus();
  }

  window.addEventListener("blur", blurHandler);
  intervalId = setInterval(checkTime, 1000);

  // Notify background script to start enforcement
  chrome.runtime.sendMessage({ type: "start_exam", duration });
}

// Listen for start monitoring message
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start_monitoring") {
    startMonitoring(message.duration);
  }
});
