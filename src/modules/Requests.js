import Scores from './Scores.js';
import Data from './Data.js';

class Requests {
  static async sendData() {
    const name = document.querySelector('.name');
    const mark = document.querySelector('.score');
    const user = name.value;
    const scores = mark.value;
    const newData = new Data(user, scores);
    const data = await axios.post(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kvZLvGVUqYif8ehySShj/scores/',
      newData
    );
    console.log(data);
  }
  
  static async getData() {
    try {
      const res = await axios.get(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kvZLvGVUqYif8ehySShj/scores/'
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
