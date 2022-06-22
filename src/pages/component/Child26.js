import React, { Component } from "react";

class Child26 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild26: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild26":
        this.setState({ shchild26: !this.state.shchild26 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild26 } = this.state;
    return (
            
      <div  >
     Child 26
      


      {shchild26 && <Child26 />}
  
    
   </div>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child26;