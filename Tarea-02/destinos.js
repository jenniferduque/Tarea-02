import {data} from './datos.js'

export function destinos(continentes, cuidades) {

cuidades.innerHTML = '';

// 
const resultado = data.filter(destino => destino.continente==continentes);

console.log(resultado);
resultado.forEach((elemento)=> {        
    const hado = document.createElement('div') //Creamos un elemento div
    hado.classList.add('poporo') // Al elemento que acabamos de crear le agregador una clase llamada movie
    //Inyectamos HTML al DIV que acabamos de crear
    hado.innerHTML = `
        <img class="panorama" src="${elemento.image}" alt="${elemento.destino}">
        <div class="ciudad-info">
            <h3>${elemento.destino}</h3>
            
        </div>
        <div class="overview">
        <a href="./detalle.html"><button type="button" id="${elemento.index}" class="infoCiudad">Detalles</button></a>
            <!--<h3>descripción</h3>
            ${elemento.descripcion}-->
        </div>
        `
            cuidades.appendChild(hado)
        
    })
}


