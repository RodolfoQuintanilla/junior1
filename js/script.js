const flechas = document.querySelector("#menu");
const recuadro = document.querySelector("#merr")
let variable = false;

inicio();

function inicio() {
   flechas.addEventListener('mouseout', salir);
   flechas.addEventListener('mouseenter', entrar);
}

function salir(x) {
   res(x.bubbles)
}

function entrar(x) {

   return variable = res(x.bubbles)
}

function res(x) {
   if (x === false) {
      console.log('entrar');
      recuadro.classList.add('merr')
      return
   } else {
      console.log(' salir');
      recuadro.classList.remove('merr')
      return
   }
}