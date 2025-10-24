// links para as telas dos algoritmos
const bubble_link = document.getElementById("bb_link");
const insertion_link = document.getElementById("ins_link");
const selection_link = document.getElementById("sel_link");
const slider = document.getElementById("sld"); // slider que contém as telas

let tela = 1; // tela inicial = bubble sort

const dialogContainer = document.getElementById(`sec${tela}`); // janela de diálogo é inserida na tela atual
const dialog = document.querySelector(".dialog"); // janela de diálogo 

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
    // desabilita botão
    let btn = document.querySelector(`#${type}`);
    btn.disabled = true;
    // mostra a janela
    dialog.style.display = "flex";
    // captura título, corpo e descrição da janela
    let dialogTitle = document.querySelector(".dialog-title");
    let dialogBody = document.querySelector(".dialog-body");
    let dialogDesc = document.querySelector(".dialog-desc");
    // captura o botão de sucesso
    let dialogSuccess = document.querySelector(".dialog-success");
    // captura o input padrão
    let textInput = document.querySelector(".dialog-input");

    // atribui conteúdo e função respectiva
    if (type == "add") {
        // atribui titulo e descrição
        dialogTitle.innerHTML = "Adicionar item";
        dialogDesc.innerHTML = "Digite o valor do novo elemento: ";
        // atribui função de confirmação
        dialogSuccess.addEventListener("click", () => {
            if(textInput.value == ''){ 
                return; // não faz nada se o input estiver vazio
            }
            //alert(`${textInput.value}`);
            addItem(array, textInput.value);
            closeDialog(type);
        })
    }

    // cria funções de fechar janela
    let dialogClose = document.querySelector(".dialog-close");
    let dialogCancel = document.querySelector(".dialog-cancel");
    dialogClose.addEventListener("click", () => {
        closeDialog(type);
    })
    dialogCancel.addEventListener("click", () => {
        closeDialog(type);
    })

}

// fecha janela de diálogo
function closeDialog(type) {
    let textInput = document.querySelector(".dialog-input");
    let btn = document.querySelector(`#${type}`);
    btn.disabled = false; // reabilita o botão
    textInput.value = ''; // limpa o input 
    dialog.style.display = "none"; // esconde a janela
}

