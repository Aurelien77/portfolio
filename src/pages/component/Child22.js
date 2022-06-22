import React, { Component } from "react";

class Child22 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild22: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild22":
        this.setState({ shchild22: !this.state.shchild22 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild22 } = this.state;
    return (
            
      <div  >
    BNP PARIBAS Siège (Paris)

Service IMEX
Prises d'appels et intervention pour résolutions d'incidents visioconférence et audiovisuels dans bureaux, salle de marchés et bureaux privatifs.
Création d'un nouveau poste de technicien, réalisation d'affiche pour les utilisateurs des salles.
Création d'un fichier de statistique sur excel en VBA, réalisation de graphiques dynamiques liés à la présation permettant les extractions de données afin de les présentation au client au cours de réunions trimestrielles.

site comprenant 16 salles de proximité.
Intervention pour le patronat BDDF (Banque détail De France). nombre d'intervenants = 1.

BNP PARIBAS (Montreuil)

   Technicien visioconferences
Service IMEX
Création des meeting vidéoconférence depuis un logiciel British Télécom,
Prises d'appels et intervention de proximité pour résolution ou escalade vers support de niveau 2.
Extraction de données trimestriels pour présentation chaque mois aux clients lors d'une réunion. Présentation de l'évolution des graphiques et des problèmes associés aux services et à la prestation. site comprenant 13 salles de proximités. nombre d'intervenants = 2. 

  
      {shchild22 && <Child22 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child22;