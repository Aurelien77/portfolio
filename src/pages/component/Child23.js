import React, { Component } from "react";

class Child23 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild23: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild23":
        this.setState({ shchild19: !this.state.shchild23 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild23 } = this.state;
    return (<div className="textcv4" >
    Egalement remplacement de techniciens gestionnaires de pont TMS , RMX + CMA chez BNP Paribas Claude Bernard 75019 ainsi que Ministère des finances et de l’économie 75012, connexion des Rim (Réunions interministérielles et visioconférences Ministre de l’économie). 
      

  
      {shchild23 && <Child23 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child23;