function apuraVotacao(votacao: number[]): string {
    let c1 = 0;  
    let c2 = 0;
    let c3 = 0;
  
    for(let i = 0;  i < votacao.length; i++){
      if(votacao[i] === 1){
        c1 += 1;
      } 
      else if(votacao[i] === 2){
       c2 +=1;
      }
      else if(votacao[i] === 3){
         c3 +=1;
      } 
    }
  
    if (c1 > c2 && c1 > c3) {
       return 'Vencedor: 1';
    }
    else if (c2 > c1 && c2 > c3){
      return 'Vencedor: 2';
    } 
    else if (c3 > c1 && c3 > c2){
      return 'Vencedor: 3';
    } 
    else {
      return 'Empate';
    }
  }
  
  
  console.log(apuraVotacao([2, 2, 2, 3, 3, 3]));
module.exports = apuraVotacao;