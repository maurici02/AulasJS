function tornarNomeMaiusculo(){
    nome = document.getElementById("txtNome").value;
    nomeMaiusculo = nome.toUpperCase();
    document.getElementById("txtNome").value = nomeMaiusculo;

    
}

function validarIdade(){
    idade =  parseInt(document.getElementById("txtIdade").value);
    if (idade >= 18){
        return true;
    }
    return false;
}

function validarFrom(){
    tornarNomeMaiusculo();
    if (validarIdade() == true){ // = true, todo if ja valida para true e não precisa do ==true
        alert("Preenchimento dos dados ok");
    }else{
        alert("Volte e corrija os dados inseridos");
    }
}