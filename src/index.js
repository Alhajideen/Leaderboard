import './style.scss';
import Scores from './modules/Scores.js';

const tbody = document.querySelector('.tbody');
tbody.innerHTML = Scores.render();
