# 🚀 Studi: Anti-Cheating Chrome Extension for Online Exams

<p align="center">
  <img src="https://img.shields.io/badge/status-under%20construction-yellow.svg" alt="Status: Under Construction">
  <img src="https://img.shields.io/badge/platform-Chrome-brightgreen.svg" alt="Platform: Chrome">
</p>

<p align="center">
  <em>A simple yet effective Chrome extension to help maintain academic integrity during online assessments.</em>
</p>

---

### ⚠️ Under Construction
**Please Note:** This project is currently under active development. Some features may not be fully implemented, and you might encounter bugs. Feedback are highly welcome!

---

## 📖 Overview

Studi is a Chrome extension designed for educators and institutions to create a more secure online examination environment. It prevents students from switching tabs or opening new windows once an exam session has started, thereby minimizing opportunities for cheating. It's a lightweight and easy-to-use tool for any online testing platform, like Google Forms, Moodle, or custom-built exam websites.

## ✨ Key Features

-   **👨‍🏫 Teacher Dashboard:** Easily create and manage exam sessions.
-   **⏱️ Timed Sessions:** Set a specific duration for each exam.
-   **🔑 Secure Session Codes:** Generate unique codes for students to join an exam.
-   **🔒 Tab & Window Locking:** Restricts students to the exam tab for the entire duration.
-   **🚨 Instant Alerts:** Notifies students if they attempt to navigate away from the exam.
-   **💻 Cross-Platform:** Works on any website or online assessment platform.

---

## 📂 Project Structure

Here is the file structure for the Studi extension:

```
Studi/
├── manifest.json
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── pages/
│   ├── login.html
│   └── teacher.html
├── scripts/
│   ├── background.js
│   ├── content.js
│   ├── login.js
│   └── teacher.js
└── styles/
    └── style.css
```

---

## 🛠️ Installation and Usage

### 1. Get the Extension Files

Clone or download this repository to your local machine.

```bash
git clone [https://github.com/your-username/extension-nocheat.git](https://github.com/your-username/extension-nocheat.git)
```

### 2. Load into Chrome

1.  Open your Google Chrome browser and navigate to `chrome://extensions`.
2.  Enable **"Developer mode"** using the toggle switch in the top-right corner.
3.  Click on the **"Load unpacked"** button.
4.  Select the `Studi` (or the root project) folder that you downloaded.
5.  The **Studi** extension icon will now appear in your browser's toolbar.

### 3. How to Use

#### For Teachers:

1.  Click the Studi extension icon in your toolbar.
2.  Select **"Teacher Login"**. This will open the teacher dashboard in a new tab.
3.  Enter the desired **exam duration** in minutes.
4.  Click **"Create Session"**. A unique session code will be generated.
5.  Share this code with your students.

#### For Students:

1.  Navigate to the online exam page (e.g., Google Form).
2.  Click the Studi extension icon.
3.  Select **"Student Login"**.
4.  Enter the session code provided by the teacher.
5.  Click **"Start Exam"**. The tab will be locked, and the exam timer will begin.

---

## ⚙️ How It Works

The extension's core logic is managed by a few key scripts:

-   **`teacher.js` & `login.js`**: Handle the user interface for creating sessions and logging in. When a teacher creates a session, the details (code, duration) are saved using `chrome.storage`.
-   **`content.js`**: This script is injected into the student's active exam tab. It listens for `blur` events, which occur when the user tries to switch tabs or windows.
-   **`background.js`**: This service worker runs in the background. It listens for messages from the content script and enforces the tab-locking rules by monitoring tab and window focus changes, forcing the user back to the exam tab if they navigate away.

---
