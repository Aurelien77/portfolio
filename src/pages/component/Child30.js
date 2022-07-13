import React, { Component } from "react";

class Child30 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild30: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild30":
        this.setState({ shchild30: !this.state.shchild30 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild30 } = this.state;
    return (
            
      <span className="tableau"><br></br> 
<u>1- Intervenir et assister à distance en centre de services informatiques</u> <br></br>
- Assister les utilisateurs dans un environnement informatique et numérique <br></br>
- Configurer et mettre à jour un poste de travail informatique <br></br>
- Traiter un incident dans un centre de services <br></br> 
- Proposer et mettre en œuvre des solutions d'équipements et de services <br></br>
- Participer au suivi de parc et à la gestion des configurations informatiques <br></br>
- Mettre en œuvre et maintenir des machines virtuelles <br></br>
<u>2-Intervenir et assister sur les systèmes et les réseaux informatiques </u><br></br> 
- Intervenir sur une infrastructure de réseau TCP/IP <br></br> 
- Intervenir sur une infrastructure de réseau sécurisé <br></br> 
- Télé-administrer et dépanner un serveur  <br></br>
- Intervenir sur un service d'annuaire de réseau <br></br> 
- Automatiser des tâches à l'aide de scripts <br></br> 
- Déployer des postes de travail sur un réseau d'entreprise <br></br> 
- Contribuer à la gestion des problèmes informatique <br></br> 
<u>3-Intervenir et assister sur les applications informatiques transverses </u> <br></br> 
- Intervenir sur un système de messagerie informatique <br></br> 
- Intervenir sur un serveur de base de données <br></br> 
- Identifier un dysfonctionnement dans une architecture distribuée <br></br> 
- Suivre les indicateurs de qualité de service et la relation client <br></br> 
- Organiser et développer la veille technologique en informatique <br></br> 
<u>4- Utiliser l'anglais dans son activité professionnelle en informatique </u><br></br> 

<u>Matières des cours </u><br></br> 
Administration Systèmes et Serveurs/Sécurité informatique <br></br> 
Bureautique/Support Client/Gestion de parc/Scripting/Anglais.

    <br></br> 
      {shchild30&& <Child30 />}
  
    
   </span>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child30;