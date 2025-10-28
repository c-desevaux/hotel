


export class Chambre{                               //Export pour rendre la classe accessible depuis les autres fichier js

    //Atribut d'instance privé
    #superficie;
    #capacitee;
    #reservation;

    constructor(superficie, capacitee, reservation){ //Constructeur qui permet de creer des instance de chambre

        

        this.#setSuperficie(superficie);                //On appel chaque seteur du constructeur avec les valeurs donnée en parametre
        this.#setCapacitee(capacitee);
        this.#setReservation(reservation);
       
    }

    #setSuperficie(superficie){                          //Défini la superficie de la chambre

        if(superficie == undefined){ throw new Error ("ERR : Champs superficie obligatoire")} //Erreur si superficie non défini
        if(isNaN(superficie)){ throw Error ("ERR : La superficie doit etre un nombre")}   //Erreur si superficie n'est pas un nombre
        if(superficie<=0){ throw Error ("ERR : La superficie doit est un nombre positif")} //Erreur si superficie n'est pas positif
        else{this.#superficie=superficie};

    }

    #setCapacitee(capacitee){                            //Défini la capacitée de la chambre
        if(capacitee == undefined){ throw new Error ("ERR : Champs capacitee obligatoire")} //Erreur si capacitee non défini
        if(isNaN(capacitee)){ throw Error ("ERR : La capacitee doit etre un nombre")}   //Erreur si capacitee n'est pas un nombre
        if(capacitee<=0){ throw Error ("ERR : La capacitee doit est un nombre positif")} //Erreur si capacitee n'est pas positif
        else{this.#capacitee=capacitee};
    }

    #setReservation(reservation){                        //Défini le status de la chambre (reservée ou libre)
        if(reservation == undefined){ throw new Error ("ERR : Champs reservation obligatoire")} //Erreur si reservation non défini
        if(reservation!=true && reservation != false){ throw Error ("ERR : La reservation doit etre un boolean")}   //Erreur si reservation n'est pas un boolean
        else{this.#reservation=reservation};
    }

    getSuperficie(){                                   //Foncitons get qui permettent de recuprer les valeurs des differents parametres de chambre
        return this.#superficie;
    }

    getCapacitee(){
        return this.#capacitee;
    }

    getReservation(){
        return this.#reservation;
    }

    getCaracteristics(){    
        let status;
        if(this.#reservation === true){
            status = "Libre";
        }else{
            status = "Occupée";
        }                               //Fonction permettant de renvoyer un tableau mentionnant l'ensemble des caracterisques
        let caracteristics = ["Superficie: "+this.#superficie, " Capacitée: "+this.#capacitee, " Status: "+status];
        return caracteristics;
    }


    reserverChambre(){                                  //Fonciton permettant de changer le status de la chambre en occupée
        if(this.#reservation === true){
            this.#setReservation(false);
        }else{
            console.log("La chambre est déjà occupée");
        }
        
    }

    libererChambre(){                                    //Fonction permettant de changer de status de la chambre en libre
        if(this.#reservation === false){
            this.#setReservation(true);
        }else{
            console.log("La chambre est déjà libre");
        }
   
    }

}