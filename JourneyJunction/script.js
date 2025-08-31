const register = document.getElementById("register");
const fullName = document.getElementById("fullname");
const registerEmail = document.getElementById("register_email");
const registerPassword = document.getElementById("register_password");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const login = document.getElementById("login");
const loginProblem = document.getElementById("login-problem");
const registerProblem = document.getElementById("register-problem");
const submitMessage = document.getElementById("submit-message");
const contactProblem = document.getElementById("contact-problem");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactSubject = document.getElementById("contact-subject");
const contactMessage = document.getElementById("contact-message");


function contact_data() {
	if (contactName.value.trim() == "") {
		contactProblem.textContent = " * name is required!";
	}
	else if (contactEmail.value.trim() == "") {
		contactProblem.textContent = " * email is required!";
	}
	else if (contactSubject.value.trim() == "") {
		contactProblem.textContent = " * subject is required!";
	}
	else if (contactMessage.value.trim() == "") {
		contactProblem.textContent = " * message is required!";
	}
	else {
		alert("successfully message send !!");
		contactName.value = "";
		contactEmail.value = "";
		contactSubject.value = "";
		contactMessage.value = "";
	}
}

function login_data() {
	if (email.value.trim() == "") {
		loginProblem.textContent = " * email is required!";
	}
	else if (password.value.trim() == "") {
		loginProblem.textContent = " * password is required!";
	}
	else {
		loginProblem.textContent = " ";
		alert("login successfully!")
		password.value = "";
		email.value = "";
	}

}

function register_data() {
	if (fullName.value.trim() != "") {
		if (registerEmail.value.trim() != "") {
			if (registerPassword.value.trim() != "" && registerPassword.value.length >= 8) {
				if (confirmPassword.value.trim() != "") {
					if (registerPassword.value == confirmPassword.value) {
						registerProblem.textContent = "";
						alert("successfully registered!");
						fullName.value = "";
						registerEmail.value = "";
						registerPassword.value = "";
						confirmPassword.value = "";
					}
					else {
						registerProblem.textContent = " * password and confirm password must be same!";
					}
				}
				else {
					registerProblem.textContent = " * comfirm password is required!";
				}
			}
			else {
				registerProblem.textContent = " * strong password is required";
			}
		}
		else {
			registerProblem.textContent = " * email is required!";
		}
	}
	else {
		registerProblem.textContent = " * name is required!";
	}

}


if (register) {
	register.addEventListener('click', (e) => {
		e.preventDefault();
		register_data();
	})
}
if (login) {
	login.addEventListener('click', (e) => {
		e.preventDefault();
		login_data();
	})
}
if (submitMessage) {
	submitMessage.addEventListener('click', (e) => {
		e.preventDefault();
		contact_data();
	});
}