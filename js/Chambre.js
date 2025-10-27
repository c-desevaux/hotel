


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


}