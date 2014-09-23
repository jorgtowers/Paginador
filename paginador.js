function mostrarPagina(link,nombrePagina) {
    var paginas = document.querySelectorAll("div.pagina");
    var pagina = document.getElementById(nombrePagina);
    var link = document.getElementById(link);
    var links = document.querySelectorAll("a.numeroPagina");
    if (links != null) {
        for (i = 0; i < links.length; i++) {
            links[i].className = 'numeroPagina';
        };
    };        
    if (paginas != null) {
        for (i = 0; i < paginas.length; i++) {
            paginas[i].style.display = 'none';
        };
    };
    if (pagina != null)
        pagina.style.display = 'block';
    if(link!=null)
        link.className = "numeroPagina activa";
};

function paginador(nombreContenedor,claseItems) {
    var contenedor = document.getElementById(nombreContenedor);
    var notas = document.querySelectorAll(claseItems);
    var paginador = document.getElementById("paginador");
    if (notas != null) {
        var itemsPorPagina = 8;
        var inicioPagina = 0;
        var finPagina = itemsPorPagina;
        var totalItems = notas.length;
        var paginas = Math.ceil(totalItems / itemsPorPagina);
        var oldDivs = [];
        oldDivs.push.apply(oldDivs, notas);
        for (a = 0; a < paginas; a++) {
            var div = document.createElement("div");
            div.id = "pagina" + a;
            div.className = "pagina";
            if (a == 0)
                div.style.display = 'block';
            else
                div.style.display = 'none';
            contenedor.appendChild(div);
        };
        for (b = 0; b < paginas; b++) {
            var pagina = null;
            var temp = new Array();
            pagina = document.getElementById("pagina" + b);                
            temp = oldDivs.slice(inicioPagina, finPagina);
            for (i = 0; i < temp.length; i++) {
                pagina.appendChild(temp[i]);
            };
            finPagina = itemsPorPagina * (b + 2);
            inicioPagina = finPagina - itemsPorPagina;
        };
        for (c = 0; c < paginas; c++) {
            var elemento = document.createElement("a");
            elemento.id = "link" + c;
            elemento.href = "javascript:mostrarPagina('link" + c + "','pagina" + c + "')";
            elemento.innerHTML = c + 1;
            if (c == 0)
                elemento.className = "numeroPagina activa";
            else
                elemento.className = "numeroPagina";
            paginador.appendChild(elemento);
        };
    };
};

paginador("nombre_contedor", "clase_elementos_a_paginar");
