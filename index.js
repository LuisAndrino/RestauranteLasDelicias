const desayuno = document.querySelector(".desayuno")
const almuerzo = document.querySelector(".almuerzo")
const cena = document.querySelector(".cena")


//Traer los platos

const plato1 = document.querySelector(".plato1")
const plato2 = document.querySelector(".plato2")
const plato3 = document.querySelector(".plato3")
const plato4 = document.querySelector(".plato4")
const plato5 = document.querySelector(".plato5")
const plato6 = document.querySelector(".plato6")
const plato7 = document.querySelector(".plato7")
const plato8 = document.querySelector(".plato8")
const plato9 = document.querySelector(".plato9")

const platos = [{
    nombre: plato1.querySelector("p").textContent,
    img: plato1.querySelector("img").src,
}, {
    nombre: plato2.querySelector("p").textContent,
    img: plato2.querySelector("img").src,
}, {
    nombre: plato3.querySelector("p").textContent,
    img: plato3.querySelector("img").src,
}, {
    nombre: plato4.querySelector("p").textContent,
    img: plato4.querySelector("img").src,
}, {
    nombre: plato5.querySelector("p").textContent,
    img: plato5.querySelector("img").src,
}, {
    nombre: plato6.querySelector("p").textContent,
    img: plato6.querySelector("img").src,
}, {
    nombre: plato7.querySelector("p").textContent,
    img: plato7.querySelector("img").src,
}, {
    nombre: plato8.querySelector("p").textContent,
    img: plato8.querySelector("img").src,
}, {
    nombre: plato9.querySelector("p").textContent,
    img: plato9.querySelector("img").src,
}
]



//Menu

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

//Carrito de compras


const carrito = document.querySelector(".carrito-compras")
const carritoClick = document.querySelector(".carrito-click")

carrito.addEventListener("click", () => {
    carritoClick.classList.toggle("ocultar")
})


const btnAgregar1 = document.querySelector(".btn-agregar1")
const btnAgregar2 = document.querySelector(".btn-agregar2")
const btnAgregar3 = document.querySelector(".btn-agregar3")
const btnAgregar4 = document.querySelector(".btn-agregar4")
const btnAgregar5 = document.querySelector(".btn-agregar5")
const btnAgregar6 = document.querySelector(".btn-agregar6")
const btnAgregar7 = document.querySelector(".btn-agregar7")
const btnAgregar8 = document.querySelector(".btn-agregar8")
const btnAgregar9 = document.querySelector(".btn-agregar9")

btnAgregar1.addEventListener("click", () => {
    const cost = 100

    const div = document.createElement("div")
    div.classList.add("carrito-menu")
    const img = document.createElement("img")
    img.src = platos[0].img
    const p = document.createElement("p")
    p.textContent = platos[0].nombre
    const div2 = document.createElement("div")
    div2.classList.add("menu-cantidad")
    const btn1 = document.createElement("button")
    btn1.classList.add("btn-menos")
    btn1.textContent = "-"
    const span = document.createElement("span")
    span.classList.add("cantidad")
    span.textContent = 1
    const btn2 = document.createElement("button")
    btn2.classList.add("btn-mas")
    btn2.textContent = "+"
    const p2 = document.createElement("p")
    p2.textContent = `Precio: ${cost}`

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "Eliminar"

    btn1.addEventListener("click", (event) => {
        if(span.textContent >= 1){
            span.textContent = Number(span.textContent) - 1
            p2.textContent = `Precio: ${cost * span.textContent}`
        }
        event.stopPropagation()
    })

    btn2.addEventListener("click", (event) => {
        span.textContent = Number(span.textContent) + 1
        event.stopPropagation()
        p2.textContent = `Precio: ${cost * span.textContent}`
    })

    
    div2.append(btn1, span, btn2, p2)
    div.append(btnEliminar,img, p, div2)  
    
    btnEliminar.addEventListener("click", (event) => {
        div.remove()
        event.stopPropagation()
    })
    
    if(carritoClick.innerHTML.includes(platos[0].nombre)){
        alert("Este plato ya se encuentra en el carrito")
    } else {
        carritoClick.appendChild(div)
    }
})

btnAgregar2.addEventListener("click", () => {
    const cost = 300

    const div = document.createElement("div")
    div.classList.add("carrito-menu")
    const img = document.createElement("img")
    img.src = platos[1].img
    const p = document.createElement("p")
    p.textContent = platos[1].nombre
    const div2 = document.createElement("div")
    div2.classList.add("menu-cantidad")
    const btn1 = document.createElement("button")
    btn1.classList.add("btn-menos")
    btn1.textContent = "-"
    const span = document.createElement("span")
    span.classList.add("cantidad")
    span.textContent = 1
    const btn2 = document.createElement("button")
    btn2.classList.add("btn-mas")
    btn2.textContent = "+"
    const p2 = document.createElement("p")
    p2.textContent = `Precio: ${cost}`

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "Eliminar"

    btn1.addEventListener("click", (event) => {
        if(span.textContent >= 1){
            span.textContent = Number(span.textContent) - 1
            p2.textContent = `Precio: ${cost * span.textContent}`
        }
        event.stopPropagation()
    })

    btn2.addEventListener("click", (event) => {
        span.textContent = Number(span.textContent) + 1
        event.stopPropagation()
        p2.textContent = `Precio: ${cost * span.textContent}`
    })

    
    div2.append(btn1, span, btn2, p2)
    div.append(btnEliminar,img, p, div2)  
    
    btnEliminar.addEventListener("click", (event) => {
        div.remove()
        event.stopPropagation()
    })
    
    if(carritoClick.innerHTML.includes(platos[1].nombre)){
        alert("Este plato ya se encuentra en el carrito")
    } else {
        carritoClick.appendChild(div)
    }
}
)

btnAgregar3.addEventListener("click", () => {
    const cost = 50

    const div = document.createElement("div")
    div.classList.add("carrito-menu")
    const img = document.createElement("img")
    img.src = platos[2].img
    const p = document.createElement("p")
    p.textContent = platos[2].nombre
    const div2 = document.createElement("div")
    div2.classList.add("menu-cantidad")
    const btn1 = document.createElement("button")
    btn1.classList.add("btn-menos")
    btn1.textContent = "-"
    const span = document.createElement("span")
    span.classList.add("cantidad")
    span.textContent = 1
    const btn2 = document.createElement("button")
    btn2.classList.add("btn-mas")
    btn2.textContent = "+"
    const p2 = document.createElement("p")
    p2.textContent = `Precio: ${cost}`

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "Eliminar"

    btn1.addEventListener("click", (event) => {
        if(span.textContent >= 1){
            span.textContent = Number(span.textContent) - 1
            p2.textContent = `Precio: ${cost * span.textContent}`
        }
        event.stopPropagation()
    })

    btn2.addEventListener("click", (event) => {
        span.textContent = Number(span.textContent) + 1
        event.stopPropagation()
        p2.textContent = `Precio: ${cost * span.textContent}`
    })

    
    div2.append(btn1, span, btn2, p2)
    div.append(btnEliminar,img, p, div2)  
    
    btnEliminar.addEventListener("click", (event) => {
        div.remove()
        event.stopPropagation()
    })
    
    if(carritoClick.innerHTML.includes(platos[2].nombre)){
        alert("Este plato ya se encuentra en el carrito")
    } else {
        carritoClick.appendChild(div)
    }
}
)

btnAgregar4.addEventListener("click", () => {
    const cost = 75

    const div = document.createElement("div")
    div.classList.add("carrito-menu")
    const img = document.createElement("img")
    img.src = platos[3].img
    const p = document.createElement("p")
    p.textContent = platos[3].nombre
    const div2 = document.createElement("div")
    div2.classList.add("menu-cantidad")
    const btn1 = document.createElement("button")
    btn1.classList.add("btn-menos")
    btn1.textContent = "-"
    const span = document.createElement("span")
    span.classList.add("cantidad")
    span.textContent = 1
    const btn2 = document.createElement("button")
    btn2.classList.add("btn-mas")
    btn2.textContent = "+"
    const p2 = document.createElement("p")
    p2.textContent = `Precio: ${cost}`

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "Eliminar"

    btn1.addEventListener("click", (event) => {
        if(span.textContent >= 1){
            span.textContent = Number(span.textContent) - 1
            p2.textContent = `Precio: ${cost * span.textContent}`
        }
        event.stopPropagation()
    })

    btn2.addEventListener("click", (event) => {
        span.textContent = Number(span.textContent) + 1
        event.stopPropagation()
        p2.textContent = `Precio: ${cost * span.textContent}`
    })

    
    div2.append(btn1, span, btn2, p2)
    div.append(btnEliminar,img, p, div2)  
    
    btnEliminar.addEventListener("click", (event) => {
        div.remove()
        event.stopPropagation()
    })
    
    if(carritoClick.innerHTML.includes(platos[3].nombre)){
        alert("Este plato ya se encuentra en el carrito")
    } else {
        carritoClick.appendChild(div)
    }
}
)

btnAgregar5.addEventListener("click", () => {

    const cost = 58

    const div = document.createElement("div")
    div.classList.add("carrito-menu")
    const img = document.createElement("img")
    img.src = platos[4].img
    const p = document.createElement("p")
    p.textContent = platos[4].nombre
    const div2 = document.createElement("div")
    div2.classList.add("menu-cantidad")
    const btn1 = document.createElement("button")
    btn1.classList.add("btn-menos")
    btn1.textContent = "-"
    const span = document.createElement("span")
    span.classList.add("cantidad")
    span.textContent = 1
    const btn2 = document.createElement("button")
    btn2.classList.add("btn-mas")
    btn2.textContent = "+"
    const p2 = document.createElement("p")
    p2.textContent = `Precio: ${cost}`

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "Eliminar"

    btn1.addEventListener("click", (event) => {
        if(span.textContent >= 1){
            span.textContent = Number(span.textContent) - 1
            p2.textContent = `Precio: ${cost * span.textContent}`
        }
        event.stopPropagation()
    })

    btn2.addEventListener("click", (event) => {
        span.textContent = Number(span.textContent) + 1
        event.stopPropagation()
        p2.textContent = `Precio: ${cost * span.textContent}`
    })

    
    div2.append(btn1, span, btn2, p2)
    div.append(btnEliminar,img, p, div2)  
    
    btnEliminar.addEventListener("click", (event) => {
        div.remove()
        event.stopPropagation()
    })
    
    if(carritoClick.innerHTML.includes(platos[4].nombre)){
        alert("Este plato ya se encuentra en el carrito")
    } else {
        carritoClick.appendChild(div)
    }
}
)

btnAgregar6.addEventListener("click", () => {
    
        const cost = 900
    
        const div = document.createElement("div")
        div.classList.add("carrito-menu")
        const img = document.createElement("img")
        img.src = platos[5].img
        const p = document.createElement("p")
        p.textContent = platos[5].nombre
        const div2 = document.createElement("div")
        div2.classList.add("menu-cantidad")
        const btn1 = document.createElement("button")
        btn1.classList.add("btn-menos")
        btn1.textContent = "-"
        const span = document.createElement("span")
        span.classList.add("cantidad")
        span.textContent = 1
        const btn2 = document.createElement("button")
        btn2.classList.add("btn-mas")
        btn2.textContent = "+"
        const p2 = document.createElement("p")
        p2.textContent = `Precio: ${cost}`
    
        const btnEliminar = document.createElement("button")
        btnEliminar.textContent = "Eliminar"
    
        btn1.addEventListener("click", (event) => {
            if(span.textContent >= 1){
                span.textContent = Number(span.textContent) - 1
                p2.textContent = `Precio: ${cost * span.textContent}`
            }
            event.stopPropagation()
        })
    
        btn2.addEventListener("click", (event) => {
            span.textContent = Number(span.textContent) + 1
            event.stopPropagation()
            p2.textContent = `Precio: ${cost * span.textContent}`
        })
    
        
        div2.append(btn1, span, btn2, p2)
        div.append(btnEliminar,img, p, div2)  
        
        btnEliminar.addEventListener("click", (event) => {
            div.remove()
            event.stopPropagation()
        })
        
        if(carritoClick.innerHTML.includes(platos[5].nombre)){
            alert("Este plato ya se encuentra en el carrito")
        } else {
            carritoClick.appendChild(div)
        }
    }

)

btnAgregar7.addEventListener("click", () => {

    const cost = 21

    const div = document.createElement("div")
    div.classList.add("carrito-menu")
    const img = document.createElement("img")
    img.src = platos[6].img
    const p = document.createElement("p")
    p.textContent = platos[6].nombre
    const div2 = document.createElement("div")
    div2.classList.add("menu-cantidad")
    const btn1 = document.createElement("button")
    btn1.classList.add("btn-menos")
    btn1.textContent = "-"
    const span = document.createElement("span")
    span.classList.add("cantidad")
    span.textContent = 1
    const btn2 = document.createElement("button")
    btn2.classList.add("btn-mas")
    btn2.textContent = "+"
    const p2 = document.createElement("p")
    p2.textContent = `Precio: ${cost}`

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "Eliminar"

    btn1.addEventListener("click", (event) => {
        if(span.textContent >= 1){
            span.textContent = Number(span.textContent) - 1
            p2.textContent = `Precio: ${cost * span.textContent}`
        }
        event.stopPropagation()
    })

    btn2.addEventListener("click", (event) => {
        span.textContent = Number(span.textContent) + 1
        event.stopPropagation()
        p2.textContent = `Precio: ${cost * span.textContent}`
    })

    
    div2.append(btn1, span, btn2, p2)
    div.append(btnEliminar,img, p, div2)  
    
    btnEliminar.addEventListener("click", (event) => {
        div.remove()
        event.stopPropagation()
    })
    
    if(carritoClick.innerHTML.includes(platos[6].nombre)){
        alert("Este plato ya se encuentra en el carrito")
    } else {
        carritoClick.appendChild(div)
    }
}
)

btnAgregar8.addEventListener("click", () => {

    const cost = 2131

    const div = document.createElement("div")
    div.classList.add("carrito-menu")
    const img = document.createElement("img")
    img.src = platos[7].img
    const p = document.createElement("p")
    p.textContent = platos[7].nombre
    const div2 = document.createElement("div")
    div2.classList.add("menu-cantidad")
    const btn1 = document.createElement("button")
    btn1.classList.add("btn-menos")
    btn1.textContent = "-"
    const span = document.createElement("span")
    span.classList.add("cantidad")
    span.textContent = 1
    const btn2 = document.createElement("button")
    btn2.classList.add("btn-mas")
    btn2.textContent = "+"
    const p2 = document.createElement("p")
    p2.textContent = `Precio: ${cost}`

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "Eliminar"

    btn1.addEventListener("click", (event) => {
        if(span.textContent >= 1){
            span.textContent = Number(span.textContent) - 1
            p2.textContent = `Precio: ${cost * span.textContent}`
        }
        event.stopPropagation()
    })

    btn2.addEventListener("click", (event) => {
        span.textContent = Number(span.textContent) + 1
        event.stopPropagation()
        p2.textContent = `Precio: ${cost * span.textContent}`
    })

    
    div2.append(btn1, span, btn2, p2)
    div.append(btnEliminar,img, p, div2)  
    
    btnEliminar.addEventListener("click", (event) => {
        div.remove()
        event.stopPropagation()
    })
    
    if(carritoClick.innerHTML.includes(platos[7].nombre)){
        alert("Este plato ya se encuentra en el carrito")
    } else {
        carritoClick.appendChild(div)
    }
}
)

btnAgregar9.addEventListener("click", () => {

    const cost = 1021

    const div = document.createElement("div")
    div.classList.add("carrito-menu")
    const img = document.createElement("img")
    img.src = platos[8].img
    const p = document.createElement("p")
    p.textContent = platos[8].nombre
    const div2 = document.createElement("div")
    div2.classList.add("menu-cantidad")
    const btn1 = document.createElement("button")
    btn1.classList.add("btn-menos")
    btn1.textContent = "-"
    const span = document.createElement("span")
    span.classList.add("cantidad")
    span.textContent = 1
    const btn2 = document.createElement("button")
    btn2.classList.add("btn-mas")
    btn2.textContent = "+"
    const p2 = document.createElement("p")
    p2.textContent = `Precio: ${cost}`

    const btnEliminar = document.createElement("button")
    btnEliminar.textContent = "Eliminar"

    btn1.addEventListener("click", (event) => {
        if(span.textContent >= 1){
            span.textContent = Number(span.textContent) - 1
            p2.textContent = `Precio: ${cost * span.textContent}`
        }
        event.stopPropagation()
    })

    btn2.addEventListener("click", (event) => {
        span.textContent = Number(span.textContent) + 1
        event.stopPropagation()
        p2.textContent = `Precio: ${cost * span.textContent}`
    })

    
    div2.append(btn1, span, btn2, p2)
    div.append(btnEliminar,img, p, div2)  
    
    btnEliminar.addEventListener("click", (event) => {
        div.remove()
        event.stopPropagation()
    })
    
    if(carritoClick.innerHTML.includes(platos[8].nombre)){
        alert("Este plato ya se encuentra en el carrito")
    } else {
        carritoClick.appendChild(div)
    }
}
)