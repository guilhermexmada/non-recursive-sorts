const bubbleContainer = document.querySelector("#bubble-sort-container"); // container do array
// parâmetros no HTML
const varI = document.querySelector("#i");
const varFim = document.querySelector("#fim");
const varAux = document.querySelector("#aux");
const varL = document.querySelector("#l");
const varT = document.querySelector("#t");
const varC = document.querySelector("#c");

// array de exemplo
let bubbleArray = [4, 3, 6, 7, 9, 10,];
// delay de animação inicial
let delay = 3000;
// passos
let steps = 0;

// renderiza array
renderArray(bubbleArray);

// atualizando os parâmetros no HTML
function updateVars(array, i, fim, aux, time) {
    varT.innerHTML = `<strong>${time}ms</strong> <em>⏱ Delay</em>`;
    varL.innerHTML = `<strong>${array.length}</strong> <em>📏 Tamanho</em>`;
    varI.innerHTML = `<strong>${i}</strong> <em>📦 i</em>`;
    varFim.innerHTML = `<strong>${fim}</strong> <em>📦 fim</em>`;
    varAux.innerHTML = `<strong>${aux}</strong> <em>📦 aux</em>`;
    varC.innerHTML = `<strong>${steps}</strong> <em>🟰 Iterações</em>`;
}

// inicialiando os parâmetros no HTML
updateVars(bubbleArray, 0, bubbleArray.length - 1, "Undefined", delay)

// define delay da animação
function setTime(newDelay) {
    if (newDelay == null) {
        newDelay = delay;
    }
    Number(newDelay);
    delay = newDelay;
    varT.innerHTML = `<strong>${delay}ms</strong> <em>⏱ Delay</em>`;
}

// adiciona novo elemento -> no final do array
function addItem(array, newItem) {
    if(newItem == ''){
        return;
    }
    let newNumber = Number(newItem); // converte para número
    if (isNaN(newNumber)) { // se não for um número
        alert("Por favor, digite um número!"); // porque está repetindo várias vezes esse alert?
    } else {
        array.push(newNumber); // adiciona novo elemento
        varL.innerHTML = `<strong>${array.length}</strong> <em>📏 Tamanho</em>`; // atualiza o tamanho do array
        renderArray(array); 
    }

}

// remove elemento -> o primeiro com o valor indicado
function removeItem(arrayToRemove, array) {
    arrayToRemove.forEach(element => {
        let toRemove = arrayToRemove.indexOf(Number(element)); // procura a posição do valor indicado (a primeira que aparecer)
        if (toRemove > -1) { // se o valor foi encontrado
            array.splice(toRemove, 1); // remove esse elemento
        }
    });

    varL.innerHTML = `<strong>${array.length}</strong> <em>📏 Tamanho</em>`; // atuaiza o tamanho do array
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
            steps++;
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

