export default class Dom {
  static render(data) {
    let tdata = '';
    data.forEach((elem) => {
      tdata += `
   <tr>
                  <td>${elem.user}</td>
                  <td>${elem.score}</td>
                </tr>
  `;
    });

    return tdata;
  }
}
