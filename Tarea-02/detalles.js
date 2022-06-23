const destino = document.querySelector('#destino');
const salvame = document.querySelector('#perorata');

//document.body.textContent = localStorage.getItem('elemto');
document.getElementById("imagen").setAttribute("src",localStorage.getItem('imgSitio'));
destino.innerHTML=localStorage.getItem('desti');
salvame.innerHTML=localStorage.getItem('descrip');

