# 📊 Non-Recursive Sorting Visualizer

Uma aplicação web interativa que demonstra, de forma animada e didática, o funcionamento de algoritmos de ordenação **não recursivos**. O projeto foi desenvolvido com foco educacional, permitindo visualizar passo a passo como cada algoritmo manipula os dados, tornando o aprendizado mais intuitivo e visual.

---

## 🎯 Objetivo

O objetivo deste projeto é criar uma página web com animações de algoritmos de ordenação não recursivos, oferecendo uma alternativa mais **lúdica, visual e interativa** para compreender conceitos fundamentais de algoritmos e estruturas de dados.

A proposta é facilitar o entendimento de operações como comparações, trocas e iterações, que muitas vezes são abstratas quando vistas apenas em código.

---

## 🏗️ Arquitetura

O projeto segue uma arquitetura simples baseada em front-end puro:

```
📁 root
 ├── index.html        # Estrutura da aplicação
 ├── style.css         # Estilização e layout
 ├── script.js         # Controle de navegação (slider entre algoritmos)
 ├── sorts.js          # Implementação dos algoritmos + animações
 ├── favicon_io/       # Ícones da aplicação
 └── LICENSE           # Licença MIT
```

### 🔹 Camadas principais

* **Interface (HTML + CSS):**

  * Layout com navegação entre algoritmos
  * Containers visuais representando arrays
  * Indicadores de variáveis em tempo real

* **Controle (script.js):**

  * Gerencia a navegação entre os algoritmos (slider)
  * Controla estados de interface (ativação de abas)

* **Lógica (sorts.js):**

  * Implementação dos algoritmos de ordenação
  * Controle das animações
  * Atualização dinâmica do DOM

---

## ⚙️ Funcionalidades

* 🎥 Visualização animada de algoritmos de ordenação
* 🔄 Execução passo a passo dos algoritmos
* 📊 Representação gráfica de arrays
* 🔍 Exibição de variáveis internas em tempo real
* ⏯️ Controles de execução (play, velocidade, reload, customização do array)
* 🧭 Navegação entre algoritmos via interface deslizante (slider)

### 📌 Algoritmos implementados

* Bubble Sort
* Insertion Sort
* Selection Sort

---

## ▶️ Como executar

Você não precisa de backend ou instalação de dependências.

### ✔️ Opção 1 — Executar localmente

1. Baixe ou clone o repositório:

```bash
git clone https://github.com/guilhermexmada/non-recursive-sorts.git
```

2. Acesse a pasta:

```bash
cd non-recursive-sorts
```

3. Abra o arquivo `index.html` no navegador:

* Clique duas vezes no arquivo
  ou
* Use uma extensão como Live Server (VS Code)

---

### ✔️ Opção 2 — Deploy no GitHub Pages

* https://guilhermexmada.github.io/non-recursive-sorts/

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, eu consolidei alguns conhecimentos:

* Manipulação do DOM com JavaScript puro
* Implementação de algoritmos clássicos
* Visualização de estruturas de dados
* Separação de responsabilidades (UI vs lógica)
* Criação de animações baseadas em estados
* Organização de código front-end sem frameworks

---

## 🚀 Possíveis melhorias

* 📱 Melhor responsividade para dispositivos móveis
* 📊 Comparação de desempenho entre algoritmos
* 🔊 Feedback visual/sonoro para interações
* 🧠 Modo educativo com explicações passo a passo
* 🌐 Internacionalização (multi-idioma)

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

Você pode:

* Usar
* Modificar
* Distribuir

Desde que mantenha os créditos do autor.

Veja mais detalhes em: `LICENSE`

---

## 👨‍💻 Autor

Desenvolvido por:
👉 https://github.com/guilhermexmada

---

## 💡 Considerações finais

Este projeto é uma base sólida para aplicações educacionais focadas em algoritmos. Sua simplicidade estrutural permite fácil expansão e adaptação para diferentes níveis de ensino.

Se quiser evoluir isso para algo maior (como plataforma educacional ou ferramenta interativa com IA), dá pra crescer bastante a partir daqui.
