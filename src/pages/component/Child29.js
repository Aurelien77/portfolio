import React, { Component } from "react";

class Child29 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild29: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild29":
        this.setState({ shchild29: !this.state.shchild29 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild29 } = this.state;
    return (
            
      <span className="tableau"><br></br>
  <u >Réalisation de 6 projets WEB </u>
    
1- Transformez une maquette en site web avec HTML & CSS<br></br>
2- Dynamisez une page web avec des animations CSS<br></br>
3- Optimisez un site web existant<br></br>
4- Construisez un site e-commerce en JavaScript<br></br>
5- Construisez une API sécurisée pour une application d'avis gastronomiques<br></br>
6- Créez un réseau social d’entreprise
      

  
      {shchild29 && <Child29 />}
  
    
   </span>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child29;