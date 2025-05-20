function saludar(){
    const nombre = prompt("como te llamas");
    const mensaje = `hola, ${nombre}  Bienvenido al laboratorio de JavaScript`;
    document.getElementById("resultado").innerText=mensaje;
}

function sumar(){
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const suma = n1 + n2;

    document.getElementById("resultadoSuma").innerText= `Resultado = ${suma}`;
}

function tabla(){
    const n1 = parseInt(document.getElementById("tablaNum").value);
    const lista = document.getElementById("resultadoTabla")
    lista.innerHTML = " ";
    for (let i = 1; i<=10; i++){
        const li = document.createElement("l1");
        li.textContent = `${n1} X ${i} = ${n1 * i}`;
        lista.appendChild(li);
        
    }
}