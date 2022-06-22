import React, { Component } from "react";

class Child16 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild16: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild16":
        this.setState({ shchild13: !this.state.shchild16 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild16 } = this.state;
    return (
            
      <div  >
     Child 16
      

  
      {shchild16 && <Child16 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child16;