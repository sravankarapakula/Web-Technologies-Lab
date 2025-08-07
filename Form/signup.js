document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const firstName = document.getElementById('firstName');
    const dob = document.getElementById('dob');
    const pincode = document.getElementById('pincode');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const showError = (input, message) => {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = message;
    };

    const clearError = (input) => {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = '';
    };

    const validateFirstName = () => {
        if (firstName.value.trim() === '') {
            showError(firstName, 'First name is required.');
            return false;
        }
        clearError(firstName);
        return true;
    };

    const validateAge = () => {
        if (!dob.value) {
            showError(dob, 'Date of birth is required.');
            return false;
        }
        const birthDate = new Date(dob.value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 7) {
            showError(dob, 'You must be at least 7 years old.');
            return false;
        }
        clearError(dob);
        return true;
    };
    
    const validatePincode = () => {
        const pincodeRegex = /^\d{6}$/;
        if (!pincodeRegex.test(pincode.value)) {
            showError(pincode, 'Pincode must be 6 digits.');
            return false;
        }
        clearError(pincode);
        return true;
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email address.');
            return false;
        }
        clearError(email);
        return true;
    };

    const validatePassword = () => {
        if (password.value.length < 6) {
            showError(password, 'Password must be at least 6 characters long.');
            return false;
        }
        clearError(password);
        return true;
    };

    const validateConfirmPassword = () => {
        if (confirmPassword.value !== password.value) {
            showError(confirmPassword, 'Passwords do not match.');
            return false;
        }
        if (confirmPassword.value === '') {
             showError(confirmPassword, 'Please confirm your password.');
             return false;
        }
        clearError(confirmPassword);
        return true;
    };

    firstName.addEventListener('input', validateFirstName);
    dob.addEventListener('input', validateAge);
    pincode.addEventListener('input', validatePincode);
    email.addEventListener('input', validateEmail);
    password.addEventListener('input', validatePassword);
    confirmPassword.addEventListener('input', validateConfirmPassword);
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const isFirstNameValid = validateFirstName();
        const isAgeValid = validateAge();
        const isPincodeValid = validatePincode();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();

        if (isFirstNameValid && isAgeValid && isPincodeValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            alert('Form submitted successfully!');
          
        } else {
            alert('Please correct the errors before submitting.');
        }
    });
});
