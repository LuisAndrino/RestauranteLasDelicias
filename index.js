const desayuno = document.querySelector(".desayuno")
const almuerzo = document.querySelector(".almuerzo")
const cena = document.querySelector(".cena")
const total = document.querySelector(".total")
const sumaTotal = document.createElement("span");

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
    precio: 100,
    cantidad: 1,
    total: function(){return this.cantidad * this.precio},
}, {
    nombre: plato2.querySelector("p").textContent,
    img: plato2.querySelector("img").src,
    precio: 200,
    cantidad: 1,
    total: function(){return this.cantidad * this.precio},
}, {
    nombre: plato3.querySelector("p").textContent,
    img: plato3.querySelector("img").src,
    precio: 300,
    cantidad: 1,
    total: function(){return this.cantidad * this.precio},
}, {
    nombre: plato4.querySelector("p").textContent,
    img: plato4.querySelector("img").src,
    precio: 400,
    cantidad: 1,
    total: function(){return this.cantidad * this.precio},
}, {
    nombre: plato5.querySelector("p").textContent,
    img: plato5.querySelector("img").src,
    precio: 500,
    cantidad: 1,
    total: function(){return this.cantidad * this.precio},
}, {
    nombre: plato6.querySelector("p").textContent,
    img: plato6.querySelector("img").src,
    precio: 600,
    cantidad: 1,
    total: function(){return this.cantidad * this.precio},
}, {
    nombre: plato7.querySelector("p").textContent,
    img: plato7.querySelector("img").src,
    precio: 700,
    cantidad: 1,
    total: function(){return this.cantidad * this.precio},
}, {
    nombre: plato8.querySelector("p").textContent,
    img: plato8.querySelector("img").src,
    precio: 800,
    cantidad: 1,
    total: function(){return this.cantidad * this.precio},
  }, {
    nombre: plato9.querySelector("p").textContent,
    img: plato9.querySelector("img").src,
    precio: 900,
    cantidad: 1,
    total: function(){return this.cantidad * this.precio},
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


const carrito = document.querySelector(".carrito-img")
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
let carritoCantidad = document.querySelector(".carrito-cantidad");
let carTotal;

const getTotal = JSON.parse(localStorage.getItem("platos"));
let carritoTotal = 0;
if(getTotal){
  for(t of getTotal){
      carritoTotal = carritoTotal + t.precio * t.cantidad;
  }
}


function agregarPlatoAlCarrito(plato) {
  
  
  function actualizarContadorCarrito() {
    carTotal = carritoClick.childElementCount - 1;
    carritoCantidad.textContent = carTotal;
  }
  
  function actualizarTotal() {

      const pTotal = document.querySelector(".vacio");
      if(carritoClick.childElementCount > 1){
        pTotal.textContent = `Total: Q${carritoTotal}`;
      } else {
        pTotal.textContent = "Carrito vacio";
      }
    }

    const div = document.createElement("div");
    div.classList.add("carrito-menu");
    const img = document.createElement("img");
    img.src = plato.img;
    const p = document.createElement("p");
    p.textContent = plato.nombre;
    const div2 = document.createElement("div");
    div2.classList.add("menu-cantidad");
    const btn1 = document.createElement("button");
    btn1.classList.add("btn-menos");
    btn1.textContent = "-";
    const span = document.createElement("span");
    span.classList.add("cantidad");
    span.textContent = plato.cantidad;
    const btn2 = document.createElement("button");
    btn2.classList.add("btn-mas");
    btn2.textContent = "+";
    const p2 = document.createElement("p");
    p2.textContent = `Precio: `;
    const precio = document.createElement("span");
    precio.textContent = plato.precio * plato.cantidad;
    precio.classList.add("precio");
    
    const btnEliminar = document.createElement("img");
    btnEliminar.src = "icons/close.png";
    btnEliminar.id = "btn-eliminar"
    
    btn1.addEventListener("click", () => {
      if (span.textContent >= 1) {
        plato.cantidad = plato.cantidad - 1;
        span.textContent = plato.cantidad;
        precio.textContent = plato.cantidad * plato.precio;
        carritoTotal = carritoTotal - plato.precio;
        console.log(plato)
        agregarPlatoAlLocalStorage(plato);
        actualizarTotal();
      }
    });
    
    
    btn2.addEventListener("click", () => {
      ++plato.cantidad;
      span.textContent = plato.cantidad;
      precio.textContent = plato.cantidad * plato.precio;
      carritoTotal = carritoTotal + plato.precio;
      console.log(plato)
      agregarPlatoAlLocalStorage(plato)
      actualizarTotal();
    });

    div2.append(btn1, span, btn2, p2, precio);
    div.append(btnEliminar, img, p, div2);
    div.classList.add("local");
    
    
    btnEliminar.addEventListener("click", () => {
      div.remove();
      carritoTotal = carritoTotal - plato.precio * span.textContent;
      actualizarContadorCarrito();
      eliminarPlatoDelLocalStorage(plato);
      actualizarTotal();
    });
    
    if (carritoClick.innerHTML.includes(plato.nombre)) {
      alert("Este plato ya se encuentra en el carrito");
    } else {
      carritoClick.appendChild(div);
      carritoTotal = carritoTotal + plato.precio;
      actualizarContadorCarrito();
      agregarPlatoAlLocalStorage(plato);
      actualizarTotal();
    }
    
  //Agregar plato al local storage  
  function agregarPlatoAlLocalStorage(plato) {
  let platosLocalStorage = JSON.parse(localStorage.getItem("platos"));

  // Buscar si el plato ya existe en el arreglo
  const index = platosLocalStorage.findIndex((p) => p.nombre === plato.nombre);

  if (index !== -1) {
    // Si el plato ya existe, reemplazarlo por el nuevo plato
    platosLocalStorage[index] = plato;
  } else {
    // Si el plato no existe, agregarlo al arreglo
    platosLocalStorage.push(plato);
  }

  localStorage.setItem("platos", JSON.stringify(platosLocalStorage));
}


  //Eliminar plato del local storage
  function eliminarPlatoDelLocalStorage(plato) {
    let platosLocalStorage = JSON.parse(localStorage.getItem("platos"));

    // Buscar si el plato ya existe en el arreglo
    const index = platosLocalStorage.findIndex((p) => p.nombre === plato.nombre);

    if (index !== -1) {
      // Si el plato ya existe, reemplazarlo por el nuevo plato
      platosLocalStorage.splice(index, 1);
      localStorage.setItem("platos", JSON.stringify(platosLocalStorage));
    } 
}


}
  
const platosLocalStorage = [];
const getLocalStorage = JSON.parse(localStorage.getItem("platos"));
if(getLocalStorage){
  for (local of getLocalStorage){
    agregarPlatoAlCarrito(local);
}
}

console.log(getLocalStorage);


for (let i = 1; i <= 9; i++) {
  const btnAgregar = document.querySelector(`.btn-agregar${i}`);
  btnAgregar.addEventListener("click", () => {
    agregarPlatoAlCarrito(platos[i-1]);
  });
}


//TODO: Arreglar el TOTAL del carrito
//Diseño responsive
