import './style.scss';
import Requests from './modules/Requests';

//Variables
const submitBtn = document.querySelector('.submit-btn');
const refresh = document.querySelector('.refresh-btn');

// Invoke functions
Requests.getData();

//Events
submitBtn.addEventListener('click', () => {
  Requests.sendData();
});

refresh.addEventListener('click', () => {
  Requests.getData();
});
