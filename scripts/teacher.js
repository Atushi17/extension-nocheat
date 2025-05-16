function generateSessionCode(length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

document.getElementById("createSessionBtn").addEventListener("click", () => {
  const durationMinutes = parseInt(
    document.getElementById("durationInput").value,
    10
  );
  if (!durationMinutes || durationMinutes <= 0) {
    alert("Please enter a valid duration.");
    return;
  }

  const sessionCode = generateSessionCode(6);
  const examStart = new Date().toISOString();
  const examDuration = durationMinutes * 60; // in seconds

  chrome.storage.local.set({ sessionCode, examStart, examDuration }, () => {
    document.getElementById("sessionCodeDisplay").textContent = sessionCode;
    alert(`Session created with code: ${sessionCode}`);
  });
});
