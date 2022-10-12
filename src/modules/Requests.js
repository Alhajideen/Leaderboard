import Scores from './Scores.js';
import Data from './Data.js';

class Requests {
  static async sendData() {
    const sucess = document.querySelector('.sucess');
    const name = document.querySelector('.name');
    const mark = document.querySelector('.score');
    const user = name.value;
    const scores = mark.value;
    const newData = new Data(user, scores);
    try {
      const data = await axios.post(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FvsVo1cT2v4UzBAycmOv/scores/',
        newData
      );
      Requests.getData();
      sucess.style.color = 'green';
      sucess.style.padding = '10px';
      sucess.innerHTML = '✅Score added succesfully :)';
      setTimeout(() => {
        sucess.innerHTML = '';
        sucess.style.padding = '0';
      }, 3000);
    } catch (err) {
      console.error(err.message);
      sucess.style.color = 'red';
      sucess.style.padding = '10px';
      sucess.innerHTML = '❌Oops something is not right';
      setTimeout(() => {
        sucess.innerHTML = '';
        sucess.style.padding = '0';
      }, 3000);
    }
  }

  static async getData() {
    try {
      const res = await axios.get(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FvsVo1cT2v4UzBAycmOv/scores/'
      );
      const data = await res.data.result;
      const tbody = document.querySelector('.tbody');
      tbody.innerHTML = Scores.render(data);
    } catch (err) {
      console.error(err);
    }
  }
}
export default Requests;
