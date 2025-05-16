document.getElementById("teacherLoginBtn").addEventListener("click", () => {
  chrome.tabs.create({ url: chrome.runtime.getURL("pages/teacher.html") });
});

document.getElementById("studentLoginBtn").addEventListener("click", () => {
  document.getElementById("login-selection").style.display = "none";
  document.getElementById("studentSection").style.display = "block";
});

document.getElementById("startExamBtn").addEventListener("click", () => {
  const inputCode = document.getElementById("sessionCodeInput").value.trim();
  const messageEl = document.getElementById("studentMessage");
  if (!inputCode) {
    messageEl.textContent = "Please enter the session code.";
    return;
  }

  // Check if session code matches stored code and get duration
  chrome.storage.local.get(
    ["sessionCode", "examStart", "examDuration"],
    (data) => {
      if (data.sessionCode === inputCode) {
        // Verify session is still active
        const startTime = new Date(data.examStart).getTime();
        const duration = data.examDuration; // in seconds
        const now = Date.now();
        if (now > startTime + duration * 1000) {
          messageEl.textContent = "Exam session expired.";
          return;
        }

        messageEl.textContent = "Exam started! Do NOT switch tabs/windows.";
        // Inject content script immediately and start monitoring
        startExamInCurrentTab(duration);
      } else {
        messageEl.textContent = "Invalid session code.";
      }
    }
  );
});

function startExamInCurrentTab(duration) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length === 0) return;
    const tabId = tabs[0].id;

    chrome.scripting.executeScript(
      {
        target: { tabId },
        files: ["scripts/content.js"],
      },
      () => {
        // Tell content script to start monitoring immediately
        chrome.tabs.sendMessage(tabId, {
          action: "start_monitoring",
          duration,
        });
      }
    );
  });
}
