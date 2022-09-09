const flechas = document.querySelector("#menu");
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
      flechas.classList.add('xxx')
      return
   } else {
      console.log(' salir');

      return
   }
}