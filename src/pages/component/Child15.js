import React, { Component } from "react";

class Child15 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild15: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild15":
        this.setState({ shchild15: !this.state.shchild15 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild15 } = this.state;
    return (
            
      <span  >
     Child 13
      

  
      {shchild15&& <Child15/>}
  
    
   </span>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child15;