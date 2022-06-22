import React, { Component } from "react";

class Child28 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild28: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild28":
        this.setState({ shchild28: !this.state.shchild28 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild28 } = this.state;
    return (
            
      <div  >
     Child 28
      

  
      {shchild28 && <Child28 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child28;