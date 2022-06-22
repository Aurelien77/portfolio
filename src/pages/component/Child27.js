import React, { Component } from "react";

class Child27 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild27: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild27":
        this.setState({ shchild27: !this.state.shchild27 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild27 } = this.state;
    return (
            
      <div  >
     Child 27
      

  
      {shchild27 && <Child27 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child27;