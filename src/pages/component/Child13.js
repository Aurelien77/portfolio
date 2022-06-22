import React, { Component } from "react";

class Child13 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild13: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild13":
        this.setState({ shchild13: !this.state.shchild13 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild13 } = this.state;
    return (
            
      <div  >
     Child 13
      

  
      {shchild13 && <Child13 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child13;