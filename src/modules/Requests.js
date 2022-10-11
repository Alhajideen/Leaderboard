import Scores from './Scores.js';

class Requests {
  static sendData() {}
  static async getData() {
    const res = await axios.get(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kvZLvGVUqYif8ehySShj/scores/'
    );
    const data = await res.data.result;
    const tbody = document.querySelector('.tbody');
    tbody.innerHTML = Scores.render(data);
  }
}
export default Requests;
