
let win = 50
let defeat = 5

let result = getWinBalance(win, defeat);

function getWinBalance(win, defeat) {
  let matches = win - defeat
  
  switch (true) {
    case win < 10:
        levelHero = "Ferro";
        break;
    case win >= 11 && win <= 20:
        levelHero = "Bronze";
        break;
    case win >= 21 && win <= 50:
        levelHero = "Prata";
        break;
    case win >= 51 && win <= 80:
        levelHero = "Ouro";
        break;
    case win >= 81 && win <= 90:
        levelHero = "Diamante";
        break;
    case win >= 91 && win <= 100:
        levelHero = "Lendário";
        break;
        default:
          levelHero = "Imortal";
      }
  return matches;
}

console.log(`O Herói tem de saldo de ${result} vitorias está no nível de ${levelHero}`);


