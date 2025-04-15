function CalcularPuntuacionGeneral() {
    let totalpuntos = 0;

    function ComentarioObtenido(puntos) {
        switch (puntos) {
            case 1: return "Peor que Dragon Ball Evolution";
            case 2: return "Hay peores";
            case 3: return "Pochoclera";
            case 4: return "Qué buena película";
            case 5: return "Una obra maestra";
            default: return "No es tan difícil, es de 1 a 5";
        }
    }

    for (let i = 1; i <= 4; i++) {
        let nombre = prompt("¿Cuál es tu nombre?");
        let puntos;

        do {
            let entrada = prompt(nombre + ", ¿qué te pareció Terrifier 3? (1 a 5)");
            puntos = parseInt(entrada);

            if (isNaN(puntos) || puntos < 1 || puntos > 5) {
                alert("No es tan difícil, es de 1 a 5");
            }

        } while (isNaN(puntos) || puntos < 1 || puntos > 5);

        totalpuntos += puntos;
        alert(nombre + " dice: " + ComentarioObtenido(puntos));
    }

    let promedio = totalpuntos / 4;
    alert("La puntuación general de 'Terrifier 3' es: " + promedio.toFixed(1) + " estrellas");

    if (promedio < 2) {
        alert("La película es horrible");
    } else if (promedio < 3.5) {
        alert("La película pudo haber sido peor");
    } else if (promedio < 4.5) {
        alert("La película es bastante buena");
    } else {
        alert("¡Qué excelente película!");
    }
}

CalcularPuntuacionGeneral();
