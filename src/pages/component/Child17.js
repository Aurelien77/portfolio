import React, { Component } from "react";

class Child17 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild17: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild17":
        this.setState({ shchild17: !this.state.shchild17 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild17 } = this.state;
    return (
            
      <div className="textcv2" > 
   Technicien Support machines virtuelles michrosoft hyper V Résolution de dysfonctionnement sur l’infrastructure virtuelle , Scripting Powershell (automatisation) 
      
   Child17
  
      {shchild17 && <Child17 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child17;