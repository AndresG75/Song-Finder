import * as UI from './interfaz.js';

class API{
    constructor(cancion,artista){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarAPI(){
        fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            console.log(resultado);
            if(resultado){
                const { lyrics} = resultado;
                console.log(lyrics);
                UI.resultado.textContent = lyrics;
                UI.headingResultado.textContent = `La letra de la canción ${this.cancion}`;
            } else {
                // La canción no existe
                console.log("Nada");
                UI.mensajes.innerHTML = 'La canción No existe, prueba con otra búsqueda';
                UI.mensajes.classList.add('error');
                setTimeout(() => {
                     UI.mensajes.innerHTML = '';
                     UI.mensajes.classList.remove('error');
                     UI.formulario.reset();
                }, 3000);
           }
      }).catch(error => console.log(error))

        

    }
}

export default API;