# Studi - Chrome Extension to Prevent Cheating in Online Exams

## Overview
Studi is a Chrome extension designed for teachers to conduct secure online exams using platforms like Google Forms or any other websites. It restricts students from switching tabs or windows during the exam session to minimize cheating.

---

## Features
- **Teacher Login:** Create an exam session with a unique code and set the exam duration.
- **Student Login:** Enter the exam session code to start the exam timer.
- **Tab/Window Lock:** Once the exam starts, students cannot switch tabs or windows until the timer expires.
- **Popup-based UI:** Both teacher and student interfaces operate within the Chrome extension popup.

---

## Folder Structure
Studi/
├── manifest.json
├── icons/
│ ├── icon16.png
│ ├── icon48.png
│ └── icon128.png
├── pages/
│ ├── login.html
│ └── teacher.html
├── scripts/
│ ├── background.js
│ ├── content.js
│ ├── login.js
│ └── teacher.js
└── styles/
└── style.css

---

## Installation and Setup

1. **Download or Clone the Repository**

   Download the `Studi` folder to your computer.

2. **Load the Extension in Chrome**

   - Open Chrome and go to `chrome://extensions/`
   - Enable **Developer mode** (toggle switch in the top right corner).
   - Click **Load unpacked** and select the `Studi` folder.
   - The extension icon should appear near the address bar.

3. **Using the Extension**

   - Click the Studi extension icon.
   - Select **Teacher Login** to create an exam session.
     - Enter the exam duration (in minutes).
     - Click **Create Session** to generate a unique session code.
   - Share the generated code with your students.

   - Students open the extension and select **Student Login**.
     - Enter the session code provided by the teacher.
     - Click **Start Exam** to begin.
     - The tab/window lock activates immediately to prevent switching.

4. **During the Exam**

   - Students are locked on the exam tab.
   - Attempting to switch tabs or windows triggers an alert and forces focus back to the exam tab.
   - The lock automatically ends after the session duration expires.

---
