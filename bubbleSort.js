const bubbleContainer = document.querySelector("#bubble-sort-container"); // container do array
const insertionContainer = document.querySelector("#insertion-sort-container"); // container do array
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

// array de exemplo
let bubbleArray = [1, 2, 3, 10, 5, 4];
let insertionArray = [90, 10, 30, 20, 5];
// delay de animação inicial
let delay = 500;
let insDelay = 500;
// passos
let steps = 0;
let insSteps = 0;

// renderiza array
renderArray(bubbleArray);
renderArray(insertionArray);

// atualizando os parâmetros no HTML
function updateVars(array, i, fim, aux, time) {
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
  }
}

// inicializando os parâmetros BubbleSort no HTML
updateVars(bubbleArray, 0, bubbleArray.length - 1, "Undefined", delay);

// inicializando os parâmetros InsertionSort no HTML
updateVars(insertionArray, 0, 1, "Undefined", insDelay);


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
    if(array == bubbleArray){
      delay = newDelay;
      varT.innerHTML = `<strong>${delay}ms</strong> <em>⏱ Delay</em>`;
    } else if(array == insertionArray){
      insDelay = newDelay;
      insVarT.innerHTML = `<strong>${insDelay}ms</strong> <em>⏱ Delay</em>`;
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
    if(array == bubbleArray){
          varL.innerHTML = `<strong>${array.length}</strong> <em>📏 Tamanho</em>`; // atualiza o tamanho do array
    } else if(array == insertionArray){
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
    varL.innerHTML = `<strong>${array.length}</strong> <em>📏 Tamanho</em>`; // atuaiza o tamanho do array
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
      updateVars(array, i, fim, aux, timing);

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
        updateVars(array, i, fim, aux, timing);
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
  while(j < array.length){
    insSteps++;

    aux = array[j];
    i = j - 1;
    
    while((i >= 0) && (array[i] > aux)){
      array[i + 1] = array[i];
      i = i - 1;
      
    }
    array[i + 1] = aux;
    j = j + 1;
    
  }
  renderArray(array);
  updateVars(array, i, j, aux, timing);
}