import React, { Component } from "react";
import Child29 from "./Child29";
class Child26 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild29: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild29":
        this.setState({ shchild29: !this.state.shchild29 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild29} = this.state;
    return (
            
      <span onClick={() => this.hideComponent("shchild29")} className="formation">
     --Dévellopeur web Fullstack--
      


      {shchild29 && <Child29 />}
  
    
   </span>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child26;