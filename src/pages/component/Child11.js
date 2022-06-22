import React, { Component } from "react";

class Child11 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild11: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild11":
        this.setState({ shchild11: !this.state.shchild11 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild11 } = this.state;
    return (
            
      <div  >
     Child 11
      

  
      {shchild11 && <Child11 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child11;