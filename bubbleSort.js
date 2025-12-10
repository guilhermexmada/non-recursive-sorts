const bubbleContainer = document.querySelector("#bubble-sort-container"); // container do array
// parâmetros no HTML
const varI = document.querySelector("#i");
const varFim = document.querySelector("#fim");
const varAux = document.querySelector("#aux");
const varL = document.querySelector("#l");
const varT = document.querySelector("#t");
const varC = document.querySelector("#c");

// array de exemplo
let bubbleArray = [1,3,2,5,4,7,6,9,8,10];
// delay de animação inicial
let delay = 500;
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

// inicializando os parâmetros no HTML
updateVars(bubbleArray, 0, bubbleArray.length - 1, "Undefined", delay)

// define delay da animação
function setTime(newDelay) {
    if (newDelay == null) {
        newDelay = delay;
    }
    Number(newDelay); // converte em número
    delay = newDelay;
    varT.innerHTML = `<strong>${delay}ms</strong> <em>⏱ Delay</em>`;
}

// adiciona novo elemento -> no final do array
function addItem(array, newItem) {
    if (newItem == '' || newItem == null) {
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
function removeItem(array, index) {
    if(index == '' || index == null){
        return;
    }
    array.splice(index, 1); // remove esse elemento
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


        colorLine('bubbleSort', 'paint', 3)
        await new Promise(resolve => setTimeout(resolve, timing/2)); // colore primeiro laço
        colorLine('bubbleSort', 'unpaint', 3)

        for (i = 0; i < fim; i++) {
            steps++; // conta as iterações


            colorLine('bubbleSort', 'paint', 4)
            await new Promise(resolve => setTimeout(resolve, timing/2)); // colore segundo laço
            colorLine('bubbleSort', 'unpaint', 4)

            // comparando elementos --- //
            renderArray(array);
            updateVars(array, i, fim, aux, timing);

            colorLine('bubbleSort', 'paint', 5)
            document.querySelector(`#b-${i}`).classList.add("comparing")
            document.querySelector(`#b-${i + 1}`).classList.add("comparing")
            await new Promise(resolve => setTimeout(resolve, timing)); // colore a condicional

            // --- comparando elementos //

            if (array[i] > array[i + 1]) {

                // sinalizando troca --- //

                document.querySelector(`#b-${i}`).classList.add("major")
                document.querySelector(`#b-${i + 1}`).classList.add("minor")
                await new Promise(resolve => setTimeout(resolve, timing)); // descolore condicional
                colorLine('bubbleSort', 'unpaint', 5)

                // --- sinalizando troca //

                // troca de posições --- //
                aux = array[i];
                colorLine('bubbleSort', 'paint', 6)
                //renderArray(array);
                await new Promise(resolve => setTimeout(resolve, timing)); // colore as linhas de troca
                array[i] = array[i + 1];
                colorLine('bubbleSort', 'paint', 7)
                //renderArray(array);
                await new Promise(resolve => setTimeout(resolve, timing)); // colore as linhas de troca
                array[i + 1] = aux;
                colorLine('bubbleSort', 'paint', 8)
                //renderArray(array);
                await new Promise(resolve => setTimeout(resolve, timing)); // colore as linhas de troca
                colorLine('bubbleSort', 'unpaint', 6)
                colorLine('bubbleSort', 'unpaint', 7)
                colorLine('bubbleSort', 'unpaint', 8)

                // --- troca de posições //

                // renderiza array
                renderArray(array);
                // troca bem-sucedida --- //
                document.querySelector(`#b-${i}`).classList.add("sorted")
                document.querySelector(`#b-${i + 1}`).classList.add("sorted")
                updateVars(array, i, fim, aux, timing);
                await new Promise(resolve => setTimeout(resolve, timing));
                // --- troca bem-sucedida //

            } else {
                // troca não feita --- //
                document.querySelector(`#b-${i}`).classList.add("minor")
                document.querySelector(`#b-${i + 1}`).classList.add("major")
                await new Promise(resolve => setTimeout(resolve, timing));
                colorLine('bubbleSort', 'unpaint', 5) 
                renderArray(array);
                // --- troca não feita //
            }

        }
    }
    //


}

