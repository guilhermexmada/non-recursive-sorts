const bubbleContainer = document.querySelector("#bubble-sort-container"); // container do array
// parâmetros no HTML
const varI = document.querySelector("#i");
const varFim = document.querySelector("#fim");
const varAux = document.querySelector("#aux");
const varL = document.querySelector("#l");
const varT = document.querySelector("#t");

// array de exemplo
let bubbleArray = [3, 2, 1];
// delay de animação inicial
let delay = 3000;

// renderiza array
renderArray(bubbleArray);

// atualizando os parâmetros no HTML
function updateVars(array, i, fim, aux, time) {
    varT.innerHTML = "Delay: " + time + "ms";
    varL.innerHTML = "Tamanho: " + array.length;
    varI.innerHTML = "i = " + i;
    varFim.innerHTML = "fim = " + fim;
    varAux.innerHTML = "aux = " + aux;
}
 
// inicialiando os parâmetros no HTML
updateVars(bubbleArray, 0, bubbleArray.length - 1, "Undefined", delay)

// define delay da animação
function setTime() {
    let newDelay = prompt("Digite o tempo de animação: ");
    Number(newDelay);
    delay = newDelay;
    varT.innerHTML = "Delay: " + delay + "ms";
}

// adiciona novo elemento -> no final do array
function addItem(array) {
    let value = prompt("Digite um valor: ");
    array.push(Number(value)); // converte para número
    varL.innerHTML = array.length; // atualiza o tamanho do array
    renderArray(array);
}

// remove elemento -> o primeiro com o valor indicado
function removeItem(array) {
    let value = prompt("Digite um valor em: " + bubbleArray);
    let toRemove = array.indexOf(Number(value)); // procura a posição do valor indicado (a primeira que aparecer)
    if (toRemove > -1) { // se o valor foi encontrado
        array.splice(toRemove, 1); // remove esse elemento
    }
    varL.innerHTML = array.length; // atuaiza o tamanho do array
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
    for (fim = array.length - 1; fim > 0; fim--) {
        for (i = 0; i < fim; i++) {

            // comparando
            renderArray(array);
            updateVars(array, i, fim, aux, timing);
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
                updateVars(array, i, fim, aux, timing);
                await new Promise(resolve => setTimeout(resolve, timing));

            } else {
                //troca não feita
                document.querySelector(`#b-${i}`).classList.add("minor")
                document.querySelector(`#b-${i + 1}`).classList.add("major")
                await new Promise(resolve => setTimeout(resolve, timing));
            }

        }
    }
    //
}

