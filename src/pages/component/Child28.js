import React, { Component } from "react";
import Child32 from "./Child32";
class Child28 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild32: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild32":
        this.setState({ shchild32: !this.state.shchild32 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild32 } = this.state;
    return (
            
      <span  onClick={() => this.hideComponent("shchild32")}  >
  Formation d'infographie et de graphismes publicitaires

  
      {shchild32 && <Child32 />}
  
    
   </span>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child28;