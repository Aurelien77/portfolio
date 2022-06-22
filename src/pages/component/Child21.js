import React, { Component } from "react";

class Child21 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild21: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild21":
        this.setState({ shchild21: !this.state.shchild21 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild21 } = this.state;
    return (
            
      <div  >
    Technicien Hotline support de visioconférence et affichages dynamiques
Prise d’appels hotline, support de visioconférence pour l’ensemble des clients Vidélio (Environ 1500 clients). Intervention sur matériel Cisco / Tandberg / Polycom / Radvision / Lifesize. Créations de tickets sur outils Sales force + service Max. Supervision affichage dynamique clients LCL, SNCF et EDF. Egalement remplacement de techniciens gestionnaires de pont TMS , RMX + CMA chez BNP Paribas Claude Bernard 75019 ainsi que Ministère des finances et de l’économie 75012, connexion des Rim (Réunions interministérielles et visioconférences Ministre de l’économie).
-Préparation de codecs Polycom et Cisco, MAJ, RMA chez constructeur,chez le client, plannification d'intervention de techniciens pour ré-installation des systèmes de visioconférences
      
Child 21
  
      {shchild21 && <Child21 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child21;