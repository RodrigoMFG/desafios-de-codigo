
verificador()

function verificador (){
    alert("Bem vindo ao Verificador de Palíndromos!");
    let palindromo = prompt('Insira a frase ou palavra:');
    let input = palindromo.toLowerCase().replaceAll(" ",""); // metodo ignorar espaços e letras maiusculas na comparação.
    let indice = input.length -1;
    let i = 0;
    let j = indice - i;
    console.log(i);
    console.log(input);
    
    //Loop que compara o primeiro e o ultimo indice da string
    while(input[i]===input[j] && j>=0){ 
        console.log(`${input[i]} é igual a ${input[j]}`);
        i++;
        j--;
        console.log(i);
        console.log(j);
    }
    
    if(i===input.length){
        alert(`${palindromo} é palíndromo`);
        }else{alert(`${palindromo} não é palíndromo`)};       
    }



