const desayuno = document.querySelector(".desayuno")
const almuerzo = document.querySelector(".almuerzo")
const cena = document.querySelector(".cena")

const menuDesayuno = document.querySelector(".desayuno-menu")
const menuAlmuerzo = document.querySelector(".almuerzo-menu")
const menuCena = document.querySelector(".cena-menu")

desayuno.addEventListener("click", () => {
    if(menuAlmuerzo.classList.contains("ocultar") && menuCena.classList.contains("ocultar")){
        menuDesayuno.classList.remove("ocultar")
    } else {
        menuAlmuerzo.classList.add("ocultar")
        menuCena.classList.add("ocultar")
        menuDesayuno.classList.remove("ocultar")
    }


    desayuno.classList.add("change")
    almuerzo.classList.remove("change")
    cena.classList.remove("change")
})

almuerzo.addEventListener("click", () => {
    if(menuDesayuno.classList.contains("ocultar") && menuCena.classList.contains("ocultar")){
        menuAlmuerzo.classList.remove("ocultar")
    } else {
        menuDesayuno.classList.add("ocultar")
        menuCena.classList.add("ocultar")
        menuAlmuerzo.classList.remove("ocultar")
    }

    almuerzo.classList.add("change")
    desayuno.classList.remove("change")
    cena.classList.remove("change")
})

cena.addEventListener("click", () => {
    if(menuDesayuno.classList.contains("ocultar") && menuAlmuerzo.classList.contains("ocultar")){
        menuCena.classList.remove("ocultar")
    }   else {
        menuDesayuno.classList.add("ocultar")
        menuAlmuerzo.classList.add("ocultar")
        menuCena.classList.remove("ocultar")
    }

    cena.classList.add("change")
    desayuno.classList.remove("change")
    almuerzo.classList.remove("change")
})
