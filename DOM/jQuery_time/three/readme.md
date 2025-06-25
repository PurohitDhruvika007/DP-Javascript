# 📨 Delayed Sign-Up Popup Web App

## 📋 Overview
This project is a sleek, responsive **Sign-Up Form Popup** built using **HTML**, **Bootstrap 5**, and **jQuery**. The form appears 5 seconds after the page loads unless the user closes it. It’s designed to collect a user’s email (and optionally their phone number) in exchange for a discount, making it ideal for marketing, e-commerce, and newsletter campaigns.

---

## ✨ Features
- Responsive and styled using Bootstrap 5
- Delayed popup after 5 seconds of page load
- Includes close (`X`) button to dismiss the popup
- Once closed, popup doesn’t appear again in the same session
- Email input with proper validation
- Optional phone number field (with character limit)
- Promotional message and discount offer display

---

## 🛠️ Technologies Used
- **HTML5** – Structure and layout  
- **Bootstrap 5** – Responsive design and form styling  
- **jQuery** – DOM manipulation and popup logic

---

## 🚀 How It Works
1. When the user opens the page, the signup form is initially hidden.
2. After 5 seconds, the form automatically appears (unless it was closed).
3. If the user clicks the close button (`X`), the form is hidden and won't reappear.
4. The form includes email and phone number inputs and a submit button.

---

## 📁 File Structure
<ul>
  <li><code>signup-popup/</code>
    <ul>
      <li><code>index.html</code> – Main layout and form structure</li>
      <li><code>script.js</code> – jQuery logic for popup control</li>
      <li><code>style.css</code> <em>(optional)</em> – Additional custom styles if needed</li>
    </ul>
  </li>
</ul>


---

## 📦 How to Use
1. Open `index.html` in any modern browser.
2. Wait 5 seconds to see the popup form appear.
3. You can fill it out or close it using the "X" button.

---

## 🔧 Customization Ideas
- Store close action in `localStorage` to keep form hidden even on page refresh
- Add validation for phone number format
- Integrate form submission to a backend or mailing service (like Mailchimp)
- Replace text content with dynamic messages or offers
- Show the popup on scroll or exit-intent instead of time delay

---

## 🎯 Ideal For
- Marketers who want to add promo popups
- Beginners learning jQuery and DOM timing functions
- Front-end developers practicing Bootstrap modals and UX triggers

---

## 🎥 video

https://github.com/user-attachments/assets/a22ea774-7082-41a7-9458-49c3c8d2bdc2

