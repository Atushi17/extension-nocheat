let examTabId = null;
let examEndTime = null;

chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type === "start_exam") {
    examTabId = sender.tab.id;
    examEndTime = Date.now() + message.duration * 1000;
    setupFocusListeners();
  }
});

function setupFocusListeners() {
  chrome.tabs.onActivated.addListener(({ tabId }) => {
    if (examTabId && Date.now() < examEndTime && tabId !== examTabId) {
      trySwitchBack();
    }
  });

  chrome.windows.onFocusChanged.addListener((windowId) => {
    if (
      examTabId &&
      Date.now() < examEndTime &&
      windowId !== chrome.windows.WINDOW_ID_NONE
    ) {
      chrome.tabs.get(examTabId, (tab) => {
        if (chrome.runtime.lastError) return;
        chrome.windows.update(tab.windowId, { focused: true }).catch(() => {});
        trySwitchBack();
      });
    }
  });
}

function trySwitchBack() {
  if (!examTabId) return;

  chrome.tabs.update(examTabId, { active: true }).catch((err) => {
    console.warn("Tab switch failed, retrying...", err);
    setTimeout(() => {
      chrome.tabs.update(examTabId, { active: true }).catch(() => {});
    }, 500);
  });
}
