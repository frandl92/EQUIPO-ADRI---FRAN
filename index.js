const gameIzquierdo$$ = document.querySelector(".contenedor_izquierdo");


const pushIzquierdo = async () => {
    const gamesApexURL = "http://172.16.16.163:5081/apex";
    const gamesApexAPI =  await fetch(gamesApexURL);
    const gamesApexJSON =  await gamesApexAPI.json();
    console.log(gamesApexJSON);
    const mappedApex = gamesApexJSON.map((apex) => ( `
        <div>
            <p>${apex.personaje}</p>
            <p>${apex.rol}</p>
            <img src="${apex.img}" alt="imagen de ${apex.personaje}">
        </div>
    `
    ));
    gameIzquierdo$$.innerHTML = mappedApex;

}

pushIzquierdo();