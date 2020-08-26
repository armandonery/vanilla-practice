document.querySelector('#enviar').addEventListener('click', () => {
    const dato = document.querySelector('#dato').value;
    let r = 1;
    for(let i = dato; i>0; i--){
        r *= i;
    }
    document.querySelector('.resultado').innerHTML = r;
});