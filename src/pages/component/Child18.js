import React, { Component } from "react";

class Child18 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild18: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild18":
        this.setState({ shchild18: !this.state.shchild18 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild18 } = this.state;
    return (
            
      <div  >
     Technicien Support Helpdesk Prise d'appels Hotline et résolution des incidents par prise en mains à distances du matériel sur envirironnement windows 7/10/365.
Télédistribution d'application via serveur SCCM.
Création et suivi des tickets via l'outil de tikecting "Service-now".
Escalade des incidents aux services en charges en cas de non résolution. 
Child18

  
      {shchild18 && <Child18 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child18;