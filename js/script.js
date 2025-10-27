    import { Chambre } from "./Chambre.js";                     //Import de la classe chambre

    let hotel = [];

    for(let i=0 ; i<10 ; i++){                                  //Boucle for créant aléatoirement 10 chambre
        let superficie = Math.floor(Math.random()*20)+10;
        let capacitee = Math.floor(Math.random()*5)+1;
        let resa = Math.floor(Math.random()*2);
        if(resa===1){
            resa = true;
        }else{
            resa = false;
        }
        hotel[i]= new Chambre(superficie, capacitee, resa);     //on stock les chambre dans un tableau hotel

    }
let chambreX = new Chambre(12, 2, true);
console.log(chambreX);

    displayFreeRoom();                                                 //On appel la fonction qui affiche les chambre libre


    //-------------------------------------------------------LES FONCTIONS-------------------------------------------------------------

    //Fonction Parcourant le tableau de chambre et affichant celles qui sont libre
    /**
     *
     */
    function displayFreeRoom(){

        for (let i=0 ; i<hotel.length ; i++){               //On parcours le tableau puis on regarde que vaut la valeur reservaiton de notre objet

            if(hotel[i].getReservation() === true){         //Si la chambre est libre on l'affiche
                console.log("Chambre "+(i+1)+" est libre: "+hotel[i].getCaracteristics());
            }
        }
    }

console.log(hotel);