/*JavaScript*/

function gerar_senha() {

    /*Pegar o nome digitado*/
    const nome_completo = document.getElementById("nome_input").value;

    if (validar_nome(nome_completo)) {

        /*Const pra pegar o sobrenome*/
        const sobrenome = pegar_sobrenome(nome_completo);

        /*Const pra pegar a quantidade de vogais*/
        const num_vogais = qntdd_vogais(nome_completo);

        /*Mensagem exibida com a senha*/
        document.querySelector("#resultado").innerHTML = `Sua senha inicial é: ${sobrenome}${num_vogais}`;

        /*Colocando cor no resultado*/
        resultado.style.color = "black";

    }else {
        /*Mensagem exibida se o usuário não digitar o nome completo*/
        document.querySelector("#resultado").innerHTML = "Insira seu nome completo, por favor.";

        /*Colocando cor no resultado*/
        resultado.style.color = "black";  
      

    }

}


/*Pra verificar se o nome ontem nome e sobrenome*/
function validar_nome(nome) {
    
    /*trim pra remover espaços em branco*/
    /*split pra dividir a string em arrays*/
    const parte_nome = nome.trim().split(" ");

    /*pra ver se contem mais de um nome, pra validar o nome e sobrenome como completo*/
    return parte_nome.length > 1;

}

/*Pra pegar o sobrenome*/
function pegar_sobrenome(nome) {

    /*trim pra remover espaços em branco*/
    /*split pra dividir a string em arrays*/
    const parte_nome = nome.trim().split(" ");

    /*parte_nome pra pegar o sobrenome */
    /*pra ver se contem mais de um nome, pra validar o nome e sobrenome como completo*/
    /*toLowerCase pra retornar/converter a string em minúscula*/
    return parte_nome[parte_nome.length - 1].toLowerCase();


}

/*Pra contar a quantidade de vogais do nome e sobrenome*/
function qntdd_vogais(nome) {

    /*nome.match pra encontrar todas as vogais*/
    /*[aieouAEIOU] pra definir o conjunto de caracteres a serem vogais*/
    const vogais = nome.match(/[aieouAEIOU]/g); /*g pra encontrar todas as vogais de forma global*/
    
    /*verifica a condição e se não tiver vogais retorna 0*/
    const quantidade = vogais ? vogais.length : 0;

    /*Pra retornar número com 2 dígitos*/
    return quantidade.toString().padStart(2, '0');

}