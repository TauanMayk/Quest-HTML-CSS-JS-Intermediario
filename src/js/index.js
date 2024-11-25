// passo 1 - pegar todos os inputs e colocar eles dentro de uma variavel 

const inputsFormulario = document.querySelectorAll(".input-formulario");
const botaoEnviar = document.getElementById("btn-enviar");

// passo 2 - estilizar todos os inputs de uma vez só

function verificarCamposObrigatorios() {
    let mensagemCampoObrigatorio = document.querySelectorAll("#campo-obrigatorio");
    if (inputsFormulario.forEach(inputs =>{
        if (inputs.value !== "") {
            inputs.classList.add("campo-preenchido");
        } else if(inputs.value === ""){
            inputs.classList.add("campo-faltando");
            mensagemCampoObrigatorio.forEach(mensagem =>{
                mensagem.innerHTML = `campo obrigatorio`
            })
        }else{
            inputs.classList.remove("campo-preenchido");
        }
    })) {
    } 
}