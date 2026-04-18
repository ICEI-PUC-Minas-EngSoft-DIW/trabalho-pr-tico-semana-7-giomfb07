

let nome = prompt("Qual o seu nome?");

let renda = Number(prompt("Qual a sua renda mensal?"));
while (isNaN(renda)) {
    renda = Number(prompt("Valor inválido! Digite sua renda novamente:"));
}

let qtddespesas = Number(prompt("Qual a quantidade de suas despesas? (1 - 5)"));
while (isNaN(qtddespesas)) {
    qtddespesas = Number(prompt("Valor inválido! Digite novamente (1 a 5):"));
}

if (qtddespesas < 1){
    qtddespesas = 1
} else if (qtddespesas > 5){
    qtddespesas = 5
}

let somadespesas = 0;

for (let i = 1; i <= qtddespesas; i++) {
    let despesas = Number(prompt(`Qual o valor da sua ${i}º despesa?`));

 while (isNaN(despesas)) {
        despesas = Number(prompt(`Valor inválido! Digite novamente a despesa ${i}:`));
    }

    somadespesas += despesas;
}

let mensagem = "";
let sobra = renda - somadespesas;


if (somadespesas > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= renda * (30/100)) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else{
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}


// 5. Saída final
let resultado = `
Nome: ${nome}
Renda: R$ ${renda.toFixed(2)}
Despesas: R$ ${somadespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}

Mensagem de classificação: ${mensagem}
`;

// Exibir
alert(resultado);
console.log(resultado);