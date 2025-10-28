
    export class Employe{

        //Ensemble des 4 propriétées protégées
        #nom;
        #prenom;
        #branche;
        #salaire;
        #responsable;


        constructor(nom, prenom, branche, salaire, responsable){

            //On initialise chacune des valeurs avec les setter qui ssont des fonctions protégés
            this.#setNom(nom);
            this.#setPrenom(prenom);
            this.#setBranche(branche);
            this.#setSalaire(salaire);
            this.setResponsable(responsable);

        }
// ---------------------------------------------------------------SETTER-------------------------------------------------------------------
        
        #setNom(nom){
            if(nom == undefined){ throw new Error ("ERR : nom est un champs obligatoire")           //Erreur si nom est vide
            }else{this.#nom=nom};
                
        }

        #setPrenom(prenom){
            if(prenom == undefined){ throw new Error ("ERR : nom est un champs obligatoire")        //Erreur si prénom est vide
            }else{this.#prenom=prenom};
           
        }

        #setBranche(branche){
            this.#branche=branche;
        }

        #setSalaire(salaire){
            if(salaire == undefined){ throw new Error ("ERR : salaire est un champs obligatoire")}; //Erreur si salaire est vide
            if(salaire<=0){ throw new Error ("ERR : salaire doit un nombre positif")                //Erreur si salaire n'est pas strictement positif
            }else{this.#salaire=salaire};
        }

        setResponsable(responsable){
            this.#responsable=responsable;
        }

// -------------------------------------------------------------GETTERS-------------------------------------------------------------------
        
        getNom(){
            return this.#nom;
        }

        getPrenom(){
            return this.#prenom;
        }

        getBranche(){
            return this.#branche;
        }

        getSalaire(){
            return this.#salaire;
        }

        getResponsable(){
            return this.#responsable;
        }

// ------------------------------------------------------------BEHAVIORS----------------------------------------------------------------

        getSalaireAnnuel(){
            return (this.#salaire*12);
        }

    }