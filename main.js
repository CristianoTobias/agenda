const form = document.querySelector("#form-agenda");
let linhas = "";
const arrNomes = [];
const arrTelefones = [];
const nome = document.querySelector("#nome");
const telefone = document.querySelector("#telefone");

const validaNome = (nomeCompleto) => {
  const nomeComoArray = nomeCompleto.trim().split(" ");
  const messageError = document.querySelector("#message-name");
  if (!(nomeComoArray.length >= 2)) {
    messageError.innerHTML = "O nome precisa ser completo!";
    messageError.classList.add("message-error-name");
    nome.style.border = "2px solid red";
    nome.style.color = "red";
    nome.style.outlineColor = "red";
  } else {
    messageError.classList.remove("message-error-name");
    messageError.innerHTML = "";
    nome.style.border = "none";
    nome.style.borderBottom = "2px solid black";
    nome.style.outlineColor = "black";
    nome.style.color = "black";
    return true;
  }
};
const validaTelefone = (tel) => {
  const messageError = document.querySelector("#message-telefone");
  const regexp = /[0-9]{2}-[0-9]{5}-[0-9]{4}/gi;
  if (!tel.match(regexp)) {
    messageError.innerHTML = "Formato: XX-XXXXX-XXXX";
    messageError.classList.add("message-error-telefone");
    telefone.style.border = "2px solid red";
    telefone.style.color = "red";
    telefone.style.outlineColor = "red";
  } else {
    messageError.classList.remove("message-error-telefone");
    messageError.innerHTML = "";
    telefone.style.border = "none";
    telefone.style.borderBottom = "2px solid black";
    telefone.style.outlineColor = "black";
    telefone.style.color = "black";
  }
};
nome.addEventListener("keyup", function (e) {
  validaNome(e.target.value);
});

telefone.addEventListener("keyup", function (e) {
  validaTelefone(e.target.value);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validaNome(nome.value)) {
    adicionaLinha();
    atualizaAgenda();
  }
});

function adicionaLinha() {
  const inputNome = document.querySelector("#nome");
  const inputTelfone = document.querySelector("#telefone");
  const temp = document.querySelectorAll(".temp");
  if (arrNomes.includes(inputNome.value)) {
    alert(`O nome "${inputNome.value}" ja foi inserido`);
  } else {
    arrNomes.push(inputNome.value);
    arrTelefones.push(inputTelfone.value);
    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelfone.value}</td>`;
    linha += "</tr>";
    linhas += linha;
  }
  inputNome.value = "";
  inputTelfone.value = "";
  if (!temp[0].classList.contains("remove")) {
    temp[0].classList.add("remove");
    temp[1].classList.add("remove");
  }
}

function atualizaAgenda() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
