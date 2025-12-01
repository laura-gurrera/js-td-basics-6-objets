/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

/* Exercice en utilisant les classes */
class person{
    name;
    weigth;
    heigth;

    constructor(name, weigth, heigth){
        this.name= name;
        this.weigth= weigth;
        this.heigth= heigth;
    };

    calcBMI(){
        return (this.weigth/Math.pow(this.heigth,2)).toFixed(1);
    };
}

const john= new person('John Boss', 95, 1.85);
const mark= new person('Mark Leroy', 67, 1.78);

if(john.calcBMI()>mark.calcBMI()){
    console.log(`Le BMI de ${john.name} (${john.calcBMI()}) est plus élevé que le BMI de ${mark.name} (${mark.calcBMI()}).`);

}else if(mark.calcBMI()>john.calcBMI()){
    console.log(`Le BMI de ${mark.name} (${mark.calcBMI()}) est plus élevé que le BMI de ${john.name} (${john.calcBMI()}).`);

}else{
    console.log(`${mark.name} et ${john.name} ont tous les deux un BMI de ${mark.calcBMI()}`)
}