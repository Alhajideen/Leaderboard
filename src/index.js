import './style.scss';
import Scores from './modules/Scores';

const tbody = document.querySelector('.tbody');
tbody.innerHTML = Scores.render();
