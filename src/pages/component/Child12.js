import React, { Component } from "react";
import Child23 from "./Child23";
class Child12 extends Component {
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
        this.setState({ shchild12: !this.state.shchild23 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild23 } = this.state;
    return (
            
      <div onClick={() => this.hideComponent("shchild23")}  >
Préstataire de service pour le client SOCIETE GENERALE siège, La défense.
      

{shchild23 && <Child23/>}
  
    
   </div>
      
 
      
      
     
     
    
  
 
 
);
}
}
  
  
export default Child12;