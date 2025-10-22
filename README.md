
## 🧠 Overview
This project automates **7 functional test cases** from the (https://the-internet.herokuapp.com/) demo website using **Playwright (JavaScript)** following the **Page Object Model (POM)** design pattern.  
It validates common web functionalities such as authentication, dynamic UI behavior, file upload, alert handling, and more.

---

## 🧩 Automated Test Modules
| No | Module | Description |
|----|---------|--------------|
| 1 | **Form Authentication** | Valid & Invalid login verification |
| 2 | **Dynamic Controls** | Enable/disable textbox functionality |
| 3 | **Checkboxes** | Toggle checkbox selection |
| 4 | **File Upload** | Validate file upload and success message |
| 5 | **JavaScript Alerts** | Handle and verify alert confirmation |
| 6 | **Dropdown** | Select dropdown options and verify value |
| 7 | **Hover** | Validate hover state displays user info |

---

## ⚙️ Tech Stack
- 🧪 **Playwright** (JavaScript)
- 🧱 **Page Object Model (POM)**
- 📂 **Node.js**
- 📊 **Playwright Test Reporter**

---

## 🗂️ Project Structure
herokuapp-pom-automation-test/
│
├── pages/ # Page Object files (POM classes)
│ ├── authPage.js
│ ├── dynamicControlsPage.js
│ ├── checkboxesPage.js
│ ├── fileUploadPage.js
│ ├── jsAlertsPage.js
│ ├── dropdownPage.js
│ └── hoverPage.js
│
├── tests/ # Test scripts
│ ├── auth.test.js
│ ├── dynamicControls.test.js
│ ├── checkboxes.test.js
│ ├── fileUpload.test.js
│ ├── jsAlerts.test.js
│ ├── dropdown.test.js
│ └── hover.test.js
│
├── testData/testfile.txt # File used for upload test
├── test-result # Recorded test evidence
├── playwright.config.js
├── package.json
└── README.md
