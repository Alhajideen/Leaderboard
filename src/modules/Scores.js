export default class Dom {
  static render(data) {
    let tdata = '';
    const sorted = data.sort((a, b) => {
      return b.score - a.score;
    });

    sorted.forEach((elem, index) => {
      tdata += `
   <tr>
   <td>${index + 1}</td>
                  <td>${elem.user}</td>
                  <td>${elem.score}</td>
                </tr>
  `;
    });

    return tdata;
  }
}
