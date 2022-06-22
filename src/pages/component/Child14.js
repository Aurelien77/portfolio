import React, { Component } from "react";

class Child14 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild14: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild14":
        this.setState({ shchild14: !this.state.shchild14 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild14 } = this.state;
    return (
            
      <div onClick={() => this.hideComponent("shchild24")} >
     Child 14
      

  
      {shchild14 && <Child14 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child14;