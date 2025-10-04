const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const userError = document.getElementById("userError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const formMsg = document.getElementById("formMsg");

const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// Show/hide password
togglePassword.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    togglePassword.classList.toggle("bi-eye");
    togglePassword.classList.toggle("bi-eye-slash");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formMsg.textContent = "";

    let valid = true;

    // Username
    if (username.value.trim() === "") {
        userError.textContent = "* Username is required";
        userError.classList.add("show");
        valid = false;
    } else {
        userError.textContent = "";
        userError.classList.remove("show");
    }

    // Email
    if (email.value.trim() === "") {
        emailError.textContent = "* Email is required";
        emailError.classList.add("show");
        valid = false;
    } else if (!emailRegx.test(email.value)) {
        emailError.textContent = "* Invalid email format";
        emailError.classList.add("show");
        valid = false;
    } else {
        emailError.textContent = "";
        emailError.classList.remove("show");
    }

    // Password
    if (password.value.trim() === "") {
        passError.textContent = "* Password is required";
        passError.classList.add("show");
        valid = false;
    } else if (!passwordRegx.test(password.value)) {
        passError.textContent = "* Must include uppercase, lowercase, number (8+ chars)";
        passError.classList.add("show");
        valid = false;
    } else {
        passError.textContent = "";
        passError.classList.remove("show");
    }

    // Success message
    if (valid) {
        formMsg.textContent = "✅ Login Successful!";
        form.reset();
        setTimeout(() => (formMsg.textContent = ""), 3000);
    }
});
