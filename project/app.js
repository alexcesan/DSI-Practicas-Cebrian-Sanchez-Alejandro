/* -------------------------- */
/* -------------------------- */
/*  NO EVALUAR ESTE ARCHIVO   */
/* AÑADIDO SOLO POR DIVERSIÓN */
/* -------------------------- */
/* -------------------------- */

/* --------------------- */
/* BOTÓN - VOLVER ARRIBA */
/* --------------------- */
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")
const scrollContainer = () => { return document.documentElement || document.body; };
const goToTop = () => { document.body.scrollIntoView({behavior: "smooth",}); };

document.addEventListener("scroll", () => {
    
  if (scrollContainer().scrollTop > showOnPx) { backToTopButton.classList.remove("hidden") }
  else { backToTopButton.classList.add("hidden") }

})

backToTopButton.addEventListener("click", goToTop)

/* ----------------- */
/* BARRA DE PROGRESO */
/* ----------------- */
const pageProgressBar = document.querySelector(".progress-bar")

document.addEventListener("scroll", () => {
  
  const scrolledPercentage = (scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100;
  pageProgressBar.style.width = `${scrolledPercentage}%`
  
  if (scrollContainer().scrollTop > showOnPx) { backToTopButton.classList.remove("hidden"); }
  else { backToTopButton.classList.add("hidden"); }

});

/* -------------------------------------- */
/* IR UNOS PÍXELES MÁS ABAJO CON HTML REF */
/* -------------------------------------- */
function offsetAnchor() {
  if(location.hash.length !== 0) { window.scrollTo(window.scrollX, window.scrollY - 62); }
}

window.addEventListener("hashchange", offsetAnchor);
window.setTimeout(offsetAnchor, 1);