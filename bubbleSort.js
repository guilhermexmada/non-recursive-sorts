const bubbleContainer = document.querySelector("#bubble-sort-container"); // container do array
const insertionContainer = document.querySelector("#insertion-sort-container"); // container do array
const selectionContainer = document.querySelector("#selection-sort-container"); // container do array
//  parâmetros do BubbleSort no HTML
const varI = document.querySelector("#i");
const varFim = document.querySelector("#fim");
const varAux = document.querySelector("#aux");
const varL = document.querySelector("#l");
const varT = document.querySelector("#t");
const varC = document.querySelector("#c");
// parâmetros do InsertionSort no HTML
const insVarI = document.querySelector("#ins-i");
const insVarJ = document.querySelector("#ins-j");
const insVarAux = document.querySelector("#ins-aux");
const insVarL = document.querySelector("#ins-l");
const insVarT = document.querySelector("#ins-t");
const insVarC = document.querySelector("#ins-c");
// parâmetros do SelectionSort no HTML
const selVarI = document.querySelector("#sel-i");
const selVarJ = document.querySelector("#sel-j");
const selVarMin = document.querySelector("#sel-min");
const selVarAux = document.querySelector("#sel-aux");
const selVarL = document.querySelector("#sel-l");
const selVarT = document.querySelector("#sel-t");
const selVarC = document.querySelector("#sel-c");

// array de exemplo
let bubbleArray = [1, 2, 3, 10, 5, 4];
let insertionArray = [90, 10, 30, 20, 5];
let selectionArray = [100, 300, 200, 500, 400];
// delay de animação inicial
let delay = 500;
let insDelay = 500;
let selDelay = 500;
// passos
let steps = 0;
let insSteps = 0;
let selSteps = 0;

// renderiza array
renderArray(bubbleArray);
renderArray(insertionArray);
renderArray(selectionArray);

// atualizando os parâmetros no HTML
function updateVars(array, i, fim, aux, min, time) {
  if (array == bubbleArray) {
    varT.innerHTML = `<strong>${time}ms</strong> <em>⏱ Delay</em>`;
    varL.innerHTML = `<strong>${array.length}</strong> <em>📏 Tamanho</em>`;
    varI.innerHTML = `<strong>${i}</strong> <em>📦 i</em>`;
    varFim.innerHTML = `<strong>${fim}</strong> <em>📦 fim</em>`;
    varAux.innerHTML = `<strong>${aux}</strong> <em>📦 aux</em>`;
    varC.innerHTML = `<strong>${steps}</strong> <em>🟰 Iterações</em>`;
  } else if (array == insertionArray) {
    insVarT.innerHTML = `<strong>${time}ms</strong> <em>⏱ Delay</em>`;
    insVarL.innerHTML = `<strong>${array.length}</strong> <em>📏 Tamanho</em>`;
    insVarI.innerHTML = `<strong>${i}</strong> <em>📦 i</em>`;
    insVarJ.innerHTML = `<strong>${fim}</strong> <em>📦 j</em>`;
    insVarAux.innerHTML = `<strong>${aux}</strong> <em>📦 aux</em>`;
    insVarC.innerHTML = `<strong>${insSteps}</strong> <em>🟰 Iterações</em>`;
  } else if(array == selectionArray) {
    selVarT.innerHTML = `<strong>${time}ms</strong> <em>⏱ Delay</em>`;
    selVarL.innerHTML = `<strong>${array.length}</strong> <em>📏 Tamanho</em>`;
    selVarI.innerHTML = `<strong>${i}</strong> <em>📦 i</em>`;
    selVarJ.innerHTML = `<strong>${fim}</strong> <em>📦 j</em>`;
    selVarMin.innerHTML= `<strong>${min}</strong> <em>📦 min</em>`;
    selVarAux.innerHTML = `<strong>${aux}</strong> <em>📦 aux</em>`;
    selVarC.innerHTML = `<strong>${selSteps}</strong> <em>🟰 Iterações</em>`;
  }
}

// inicializando os parâmetros BubbleSort no HTML
updateVars(bubbleArray, 0, bubbleArray.length - 1, "Undefined", 0 , delay);

// inicializando os parâmetros InsertionSort no HTML
updateVars(insertionArray, 0, 1, "Undefined", 0 , insDelay);

// inicializando os parâmetros SelectionSort no HTML
updateVars(selectionArray, 0, 0, "Undefined", 0 , selDelay);


// define delay da animação
function setTime(array, newDelay) {
  if (newDelay == "" || newDelay == null) {
    newDelay = delay;
  } else if (isNaN(newDelay)) {
    alert("Por favor, digite um número!");
    return;
  } else {
    Number(newDelay); // converte em número
    // define o delay para o array escolhido
    if (array == bubbleArray) {
      delay = newDelay;
      varT.innerHTML = `<strong>${delay}ms</strong> <em>⏱ Delay</em>`;
    } else if (array == insertionArray) {
      insDelay = newDelay;
      insVarT.innerHTML = `<strong>${insDelay}ms</strong> <em>⏱ Delay</em>`;
      //alert(insDelay);
    } else if (array == selectionArray) {
      selDelay = newDelay;
      selVarT.innerHTML = `<strong>${selDelay}ms</strong> <em>⏱ Delay</em>`;
      //alert(insDelay);
    }
  }
}

// adiciona novo elemento -> no final do array
function addItem(array, newItem) {
  if (newItem == "" || newItem == null) {
    return;
  }
  let newNumber = Number(newItem); // converte para número
  if (isNaN(newNumber)) {
    // se não for um número
    alert("Por favor, digite um número!"); // porque está repetindo várias vezes esse alert?
    return;
  } else {
    array.push(newNumber); // adiciona novo elemento
    // atualiza a variável HTML correspondente
    if (array == bubbleArray) {
      varL.innerHTML = `<strong>${array.length}</strong> <em>📏 Tamanho</em>`; // atualiza o tamanho do array
    } else if (array == insertionArray) {
      insVarL.innerHTML = `<strong>${array.length}</strong> <em>📏 Tamanho</em>`;
    }
    renderArray(array);
  }
}

// remove elemento -> o primeiro com o valor indicado
function removeItem(array, index) {
  if (index == "" || index == null) {
    return;
  } else if (isNaN(index)) {
    alert("Por favor, digite um número!");
    return;
  } else {
    array.splice(index, 1); // remove esse elemento
    // atualiza a variável HTML correspondente
    if (array == bubbleArray) {
      varL.innerHTML = `<strong>${array.length}</strong> <em>📏 Tamanho</em>`; // atuaiza o tamanho do array
    } else if (array == insertionArray) {
      insVarL.innerHTML = `<strong>${array.length}</strong> <em>📏 Tamanho</em>`; // atuaiza o tamanho do array
    }
    renderArray(array);
  }
}

// exibe array no estado atual
function renderArray(array) {
  if (array == bubbleArray) {
    bubbleContainer.innerHTML = "";
    array.forEach((value, index) => {
      bubbleContainer.innerHTML += `<div id='b-${index}' class='arrayItem'>${value}</div>`;
    });
  } else if (array == insertionArray) {
    insertionContainer.innerHTML = "";
    array.forEach((value, index) => {
      insertionContainer.innerHTML += `<div id='ins-${index}' class='arrayItem'>${value}</div>`;
    })
  } else if (array == selectionArray) {
    selectionContainer.innerHTML = "";
    array.forEach((value, index) => {
      selectionContainer.innerHTML += `<div id='sel-${index}' class='arrayItem'>${value}</div>`;
    })
  }
}

// ordena array usando bubble sort
async function bubbleSort(array, timing) {
  let i, fim, aux;
  for (fim = array.length - 1; fim > 0; fim--) {
    colorLine("bubbleSort", "paint", 3);
    await new Promise((resolve) => setTimeout(resolve, timing / 2)); // colore primeiro laço
    colorLine("bubbleSort", "unpaint", 3);

    for (i = 0; i < fim; i++) {
      steps++; // conta as iterações

      colorLine("bubbleSort", "paint", 4);
      await new Promise((resolve) => setTimeout(resolve, timing / 2)); // colore segundo laço
      colorLine("bubbleSort", "unpaint", 4);

      // comparando elementos --- //
      renderArray(array);
      updateVars(array, i, fim, aux, 0, timing);

      colorLine("bubbleSort", "paint", 5);
      document.querySelector(`#b-${i}`).classList.add("comparing");
      document.querySelector(`#b-${i + 1}`).classList.add("comparing");
      await new Promise((resolve) => setTimeout(resolve, timing)); // colore a condicional

      // --- comparando elementos //

      if (array[i] > array[i + 1]) {
        // sinalizando troca --- //

        document.querySelector(`#b-${i}`).classList.add("major");
        document.querySelector(`#b-${i + 1}`).classList.add("minor");
        await new Promise((resolve) => setTimeout(resolve, timing)); // descolore condicional
        colorLine("bubbleSort", "unpaint", 5);

        // --- sinalizando troca //

        // troca de posições --- //
        aux = array[i];
        colorLine("bubbleSort", "paint", 6);
        //renderArray(array);
        await new Promise((resolve) => setTimeout(resolve, timing)); // colore as linhas de troca
        array[i] = array[i + 1];
        colorLine("bubbleSort", "paint", 7);
        //renderArray(array);
        await new Promise((resolve) => setTimeout(resolve, timing)); // colore as linhas de troca
        array[i + 1] = aux;
        colorLine("bubbleSort", "paint", 8);
        //renderArray(array);
        await new Promise((resolve) => setTimeout(resolve, timing)); // colore as linhas de troca
        colorLine("bubbleSort", "unpaint", 6);
        colorLine("bubbleSort", "unpaint", 7);
        colorLine("bubbleSort", "unpaint", 8);

        // --- troca de posições //

        // renderiza array
        renderArray(array);
        // troca bem-sucedida --- //
        document.querySelector(`#b-${i}`).classList.add("sorted");
        document.querySelector(`#b-${i + 1}`).classList.add("sorted");
        updateVars(array, i, fim, aux, 0, timing);
        await new Promise((resolve) => setTimeout(resolve, timing));
        // --- troca bem-sucedida //
      } else {
        // troca não feita --- //
        document.querySelector(`#b-${i}`).classList.add("minor");
        document.querySelector(`#b-${i + 1}`).classList.add("major");
        await new Promise((resolve) => setTimeout(resolve, timing));
        colorLine("bubbleSort", "unpaint", 5);
        renderArray(array);
        // --- troca não feita //
      }
    }
  }
  //
}

// ordena array usando insertion sort
async function insertionSort(array, timing) {
  let i = 0;
  let j = 1;
  let aux = 0;
  while (j < array.length) { // compara até percorrer todo vetor
    insSteps++;

    colorLine("insertionSort", "paint", 5);
    await new Promise((resolve) => setTimeout(resolve, timing / 2)); // colore primeiro laço
    colorLine("insertionSort", "unpaint", 5);

    aux = array[j]; // aux recebe valor atual

    colorLine("insertionSort", "paint", 6); // colore linha da atualização do aux 
    updateVars(array, i, j, aux, 0, timing); // atualiza aux no HTML
    await new Promise((resolve) => setTimeout(resolve, timing));

    colorLine("insertionSort", "unpaint", 6);

    i = j - 1; // redefine antecessor

    colorLine("insertionSort", "paint", 7); // colore linha da atualização do 'i'
    updateVars(array, i, j, aux, 0, timing); // atualiza 'i' no HTML
    await new Promise((resolve) => setTimeout(resolve, timing));

    colorLine("insertionSort", "unpaint", 7);

    while ((i >= 0) && (array[i] > aux)) { // se valor antecessor > valor atual, troca posições

      colorLine("insertionSort", "paint", 8); // colore linha da comparação
      document.querySelector(`#ins-${i}`).classList.add("comparing");

      if (array[i] > array[j]) { // destaca troca SE O ELEMENTO ANTECESSOR FOR MAIOR QUE O SUCESSOR
        document.querySelector(`#ins-${j}`).classList.add("comparing");
        await new Promise((resolve) => setTimeout(resolve, timing));

        document.querySelector(`#ins-${i}`).classList.add("major");
        document.querySelector(`#ins-${j}`).classList.add("minor");
        await new Promise((resolve) => setTimeout(resolve, timing)); // destaca maior e menor
        document.querySelector(`#ins-${i}`).classList.remove("major", "comparing");
        document.querySelector(`#ins-${j}`).classList.remove("minor", "comparing");
      } else { // caso o ELEMENTO ANTECESSOR FOR MAIOR QUE O VALOR NO AUX, E NÃO NECESSARIAMENTE DO QUE O SUCESSOR
        await new Promise((resolve) => setTimeout(resolve, timing));
        document.querySelector(`#ins-${i}`).classList.remove("comparing");
        document.querySelector(`#ins-${i}`).classList.add("major");
        await new Promise((resolve) => setTimeout(resolve, timing));
        document.querySelector(`#ins-${i}`).classList.remove("major");
      }

      colorLine("insertionSort", "unpaint", 8); // descolore linha da comparação

      array[i + 1] = array[i]; // valor antecessor passa para frente

      colorLine("insertionSort", "paint", 9);
      updateVars(array, i, j, aux, 0, timing);
      renderArray(array);
      document.querySelector(`#ins-${i}`).classList.add("comparing");
      document.querySelector(`#ins-${i + 1}`).classList.add("sorted");
      await new Promise((resolve) => setTimeout(resolve, timing)); // destaca troca
      document.querySelector(`#ins-${i}`).classList.remove("comparing");
      document.querySelector(`#ins-${j}`).classList.remove("sorted");

      colorLine("insertionSort", "unpaint", 9);

      i = i - 1; // antecessor diminui

      colorLine("insertionSort", "paint", 10);
      updateVars(array, i, j, aux, 0, timing);
      await new Promise((resolve) => setTimeout(resolve, timing));
      colorLine("insertionSort", "unpaint", 10);

    }

    array[i + 1] = aux; // valor atual passa para trás



    colorLine("insertionSort", "paint", 12);
    updateVars(array, i, j, aux, 0, timing);
    renderArray(array);
    document.querySelector(`#ins-${i + 1}`).classList.add("sorted");
    await new Promise((resolve) => setTimeout(resolve, timing)); // destaca troca
    document.querySelector(`#ins-${i + 1}`).classList.remove("sorted");
    colorLine("insertionSort", "unpaint", 12);

    j = j + 1; // posição atual avança

    colorLine("insertionSort", "paint", 13);
    updateVars(array, i, j, aux, 0, timing);
    await new Promise((resolve) => setTimeout(resolve, timing));
    colorLine("insertionSort", "unpaint", 13);
  }
}

async function selectionSort(array, timing){
  i = 0;
  j = 0;
  min = 0;
  aux = 0;

  for(i = 0; i < (array.length - 1); i++){
    selSteps++;

    min = i;

    for(j = (i + 1); j < array.length; j++){

      if(array[j] < array[min]){

        min = j;

      } 
      if(array[i] != array[min]){

        aux = array[i];
        array[i] = array[min];
        array[min] = aux;

      }
    }
  }
  renderArray(selectionArray);
  updateVars(selectionArray, i, j, aux, min, selDelay);
}
