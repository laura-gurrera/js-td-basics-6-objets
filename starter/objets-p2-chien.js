/*
OBJETS - PRÉPA 2 : Modélisation d'un chien
Écris un programme qui :
1. Crée un objet chien contenant
   - les propriétés nom ("Tobby"), race ("Border Collie") et couleur ("bleu merle tricolore") ;
   - la méthode grogner() qui retourne "Grrr ! Grrr !"
     et la méthode aboyer() qui retourne "Wah ! Wah !"
2. Affiche dans la console le message "… est un … de couleur …"
3. Affiche dans la console le message "Tiens, un chat ! … aboie : …"
   (où … est le nom du chien et … utilise la méthode aboyer du chien pour le faire aboyer)
*/

// Objet litéral
function createDog (nom, race, couleur){
    return{
        nom: nom,
        race: race,
        couleur: couleur,
        grogner(){
        return "Grrr ! Grrr !";
        },
        aboyer(){
        return "Wah ! Wah !";
        },
        toString(){
        return `${this.nom} est un ${this.race} de couleur ${this.couleur}`;
        },
    };
}

const chien = createDog('Toby','Border Collie','bleu merle tricolore');

// Avec une Class (meilleure méthode)
class Chien{
    nom;
    race;
    couleur;

    constructor(nom, race, couleur) {
        this.nom= nom;
        this.race= race;
        this.couleur=couleur;
    }

    grogner(){
        return "Grrr ! Grrr !";
    };
    aboyer(){
        return "Wah ! Wah !";
    };
    toString(){
        return `${this.nom} est un ${this.race} de couleur ${this.couleur}`;
    };
}

// instentier un objet (grâce à new)
const toby = new Chien('Toby', 'Border Collie','blanche'); // appelle la méthode 'constructor'

console.log(toby.toString());