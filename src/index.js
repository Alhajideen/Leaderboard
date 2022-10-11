import './style.scss';
import Requests from './modules/Requests';

//Variables
const submitBtn = document.querySelector('.submit-btn');

// Invoke functions
Requests.getData();

//Events
submitBtn.addEventListener('click', () => {
  Requests.sendData();
});
