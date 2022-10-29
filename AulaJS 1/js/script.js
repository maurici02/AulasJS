function calcular(){
    //pegar o valor do primeiro input que está no documento HTML
    x = document.getElementById("numValor1").value;

    //pegar o valor do segundo input que está no documento HTML
    y = document.getElementById("numValor2").value;
    
    op = document.getElementById("operacao").value;

    //Conversão de X para inteiro
    //lembrando que o que vem da tela vem de string
    xint = parseInt(x);
    yint = parseInt(y);
    resultado = 0;
    switch(op){
        case "+":
            resultado = xint + yint;
            break;
        case "-":
            resultado = xint-yint;
            break;
        case "*":
            resultado = xint*yint;
            break;
        case "/":
            resultado = xint/yint;
            break;
        default:
            break;
        
    }
    alert("Resultado: " + resultado);
}