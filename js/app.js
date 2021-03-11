import API from './api.js';
import * as UI from './interfaz.js';

UI.formulario.addEventListener('submit',ValidarForm);

function ValidarForm(e){
    e.preventDefault();
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === ''){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        divMensaje.textContent = "Todos los campos son obligatorios";
        UI.mensajes.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.textContent='';
            divMensaje.classList.remove('error');
            UI.formulario.reset();
        }, 3000);

        return
    }

    //Consultar API

    const new_api = new API(cancion,artista);
    new_api.consultarAPI();
}