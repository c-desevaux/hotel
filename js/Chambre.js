


export class Chambre{                               //Export pour rendre la classe accessible depuis les autres fichier js

    //Atribut d'instance privé
    #superficie;
    #capacitee;
    #reservation;

    constructor(superficie, capacitee, reservation){ //Constructeur qui permet de creer des instance de chambre

        this.setSuperficie(superficie);                //On appel chaque seteur du constructeur avec les valeurs donnée en parametre
        this.setCapacitee(capacitee);
        this.setReservation(reservation);
       
    }

    setSuperficie(superficie){                          //Défini la superficie de la chambre
            this.#superficie=superficie;
    }
    setCapacitee(capacitee){                            //Défini la capacitée de la chambre
        this.#capacitee=capacitee;
    }

    setReservation(reservation){                        //Défini le status de la chambre (reservée ou libre)
        this.#reservation=reservation;
    }

    getSuperficie(){                                   //foncitons get qui permettent de recuprer les valeurs des differents parametres de chambre
        return this.#superficie;
    }

    getCapacitee(){
        return this.#capacitee;
    }

    getReservation(){
        return this.#reservation;
    }


    reserverChambre(){                                  //Fonciton permettant de changer le status de la chambre en occupée
        if(this.#reservation===true){
            this.setReservation(false);
        }else{
            console.log("La chambre est déjà occupée");
        }
        
    }

    libererChambre(){                                   //Fonction permettant de changer de status de la chambre en libre
        this.setReservation(true);
    }

}