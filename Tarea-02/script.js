//Importamos el modulo
import {destinos} from './destinos.js'
import {data} from './datos.js'

//  cacturando botones
let botonAfrica = document.querySelector('#Africa');
let botonAmerica = document.querySelector('#America');
let botonAsia = document.querySelector('#Asia');
let botonEuropa = document.querySelector('#Europa');
let botonOceania = document.querySelector('#Oceania');
let botonInfo = document.querySelectorAll('.infoCiudad');

//Capturamos en donde se va inyectar los destinos
const cuidades = document.querySelector('#cuidades');

 // Eventos
 botonAfrica.addEventListener('click',function(){
     destinos("Africa", cuidades);
         document.addEventListener('click', e =>{
        
        if(e.target.classList.contains('infoCiudad')){
            
            let datosSitio = data.find( element => element.index == e.target.id );
            let {continente, image, destino, descripcion} = datosSitio;
            localStorage.setItem('elemto',continente);
            localStorage.setItem('imgSitio',image);
            localStorage.setItem('desti',destino);
            localStorage.setItem('descrip',descripcion);
        }
    }
    );
});

 botonAmerica.addEventListener('click',function(){
     destinos("America", cuidades)
    document.addEventListener('click', e =>{ 
        if(e.target.classList.contains('infoCiudad')){
            
            let datosSitio = data.find( element => element.index == e.target.id );
            let {continente, image, destino, descripcion} = datosSitio;
            localStorage.setItem('elemto',continente);
            localStorage.setItem('imgSitio',image);
            localStorage.setItem('desti',destino);
            localStorage.setItem('descrip',descripcion);
        }
    }       
    );
});

 botonAsia.addEventListener('click', function(){
     destinos("Asia", cuidades)
    document.addEventListener('click', e =>{ 
        if(e.target.classList.contains('infoCiudad')){
            
            let datosSitio = data.find( element => element.index == e.target.id );
            let {continente, image, destino, descripcion} = datosSitio;
            localStorage.setItem('elemto',continente);
            localStorage.setItem('imgSitio',image);
            localStorage.setItem('desti',destino);
            localStorage.setItem('descrip',descripcion);
        }
    }       
    );
});

 botonEuropa.addEventListener('click',function(){
     destinos("Europa", cuidades)
     document.addEventListener('click', e =>{ 
        if(e.target.classList.contains('infoCiudad')){
            
            let datosSitio = data.find( element => element.index == e.target.id );
            let {continente, image, destino, descripcion} = datosSitio;
            localStorage.setItem('elemto',continente);
            localStorage.setItem('imgSitio',image);
            localStorage.setItem('desti',destino);
            localStorage.setItem('descrip',descripcion);
        }
    }       
    );
});

 botonOceania.addEventListener('click', function(){
     destinos("Oceania", cuidades)
     document.addEventListener('click', e =>{ 
        if(e.target.classList.contains('infoCiudad')){
            
            let datosSitio = data.find( element => element.index == e.target.id );
            let {continente, image, destino, descripcion} = datosSitio;
            localStorage.setItem('elemto',continente);
            localStorage.setItem('imgSitio',image);
            localStorage.setItem('desti',destino);
            localStorage.setItem('descrip',descripcion);
        }
    }       
    );
});
 
 










