import Scores from './Scores.js';

class Requests {
  static sendData() {}
 static getData() {
    axios
      .get(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kvZLvGVUqYif8ehySShj/scores/'
      )
      .then((res) => {
        const data = res.data.result;
        console.log(data);
        const tbody = document.querySelector('.tbody');
        tbody.innerHTML = Scores.render(data);
      });
  }
}
export default Requests;
