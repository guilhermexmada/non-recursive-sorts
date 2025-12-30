// links para as telas dos algoritmos
const bubble_link = document.getElementById("bb_link");
const insertion_link = document.getElementById("ins_link");
const selection_link = document.getElementById("sel_link");
const slider = document.getElementById("sld"); // slider que contém as telas

let tela = 1; // tela inicial = bubble sort

// move a tela 
function moveSlider(n) {
    tela = n;
    if (tela == 1) {
        bubble_link.className = "active";
        insertion_link.classList.remove("active");
        selection_link.classList.remove("active");
        slider.style.transform = "translateX(0)";
    } else if (tela == 2) {
        insertion_link.className = "active";
        bubble_link.classList.remove("active");
        selection_link.classList.remove("active");
        slider.style.transform = "translateX(-100vw)";

    } else if (tela == 3) {
        selection_link.className = "active";
        bubble_link.classList.remove("active");
        insertion_link.classList.remove("active");
        slider.style.transform = "translateX(-200vw)";
    }
}


// destaca linhas de código
function colorLine(array, action, num) {
    let section;
    // identifica qual a seção do código
    if (array == "bubbleSort") {
        section = "sec1";
    }
    // captura a linha especificada
    let line = document.querySelector(`#${section} .code #line-${num}`);
    // define se colore ou descolore
    if (action == 'paint') {
        line.style.backgroundColor = "green";
    }
    else if (action == 'unpaint') {
        line.style.backgroundColor = "";
    }
}

// entrada de informações
function editArray(array,action){
    if(action == "insert"){
        let newItem = prompt("Digite um número para adicionar ao final do array: ");
        addItem(array, newItem);
    }
    else if(action == "remove"){
        let indexToRemove = prompt(`Digite um número de 0 a ${array.length - 1} indicando a posição do item que será retirado:`);
        removeItem(array, indexToRemove);
    } 
    else if(action == "changeTime"){
        let newTime = prompt("Digite o tempo da animação em milissegundos: ");
        setTime(newTime);
    }
}

// abre janela de diálogo
function openDialog(id){
    let win = document.querySelector(`.dialog ${id}`);
    win.style.display = 'flex';
}
// fecha janela de diálogo
function closeDialog(id){
    let win = document.querySelector(`.dialog ${id}`);
    win.style.display = 'none';
}

