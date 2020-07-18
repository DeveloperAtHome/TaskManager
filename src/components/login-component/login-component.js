class LoginComponent {

  user = {
    username: undefined,
    password: undefined
  }

  constructor() {
    this.initApp();
  }

  initApp = () => {

    // get username and password input elements
    this.usernameInputElement = document.getElementById('login-username');
    this.passwordInputElement = document.getElementById('login-password');

    // get username and password validation text elements
    this.usernameValidationTextElement = document.getElementById('username-validation-text');
    this.passwordValidationTextElement = document.getElementById('password-validation-text');

    // add event handler for submit button
    document.getElementById('sign-in-btn').addEventListener('click', this.onSignIn);
    document.getElementById('registrationLink').addEventListener('click', this.navigateToRegistration);

  }

  navigateToRegistration = () => {
    window.router.navigate('/registration');
  }

  isValidForm = () => {

    const usernameRegex = /[a-z\d]{5,8}/i;
    const passwordRegex = /[a-z\d@\.-]{8,20}/i;

    let isValid = true;
    // if username is not entered or if username is not in correct format
    if (!this.user.username || !usernameRegex.test(this.user.username)) {
      this.usernameValidationTextElement.innerText = 'Username must be between 5-8 characters';
      isValid = false;
    } else {
      this.usernameValidationTextElement.innerText = '';
    }

    // if password is not entered or if password is not in correct format
    if (!this.user.password || !passwordRegex.test(this.user.password)) {
      this.passwordValidationTextElement.innerText = 'Password must be between 8-20 characters';
      isValid = false;
    } else {
      this.passwordValidationTextElement.innerText = '';
    }

    return isValid;
  }

  onSignIn = () => {

    this.user.username = this.usernameInputElement.value ? this.usernameInputElement.value.trim() : undefined;
    this.user.password = this.passwordInputElement.value ? this.passwordInputElement.value.trim() : undefined;

    const validationResult = this.isValidForm();

    if (validationResult) {
      if (this.login()) {
        this.goToDashboard();
      } else {
        console.log('Login failed.');
      }
    }

  }

  login = () => {
    // fake login, later here will be whole logic for login (set token in storage, etc ...). 
    return true;
  }

  goToDashboard = () => {
    window.router.navigate('/dashboard');
  }

}

export default LoginComponent;