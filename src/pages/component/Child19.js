import React, { Component } from "react";

class Child19 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild19: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild19":
        this.setState({ shchild19: !this.state.shchild19 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild19 } = this.state;
    return (
            
      <div  className="textcv2" >
    Technicien Support Informatique Intervention en proximité pour la résolution de tous types d'incidents liés sur environnment windows 7.
Installation des postes informatique des nouveaux arrivants.
Télédistribution d'application via serveur SCCM.
prise en main à distance pour résolution d'incident si necessaire.
Création et suivi des tickets via l'outil de tikecting "Service-now".
Escalade des incidents aux services en charges en cas de non résolution. 
      Child19

  
      {shchild19 && <Child19 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child19;