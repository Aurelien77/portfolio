import React, { Component } from "react";

class Child25 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild25: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild25":
        this.setState({ shchild25: !this.state.shchild25 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild25 } = this.state;
    return (
            
      <div className="textcv2" >
     Child 25
      

  
      {shchild25 && <Child25 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child25;