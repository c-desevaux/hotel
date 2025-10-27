    "use-strict";

    import { Chambre } from "./Chambre.js";                     //Import de la classe chambre


//-------------------------------------------------------------LES TESTS----------------------------------------------------------------

    try{

        // let test1 = new Chambre();
        // let test2 = new Chambre("a", 1, true);
        // let test3 = new Chambre(-1, 1, true);
        // let test4 = new Chambre(1, "a", true);
        // let test5 = new Chambre(1, -1, true);
        // let test6 = new Chambre(1, 1, 0);
        // let test7 = new Chambre(1, 1, "a");
        // let test8 = new Chambre(1, 1);
        // let test9 = new Chambre(1);

        
    }catch(e){
        console.log("une erreur s'est produite : ",e.message);
    }

//---------------------------------------------------------PROGRAMME PRINCIPALE----------------------------------------------------------
    
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

        hotel[i]= new Chambre(superficie, capacitee, resa);     //on stock les chambres dans un tableau hotel

    }

    let btnOk = document.getElementById("btn-valider");               //On récupère le bouton dans le DOM

    btnOk.addEventListener("click", () => {

        let select = document.getElementById("searchRoom");   //On récupère la valeur entrée dans le champ input
        let numChambre = select.value;
        let container = document.getElementById("display-room");
        let p = document.createElement("p");

        container.innerHTML = "";                                   //On vide le conteneur à chaque clic
        p.textContent = "Caractéristiques de la chambre numéro "+numChambre+":\n "+hotel[numChambre-1].getCaracteristics();
        p.style.whiteSpace = "pre-line";
        container.appendChild(p);
        let btnLiberer = document.getElementById("btn-liberer");
        btnLiberer.classList.remove("d-none");
        btnLiberer.onclick = function(){
            if(hotel[numChambre-1].getReservation() === false){
                hotel[numChambre-1].libererChambre();
                container.innerHTML = "";
                p.textContent = "Caractéristiques de la chambre numéro "+numChambre+":\n "+hotel[numChambre-1].getCaracteristics();
            }
        container.appendChild(p);      
        }                             //On appelle la fonction d'affichage des caractéristiques de la chambre


        let btnResa = document.getElementById("btn-reserver");
        btnResa.classList.remove("d-none");
        btnResa.onclick = function(){
            if(hotel[numChambre-1].getReservation() === true){
                hotel[numChambre-1].reserverChambre();
                container.innerHTML = "";                                  //On vide le conteneur à chaque clic
                p.textContent = "Caractéristiques de la chambre numéro "+numChambre+":\n "+hotel[numChambre-1].getCaracteristics();
            }
        container.appendChild(p);      
        }                             //On appelle la fonction d'affichage des caractéristiques de la chambre    
    });


    displayFreeRoom();

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

    function displayRoom(numeroChambre){
        console.log("Caractéristiques de la chambre numéro "+numeroChambre+": "+hotel[numeroChambre-1].getCaracteristics());
    }


console.log(hotel);