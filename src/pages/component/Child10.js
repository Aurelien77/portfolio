import React, { Component } from "react";

class Child10 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild10: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild10":
        this.setState({ shchild10: !this.state.shchild10 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild10 } = this.state;
    return (
            
      <div  >
     Child 10
      

  
      {shchild10 && <Child10 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child10;