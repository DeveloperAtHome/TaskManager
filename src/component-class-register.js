import LoginComponent from './components/login-component/login-component.js';
import RegistrationComponent from './components/registration-component/registration-component.js';
import DashboardComponent from './components/dashboard-component/dashboard-component.js';


const classRegister = {
  'login-component': LoginComponent,
  'registration-component': RegistrationComponent,
  'dashboard-component': DashboardComponent
}

export {
  classRegister,
  LoginComponent,
  RegistrationComponent,
  DashboardComponent
};