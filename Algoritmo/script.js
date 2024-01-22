let prod = Number(prompt('Digite o valor normal do produto'));
let cond = Number(prompt('Digite o código de acordo com a condição de pagamento desejada:\n1. À vista em dinheiro ou cheque, 10% de desconto\n2. À vista no cartão de crédito, 15% de desconto.\n3. Em duas vezes, preço normal de etiqueta sem juros.\n4. Em duas vezes, preço normal de etiqueta mais juros de 10%'));
let desc
 
if (cond == 1){
    desc = prod-(prod*0.1)
 
}
else if(cond == 2){
    desc = prod-(prod*0.15)
}
else if (cond == 3){
    desc = prod
}
else if (cond == 4){
    desc = prod*1.1
}
else{
    alert(prompt("Informe uma opção válida"))
}
 
alert("O total pago será R$"+desc)
