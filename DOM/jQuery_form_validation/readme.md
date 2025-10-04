# 🔐 Login Form with Email & Password Validation

tags: html, css, bootstrap, javascript, form-validation, regex, frontend, login-form, responsive-design, web-development

A responsive login form created using **HTML**, **Bootstrap 5**, and **JavaScript**. This form performs client-side validation for email and password using regular expressions and provides real-time feedback.

---

## 📋 Features

- ✅ Responsive layout using Bootstrap 5  
- 📧 **Email validation** using regex  
- 🔐 **Password validation** for:
  - Minimum 8 characters  
  - At least one uppercase letter  
  - At least one lowercase letter  
  - At least one number  
- ⚠️ Inline feedback for invalid inputs  
- 🎯 User-friendly and easy to customize  

---

## 🛠️ Technologies Used

- HTML5  
- CSS3 (via [Bootstrap v5.0.2](https://getbootstrap.com/))  
- JavaScript (ES6)  
- jQuery (CDN only, not used in logic)  

---

## 🗂️ Project Structure

<p>📁 login-form-validation
<br>
├── index.html # Main HTML layout
<br>
├── script.js # JavaScript file for validation logic
<br>
└── README.md # Project documentation
---</p>


## 🧪 Validation Details
Email Regex

js
/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
----
Password Regex

js
/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
----
## 🎥 video


https://github.com/user-attachments/assets/b50d59d9-b7df-4ee5-84e5-fa94c53c1441

