// links para as telas dos algoritmos
const bubble_link = document.getElementById("bb_link");
const insertion_link = document.getElementById("ins_link");
const selection_link = document.getElementById("sel_link");
const slider = document.getElementById("sld"); // slider que contém as telas

let tela = 1; // tela inicial = bubble sort

const dialogContainer = document.getElementById(`sec${tela}`); // janela de diálogo é inserida na tela atual
const dialog = document.querySelector(".dialog");

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
function openDialog(type, array) {
    // aparecimento
    dialog.style.display = "flex";
    //  captura o titulo
    let dialogTitle = document.querySelector(".dialog-title");
    // captura o corpo da janela
    let dialogBody = document.querySelector(".dialog-body");
    // cria descrição
    const desc = document.createElement("p");
    dialogBody.appendChild(desc);

    // captura o botão 'OK'
    let dialogSuccess = document.querySelector(".dialog-success");

    // cria input padrão
    let textInput = document.createElement("input");
    textInput.type = "text";

    // atribui valores e funções respectivas
    switch (type) {
        case "add":
            dialogBody.appendChild(textInput);
            dialogTitle.innerHTML = "Adicionar item";
            desc.innerHTML = "Digite o valor do novo elemento: ";
            dialogSuccess.addEventListener("click", () => {
                addItem(array, textInput.value);
                closeDialog();
            });
            break;
        case "remove":
            dialogTitle.innerHTML = "Remover item";
            desc.innerHTML = "Selecione o elemento para remover: ";
            let selectContainer = document.createElement("div");
            selectContainer.className = "select-container";
            array.forEach(element => {
                let selectInput = document.createElement("input");
                selectInput.type = "checkbox";
                selectInput.value = element;
                dialogBody.appendChild(selectContainer);
                selectContainer.appendChild(selectInput);
                let label = document.createElement("label");
                label.innerHTML = element;
                selectContainer.appendChild(label);
                selectContainer.appendChild(document.createElement("br"));
            });
            break;
        case "time":
            dialogBody.appendChild(textInput);
            dialogTitle.innerHTML = "Definir delay";
            desc.innerHTML = "Digite o tempo de animação em milissegundos: ";
            dialogSuccess.addEventListener("click", () => {
                setTime(textInput.value);
                closeDialog();
            });
            break;
        default:
            dialogTitle.innerHTML = "Erro inesperado";
            desc.innerHTML = "??? ";
            break;
    }


}

function closeDialog() {
    dialog.style.display = "none";
    let dialogBody = document.querySelector(".dialog-body");
    dialogBody.innerHTML = "";
}

