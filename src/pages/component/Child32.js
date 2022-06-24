import React, { Component } from "react";

class Child32 extends Component {
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
    
      <span className="tableau">  <br></br>  


Formation aux métiers des arts appliqués, conception de maquettes publicitaires. Montages photos et mise en pages de journaux ; magazines, création d’illustrations et de logos.<br></br>

  
      {shchild32 && <Child32 />}
  
      <br></br> 
   </span>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child32;