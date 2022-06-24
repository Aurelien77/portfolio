import React, { Component } from "react";

class Child20 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild20: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild20":
        this.setState({ shchild20: !this.state.shchild20 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild20 } = this.state;
    return (
            
      <div className="textcv4" > <br></br>
     Technicien visioconference N2 / Coordinateur
Intervention pour résoudre les incidents de visioconférence, fournis par l’outil de ticketing ou grâce à l'enquête ipads présente dans toutes les salles de visioconférence.
Coordinateur des techniciens locaux pour l'établissement des tests et la résolution des incidents.
Création d'un dossier préventif pour la vérification quotidienne des locaux par les techniciens des différents sites.
Administration des codecs (301 salles de la zone EMEA), configuration des systèmes à distance.
Utilisation de l’outil de statistique RPA.
Child 20
      

  
      {shchild20 && <Child20 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child20;