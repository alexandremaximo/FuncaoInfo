function validar_CPF(CPF) {

    var strCPF = document.getElementById("CPF").value;

    if (strCPF != "") {
        strCPF = limpaCPF(strCPF);
        if (!TestaCPF(strCPF)) {
            alert("O CPF digitado não é válido.");
            document.getElementById("CPF").value = "";
        }
    }
}

function TestaCPF(CPF) {
    var numeros, digitos, soma, i, resultado, digitos_iguais;

    digitos_iguais = 1;
    if (CPF.length < 11)
        return false;
    for (i = 0; i < CPF.length - 1; i++)
        if (CPF.charAt(i) != CPF.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = CPF.substring(0, 9);
        digitos = CPF.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = CPF.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}

function limpaCPF(strCPF) {
    var i;

    for (i = 0; i <= strCPF.length; i++) {
        strCPF = strCPF.replace('.', '').replace('-', '');
    }
    return strCPF;
    
}