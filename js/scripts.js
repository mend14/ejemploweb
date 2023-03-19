//SCROoLL LIBRERIA
AOS.init();
//navbar init
document.addEventListener('DOMContenLoaded', function(){
var elems = document.querySelectorAll('.sidenav');
var instances= M.Sidenav.init(elems,options);
console.log(instances)
});
//carousel
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });
  
  var options={
     indicador:true,
     numVisible:5,
     padding:15 
  }

  var lightbox = new SimpleLightbox('.gallery a', { /* options */ });