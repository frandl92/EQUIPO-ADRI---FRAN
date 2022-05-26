
const ladoDerecho$$ = document.querySelector(".derecho")

const fran = async () => {
    const gamesLolURL = 'http://172.16.16.163:5081/leagueoflegend';
  const gamesLolAPI = await fetch (gamesLolURL);
  const gamesLolJSON = await gamesLolAPI.json();

  const mapLOL = gamesLolJSON.map((lol) => (` 
  <div>
 <p> ${lol.personaje}</p>
 <p>${lol.rol}</p>
 <img src = "${lol.img}">  
  </div>
  `
  ));
  ladoDerecho$$.innerHTML = mapLOL;
};

fran();




//   const mapLOL = (lol) => {
//     name: lol.personaje,
//     rol: lol.rol,
//     imag: lol.img
// }