let nome = prompt("Digite o nome:");
let xp = prompt("Pontos de experiência do herói");
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];
if (xp < 1000) {
    nivel = nivel[0];
}
else if (xp <= 2000) {
    nivel = nivel[1];
}
else if (xp <= 5000) {
    nivel = nivel[2];
}
else if (xp <= 7000) {
    nivel = nivel[3];
}
else if (xp <= 8000) {
    nivel = nivel[4];
}
else if (xp <= 9000) {
    nivel = nivel[5];
}
else if (xp <= 10000) {
    nivel = nivel[6];
}
else if (xp > 10000) {
    nivel = nivel[7];
}


console.log("O Herói de nome " + nome + " está no nivel de " + nivel);
