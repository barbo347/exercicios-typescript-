function numerosArmstrong (numero: number): string {
    let nstring = numero.toString(); 
    let operacao = 0;
    let soma = 0;
  
  
    for(let i = 0; i < nstring.length; i++){
     let digito: number = parseInt(nstring.charAt(i)); 
     operacao = digito ** nstring.length;
     soma += operacao;
      
    }
     if (soma === numero) {
       return "Este eh um numero de Armstrong!"
     }
     else {
       return "Este nao eh um numero de Armstrong!"
  }
  } 

module.exports = numerosArmstrong;