const botones = document.querySelectorAll(".filtro");
const cards = document.querySelectorAll(".card");

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {

        botones.forEach(function(b) {
            b.classList.remove("activo");
        });
        boton.classList.add("activo");

        const categoria = boton.getAttribute("data-categoria");

        cards.forEach(function(card) {
            if (categoria === "todos" || card.getAttribute("data-categoria") === categoria) {
                card.classList.remove("oculta");
            } else {
                card.classList.add("oculta");
            }
        });

    });
});