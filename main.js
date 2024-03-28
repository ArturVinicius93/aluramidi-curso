function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);

    if(elemento === null){
       //alert('Elemento não encontrado.'); //
       console.log('Elemento não encontrado.');
    } else if(elemento && elemento.localName === 'audio'){
        elemento.play();
    } else {
        console.log('Elemento não é correto.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// let cont = 0;

// while(cont < listaDeTeclas.length){
    
//     const tecla = listaDeTeclas[cont];
//     const instrumento = listaDeTeclas[cont].classList[1];
//     const idAudio = `#som_${instrumento}`;

//     listaDeTeclas[cont].onclick = function(){
//         tocaSom(idAudio);
//     };
//     cont += 1;
// }

for(let cont = 0; cont < listaDeTeclas.length; cont++){
    const tecla = listaDeTeclas[cont];
    const instrumento = listaDeTeclas[cont].classList[1];
    const idAudio = `#som_${instrumento}`;

    listaDeTeclas[cont].onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
