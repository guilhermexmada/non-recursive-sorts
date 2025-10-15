// links para as telas dos algoritmos
const bubble_link = document.getElementById("bb_link");
const insertion_link = document.getElementById("ins_link");
const selection_link = document.getElementById("sel_link");
const slider = document.getElementById("sld"); // slider que contém as telas

let tela = 1; // tela inicial = bubble sort

const dialogContainer = document.getElementById(`sec${tela}`); // janela de diálogo é inserida na tela atual

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

//  cria janela de diálogo
function openDialog(title, description) {
    
    //  estrutura da janela
    const dialog = document.createElement("div");
    const dialogHeader = document.createElement("div");
    const dialogBody = document.createElement("div");
    const dialogConfirm = document.createElement("div");
    dialog.className = "dialog-container";
    dialogHeader.className = "dialog-header";
    dialogBody.className = "dialog-body";
    dialogConfirm.className = "dialog-confirm";

    //  conteúdo da janela
    const 

    dialogContainer.appendChild(dialog);
    
//    prompt("hello world");
}