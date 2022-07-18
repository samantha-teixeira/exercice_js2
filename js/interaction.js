function change_couleur() {
    var paragraphe = document.getElementById("important");
    console.log(paragraphe);
    paragraphe.classList.add("rouge");
}
function reset_couleur() {
    var paragraphe = document.getElementById("important");
    console.log(paragraphe);
    paragraphe.classList.remove("rouge");
    paragraphe.classList.remove("bleu");
}
function change_couleur_bleu(){
    var paragraphe = document.getElementById("important");
    console.log(paragraphe);
    paragraphe.classList.add("bleu");
}
