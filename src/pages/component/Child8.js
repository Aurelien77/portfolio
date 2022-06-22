import React, { Component } from "react";

class Child8 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild8: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild8":
        this.setState({ shchild8: !this.state.shchild8 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild8 } = this.state;
    return (
            
      <div  >
     Child 8
      

  
      {shchild8 && <Child8 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child8;