const bubbleContainer = document.querySelector("#bubble-sort-container");

let bubbleArray = [1, 5, 2, 4, 3, 6, 8];
let time = 3000;

// define tempo da animação
function setTime() {
    time = prompt("Digite o tempo de animação: ");
    Number(time);
}

// adiciona novo elemento
function addItem(array) {
    let value = prompt("Digite um valor: ");
    array.push(Number(value)); // converte para número
    renderArray(array);
}

// exibe array no estado atual
function renderArray(array) {
    bubbleContainer.innerHTML = "";
    array.forEach((value, index) => {
        bubbleContainer.innerHTML += `<div id='b-${index}' class='arrayItem'>${value}</div>`;
    });
}

// ordena array usando bubble sort
async function bubbleSort(array, timing) {
    let i, fim, aux;

    document.querySelector("#t").innerHTML = timing + "ms";

    for (fim = array.length - 1; fim > 0; fim--) {
        for (i = 0; i < fim; i++) {

            // comparando
            renderArray(array);
            document.querySelector("#i").innerHTML = "i = " + i;
            document.querySelector("#fim").innerHTML = "fim = " + fim;
            document.querySelector("#aux").innerHTML = "aux = " + aux;
            document.querySelector(`#b-${i}`).classList.add("comparing")
            document.querySelector(`#b-${i + 1}`).classList.add("comparing")
            await new Promise(resolve => setTimeout(resolve, timing));

            if (array[i] > array[i + 1]) {

                // troca vai acontecer
                document.querySelector(`#b-${i}`).classList.add("major")
                document.querySelector(`#b-${i + 1}`).classList.add("minor")
                await new Promise(resolve => setTimeout(resolve, timing));

                // troca de posições
                aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;

                // renderiza array
                renderArray(array);
                //troca feita
                document.querySelector(`#b-${i}`).classList.add("sorted")
                document.querySelector(`#b-${i + 1}`).classList.add("sorted")
                document.querySelector("#i").innerHTML = "i = " + i;
                document.querySelector("#fim").innerHTML = "fim = " + fim;
                document.querySelector("#aux").innerHTML = "aux = " + aux;
                await new Promise(resolve => setTimeout(resolve, timing));

            } else {
                //troca não feita
                document.querySelector(`#b-${i}`).classList.add("minor")
                document.querySelector(`#b-${i + 1}`).classList.add("major")
                await new Promise(resolve => setTimeout(resolve, timing));
            }

        }
    }
}

