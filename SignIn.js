function validateForm() {
    const fullName = document.getElementById('fullname').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');
  
    errorMessage.innerHTML = '';
  
    // Full Name validation (no numerics)
    if (/\d/.test(fullName)) {
      errorMessage.innerHTML += 'Full Name should not contain numbers.<br>';
    }
  
    // Password validation (must contain at least one uppercase letter and one number)
    if (!/[A-Z]/.test(password) || !/\d/.test(password)) {
      errorMessage.innerHTML += 'Password must contain at least one uppercase letter and one number.<br>';
    }
  
    // Confirm Password validation
    if (password !== confirmPassword) {
      errorMessage.innerHTML += 'Confirm Password does not match the Password.<br>';
    }
  
    // Email validation (must end with @gmail.com)
    if (!/^[\w-\.]+@gmail\.com$/.test(email)) {
      errorMessage.innerHTML += 'Email must end with @gmail.com.<br>';
    }
  
    // If there are any error messages, prevent form submission
    if (errorMessage.innerHTML !== '') {
      return false;
    }
  
    return true;
  }
  